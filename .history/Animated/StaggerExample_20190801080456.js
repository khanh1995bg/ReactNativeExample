import React, { Component } from 'react'
import { Text, View, Animated, Easing, StyleSheet } from 'react-native'

export default class StaggerExample extends Component {
    state = {
        transformAnimation: new Animated.Value(0),
        fallAnimation: new Animated.Value(0),
    }
    render() {
        return (
            <Animated.View sty>
                <Text> textInComponent </Text>
            </Animated.View>
        )
    }
}
