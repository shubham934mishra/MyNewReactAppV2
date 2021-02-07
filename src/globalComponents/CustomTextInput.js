//@flow
import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../utils/styles';
import COLORS from "../utils/Colors";

export const CustomTextInput = ({ label, ipOnChangeText, testID }:
    {label:string,ipOnChangeText:Function,testID:string})  : Function => (
    <View style={styles.inputView}>
        <TextInput
            testID={testID}
            placeholder={label}
            placeholderTextColor={COLORS.placeholderColor}
            onChangeText={ipOnChangeText}
        />
    </View>
);
