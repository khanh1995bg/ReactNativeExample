import React, { Component } from 'react'
import { Text, View, Animated, Easing, Sty } from 'react-native'

export default class StaggerExample extends Component {
    state = {
        transformAnimation: new Animated.Value(0),
        fallAnimation: new Animated.Value(0),
    }
    render() {
        return (
            <Animated.View>
                <Text> textInComponent </Text>
            </Animated.View>
        )
    }
}
