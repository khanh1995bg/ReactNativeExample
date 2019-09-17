import React, { Component } from 'react'
import { Text, ActivityIndicator, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import TouchableView from './TouchableView';
import { View } from 'react-native-animatable'

const CustomButton = ({onPress, isEnabled, isLoading, text, buttonStyle, textStyle, ...otherProps}) => {
    const onButtonPress = isEnabled && !isLoading ? onPress : () => null

    return (
        <View {...otherProps}>
            <TouchableView onPress={onButtonPress} style={[styles.button, buttonstyle]}>
                {(isLoading) && <ActivityIndicator style={styles.snipper} color={'grey'}/>}
                {(!isLoading) && <Text style={[styles.text, textStyle]}>{text}</Text>}
            </TouchableView>
        </View>
    )
}

CustomButton.propTypes = {
    onPress: PropTypes.func,
    isEnabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    text: PropTypes.string,
    buttonStyle: PropTypes.any,
    textStyle: PropTypes.any,
}

CustomButton.defaultProps = {
    onPress: () => null,
    isEnabled: true,
    isLoading: false
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

export default CustomButton;