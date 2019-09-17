import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import TouchableView from './TouchableView';

const CustomButton = ({onPress, isEnabled, isLoading, text, buttonStyle, textStyle, ...otherProps}) => {
    const onButtonPress = isEnabled && !isLoading ? onPress : () => null

    return (
        <View {...otherProps}>
            <TouchableView onPress={onButtonPress} style={[styles.button, buttonstyle]}>
                {(isLoading) && <ActivityIndicator style={styles.snipper} color={'grey'}/>}
                {(!isLoading) && <ActivityIndicator style={styles.snipper} color={'grey'}/>}
            </TouchableView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 42,
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }
})