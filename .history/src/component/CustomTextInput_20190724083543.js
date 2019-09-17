import React, { Component } from 'react'
import { Text, Platform, StyleSheet,  } from 'react-native';
import { View } from 'react-native-animatable'

export default class CustomTextInput extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
