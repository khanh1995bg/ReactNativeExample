import React, { Component } from 'react'
import { Text, View, Animated, Easing, StyleSheet, Image } from 'react-native'

export default class StaggerExample extends Component {
    state = {
        transformAnimation: new Animated.Value(0),
        fallAnimation: new Animated.Value(0),
    }

    componentDidMount() {
        const transformToBallAnimation = Animated.timing(
            this.state.transformAnimation,
            {
                toValue: 50,
                duration: 1000
            }
        );

        const fallAnimation = Animated.timing(
            this.state.fallAnimation,
            {
                toValue: 250,
                duration: 3000,
                easing: 
            }
        )
    }
    render() {
        const animationStyles = {
            borderRadius: this.state.transformAnimation,
            transform: [
                {translateY: this.state.fallAnimation}
            ]
        };
        return (
            <View style={styles.container}>
                <Animated.Image 
                    style={[styles.viewImage, animationStyles]}
                    resizeMode="contain"
                    source={require('../animateImage/image/photo1.jpeg')}
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