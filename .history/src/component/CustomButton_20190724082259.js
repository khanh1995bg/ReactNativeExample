import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types';
import TouchableView from './TouchableView';

const CustomButton = ({onPress, isEnabled, isLoading, text, buttonStyle, textStyle, ...otherProps}) => {
    const onButtonPress = isEnabled && !isLoading ? onPress : () => null

    return (
        <View {...otherProps}>
            <TouchableView onPress={}>
            
            </TouchableView>
        </View>
    )
}