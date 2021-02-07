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
  Image,
  View,
} from 'react-native';

import { AppButton } from '../../globalComponents/CustomButton';
import { useSelector } from "react-redux";
import { styles } from '../../utils/styles';
import SwipeButton from 'rn-swipe-button';
import COLORS from '../../utils/Colors';

const DiamondImage = () => <Image resizeMode={'cover'} source={require('../../assets/images/swipe_icon.png')} style={styles.swipeIcon} />;

const {secondary,primary,darkGrey,white} = COLORS;

type Props = {
  navigation:Object
}

const DashBoard = ({...props}:Props): React$Node  => {

  const userName = useSelector(state => state.LoginReducer.userName);

  const {
    navigation:{navigate}
} = props;


const onGuestPress = () => {
  
  navigate('Profile');
}

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>

      <Text style={styles.welcomeText} >
      Welcome,
                 {userName}
            </Text>
            <View style = {styles.buttonContainerView}>
            <AppButton
                    onPress={() => onGuestPress()}
                    stylee={styles.appSecondButtonContainer}
                    title='Press Me'
                    testID='DashBoard_button1'
                 />

                <AppButton
                    onPress={() => onGuestPress()}
                    stylee={styles.appButtonContainer}
                    title='Press Me'
                    testID='DashBoard_button2'
                />
                
                <AppButton
                    onPress={() => onGuestPress()}
                    stylee={styles.submitButtonStyle}
                    title='Press Me'
                    testID='DashBoard_button3'
                />

<SwipeButton
                   containerStyles={
                    {...styles.swipeBox}
                }
                 disabled={false}
                    height={45}
                    onSwipeSuccess={() => onGuestPress()}
                    railBackgroundColor={secondary}
                    railBorderColor={darkGrey}
                    swipeSuccessThreshold={70}
                    shouldResetAfterSuccess={true}
                    resetAfterSuccessAnimDelay={1000}
                    railFillBackgroundColor={secondary}
                    railFillBorderColor={secondary}
                    thumbIconComponent={DiamondImage}
                    thumbIconStyles={{...styles.thumbIconContainer,...styles.thumbIconContainer}}
                    thumbIconBackgroundColor={primary}
                    thumbIconBorderColor={primary}
                    title="Slide me to Continue"
                    titleColor={white}
                />
                </View>
       </SafeAreaView>
    </>
  );
};

export default DashBoard;
