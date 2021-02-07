
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import LoginPage from '../src/components/login/LoginPage';
import { render, fireEvent } from '@testing-library/react-native';


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
      <LoginPage {...baseProps} />
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test in login page', async () => {
    const { getByTestId, queryByText } = render(
        <Provider store={store}>
          <LoginPage {...baseProps} />
        </Provider>
      );
      
  // Test For TextInput in Login Screen
  const textInput = getByTestId('TextInput');
  fireEvent.changeText(textInput, 'Shubham mishra: checked');


  
  // Test For Buttons in Login Screen 
  const navigateToButtons = getByTestId('loginButton');
  fireEvent.press(navigateToButtons);
  const loginKey = await queryByText('Shubham : login');
  expect(loginKey).toBeDefined();
  expect(baseProps.navigation.navigate)
    .toHaveBeenCalledWith('DashBoard');
  })
  