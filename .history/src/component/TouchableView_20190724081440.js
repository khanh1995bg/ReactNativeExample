import React, { Component } from 'react'
import { Text, View, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'


const IS_ANDROID = Platform.OS === 'android';
const IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21 && IS_ANDROID;

const TouchableView = ({isRippleDisabled, rippleColor, chidren, style, ...props}) => {
    if(IS_RIPPLE_EFFECT_SUPPORTED && !isRippleDisabled) {
        const background = TouchableNativeFeedback.Ripple('#FFF')
        return (
            <TouchableNativeFeedback {...props} background={background}>
                <View style={style}>{chidren}</View>
            </TouchableNativeFeedback>
        )
    }else {
        return (
            <TouchableOpacity {...props} style={style}>
                {chidren}
            </TouchableOpacity>
        )
    }
}

TouchableView.propTypes = {
    isRippleDisabled: PropTypes.bool,
    rip
}

export default  TouchableView;
