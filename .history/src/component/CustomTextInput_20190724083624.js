import React, { Component } from 'react'
import { Text, Platform, StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native-animatable'

const IS_ANDROID = Platform.OS === 'android'

export default class CustomTextInput extends Component {
    state = {}
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
