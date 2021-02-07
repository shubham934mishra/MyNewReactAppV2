
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginPage from '../components/login/LoginPage';
import DashBoard from '../components/dashboard/DashBoard';
import Profile from '../components/profile/Profile';
import Utility from '../components/Utility/UtilityScreen';

const Stack = createStackNavigator();

const ScreenNavigations = () : Function => {
    return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Utility" component={Utility}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default ScreenNavigations;