import React, { Component } from 'react'
import { Text, View, Animated, Easing, StyleSheet, Image } from 'react-native'

export default class StaggerExample extends Component {
    state = {
        transformAnimation: new Animated.Value(0),
        fallAnimation: new Animated.Value(0),
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.Image 
                    style={styles.viewImage}
                    resize
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewImage: {
        width: 200,
        height: 150,
    }
})