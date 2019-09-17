import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import Images from './images';

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
                        onLayout={() => {}}
                    />
                    {this.renderImageDummyData()}
                </View>
                {this.renderActiveImage()}
                {this.renderImageCloseButton()}
            </View>
        )
    }

    renderFocusableImages = () => {
        const activeIndexStyle = {
            opacity: this.state.activeImage ? 0 : 1
        }

        return (
            <View style={styles.grid}>
                {
                    Images.map((src, idx) => {
                        const activeStyle = idx === this.state.activeIndex ? activeIndexStyle : undefined
                        return (
                            <TouchableWithoutFeedback>
                                <Image 
                                    source={{uri: src}}
                                    resizeMode="cover"
                                    style={[styles.photoStyle, activeStyle]}
                                    
                                />
                            </TouchableWithoutFeedback>
                        )
                    })
                }
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
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})