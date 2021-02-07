/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { CustomTextInput } from '../../globalComponents/CustomTextInput';
import { AppButton } from '../../globalComponents/CustomButton';
import { styles } from '../../utils/styles';
import { setLoginData } from '../../actions/LoginAction';
import { useDispatch } from "react-redux";

type Props = {
  navigation:Object
}

const LoginPage = ({...props}:Props): React$Node  => {


  const {
    navigation:{navigate}
} = props;

const [userName,setUserName] = useState('');


const dispatch = useDispatch();

  const onGuestPress = () => {
    dispatch(setLoginData(userName))
    navigate('DashBoard');
}


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <CustomTextInput
                    ipOnChangeText={userName => {setUserName( userName )}}
                    label='User Name'
                    style={styles.inputView}
                    testID={'TextInput'}
                />

      <AppButton
                    onPress={() => onGuestPress()}
                    stylee={styles.appButtonContainer}
                    testID='loginButton'
                    title='LOGIN'
                />
       </SafeAreaView>
    </>
  );
};

export default LoginPage;
