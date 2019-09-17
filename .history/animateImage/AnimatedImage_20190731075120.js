import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';

const DUMMY_TEXT = "Lorem ipsum dolor sit amet,consectetur adipisicing elit.\
Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo \
reprehenderit optio amet ab temporibus asperiores quasi cupiditate. \
Voluptatum ducimus voluptates voluptas?"

export default class AnimatedImage extends Component {
    state = {
        activeImage: null,
        activeIndex: null,
        size: new Animated.ValueXY(),
        position: new Animated.ValueXY(),
        animation: new Animated.Value(0),
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderFocusableImages()}
                </ScrollView>

                <View
                    style={StyleSheet.absoluteFill}
                    pointerEvents={this.state.activeImage ? "auto" : "none"}
                >
                    <View 
                        style={styles.topContent}
                        ref={image => this._viewImage = image}
                        onLayout
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topContent: {
        flex: 2,
    }
})