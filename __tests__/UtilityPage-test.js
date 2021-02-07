import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import UtilityPage from '../src/components/Utility/UtilityScreen';

import {
  mergingTwoObjects,
    mergingTwoArrays,
    concatNumberAndString
} from '../src/utils/Utility';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ LoginReducer: { data: 'shubham' } });

const baseProps = {
    navigation: {
      navigate: jest.fn(),
      store: jest.fn()
    }
  };


  
test('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}>
      <UtilityPage {...baseProps} />
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  // 2 Objects
const obj1 = {test:'testCase1',value:90};
const obj2 = {name:'Shubham',age:25};
const mergedObj = {...obj1,...obj2};

// 2 Arrays
const arr1 = [1,2,3,4,5];
const arr2 = ['arr1','arr2','arr3','arr4','arr5'];
const mergedArr = [...arr1,...arr2];

// 2 Parameters {number | string}
const param1 = 40;
const param2 = 90;

describe('Checking merging of Two Objects', () => {
    test('given two objects, mergingTwoObjects returns a merged object', () => {
    expect(mergingTwoObjects(obj1,obj2)).toEqual(mergedObj);
    });

    test('given one object, mergingTwoObjects received undefined', () => {
    expect(mergingTwoObjects(obj1)).toBeUndefined();
    });

    test('given one object and null, mergingTwoObjects received undefined', () => {
    expect(mergingTwoObjects(obj1,null)).toBeUndefined();
    });

    test('given no parameter, mergingTwoObjects received undefined', () => {
    expect(mergingTwoObjects()).toBeUndefined();
    });
});

describe('Checking mergingTwoArrays ', () => {
    test('given two arrays, mergingTwoArrays returns a merged object', () => {
    expect(mergingTwoArrays(arr1,arr2)).toEqual(mergedArr);
    });

    test('given only one array, mergingTwoArrays received undefined', () => {
    expect(mergingTwoArrays(arr1)).toBeUndefined();
    });

    test('given one array and null, mergingTwoArrays received undefined', () => {
    expect(mergingTwoArrays(arr1,null)).toBeUndefined();
    });

    test('given no parameter, mergingTwoArrays received undefined', () => {
    expect(mergingTwoArrays()).toBeUndefined();
    });
});

describe('Checking concatination of Number nd String', () => {
    test('given two numbers, concatNumberAndString returns an addition value', () => {
    expect(concatNumberAndString(param1,param2)).toEqual(130);
    });

    test('given one number one String, concatNumberAndString received concatenated Value', () => {
    expect(concatNumberAndString(param1,param2.toString())).toMatch(`${param1}90`);
    });

    test('given both are String, concatNumberAndString received concatenated Value', () => {
    expect(concatNumberAndString(param1.toString(),param2.toString())).toMatch(`${param1}${param2}`);
    });

    test('given one number, concatNumberAndString received undefined', () => {
    expect(isNaN(concatNumberAndString(param1)));
    });

    test('given one number and null, concatNumberAndString received undefined', () => {
    expect(isNaN(concatNumberAndString(param1,null)));
    });

    test('given no parameter, concatNumberAndString received undefined', () => {
    expect(isNaN(concatNumberAndString()));
    });
});

