import React, { Component } from 'react'
import { Text, View, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

const IS_ANDROID = Platform.OS === 'android';
const IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21 && IS_ANDROID;

const TouchableView = ({isRippleDisabled, rippleColor, chidren, style, ...props}) => {
    if(IS_RIPPLE_EFFECT_SUPPORTED && !isRippleDisabled) {
        
    }
}

export default  TouchableView;
