import React, { Component } from 'react'
import { Text, View, Animated, Easing } from 'react-native'

export default class StaggerExample extends Component {
    state = {
        transformAnimation: new Animated.Val
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
