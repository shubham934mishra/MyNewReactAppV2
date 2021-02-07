/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
} from 'react-native';

import { useSelector } from "react-redux";
import { styles } from '../../utils/styles';
import { mergingTwoObjects, mergingTwoArrays, concatNumberAndString } from '../../utils/Utility';

  // 2 Objects
  const obj1 = {test:'testCase1',value:90};
  const obj2 = {name:'Shubham',age:25};
  
  // 2 Arrays
  const arr1 = [1,2,3,4,5];
  const arr2 = ['arr1','arr2','arr3','arr4','arr5'];
  
  // 2 Parameters {number | string}
  const param1 = 40;
  const param2 = 90;
  
type Props = {
}

const UtilityScreen = ({...props} : Props) : React$Node => {
  const userName = useSelector(state => state.LoginReducer.userName);
 
const stringify = (param) => {
    return JSON.stringify(param);
};


const renderObjects = () =>{
    const mergedObjects = mergingTwoObjects(obj1,obj2);
        return(
            <>
                <Text style={styles.welcomeText}>Merging The objects:</Text>
                <Text style={styles.nativeText}>1st Object : {stringify(obj1)} </Text>
                <Text style={styles.nativeText}>2nd Object : {stringify(obj2)} </Text>
                <Text style={styles.nativeText}>Results : {stringify(mergedObjects)}</Text>
            </>
        );
};
 
const renderArrays = () =>{
  const mergerArrays = mergingTwoArrays(arr1,arr2);
      return(
          <>
              <Text style={styles.welcomeText}>Merging The Arrays:</Text>
              <Text style={styles.nativeText}>1st Array : {stringify(arr1)} </Text>
              <Text style={styles.nativeText}>2nd Array : {stringify(arr2)} </Text>
              <Text style={styles.nativeText}>Results : {stringify(mergerArrays)}</Text>
          </>
      );
};

const renderConcatStringAndNumber = () =>{
  const mergedStrings = concatNumberAndString(param1,param2);
      return(
          <>
              <Text style={styles.welcomeText}>Concatination:</Text>
              <Text style={styles.nativeText}>1st {typeof param1 } : {param1} </Text>
              <Text style={styles.nativeText}>2nd {typeof param2 } : {param2} </Text>
              <Text style={styles.nativeText}>Results : {mergedStrings}</Text>
          </>
      );
};

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText} >
      Welcome,
                 {userName}
            </Text>
      
      
      <View style={styles.container}>
      {renderObjects()}
      </View>
      <View style={styles.container}>
      {renderArrays()}
      </View>
      <View style={styles.container}>
      {renderConcatStringAndNumber()}
      </View>
    </SafeAreaView>
    </>
  );
};

export default UtilityScreen;
