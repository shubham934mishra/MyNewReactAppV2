/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  NativeModules
} from 'react-native';

import { useSelector } from "react-redux";
import { styles } from '../../utils/styles';
import { AppButton } from '../../globalComponents/CustomButton';

type Props = {
  navigation:Object
}


const Profile = ({...props}:Props) : React$Node => {
  const userName = useSelector(state => state.LoginReducer.userName);
 
  const [deviceName,setDeviceName] = useState('');
 
  const {
    navigation:{navigate}
} = props;
 
const onGuestPress = () => {

  navigate('Utility');
}

useEffect(()=>{
  NativeModules.Device.getDeviceName((err, name) => {
   setDeviceName(name);
});
},[]);
 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <Text style={styles.nativeText}>User Name: {userName} </Text>
      <Text style={styles.nativeText}>Device : {deviceName}</Text>
      <AppButton
                    onPress={() => onGuestPress()}
                    stylee={styles.appButtonContainer}
                    title='Press Me'
                    testID='Profile_button'
                 />
    </SafeAreaView>
    </>
  );
};

export default Profile;
