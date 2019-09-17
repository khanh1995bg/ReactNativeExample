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

    componentDidMount() {
        this._gridImages = {};
    }

    handleOpeningImage = (idx) => {
        this._gridImages[idx].measure((x, y, width, height, pageX, pageY) => {
            this._x = pageX
            this._y = pageY
            this._width = width,
            this._height = height

            this.state.position.setValue({
                x: pageX,
                y: pageY
            })

            this.state.size.setValue({
                x: width,
                y: height
            })

            this.setState({
                activeImage: Images[idx],
                activeIndex: idx
            }, () => {
                this._viewImage.measure((tX, tY, tWidth, tHeight, tPageX, tPageY) => {
                    Animated.parallel([
                        Animated.spring(this.state.position.x, {
                            toValue: tPageX
                        }),
                        Animated.spring(this.state.position.y, {
                            toValue: tPageY
                        }),
                        Animated.spring(this.state.size.x, {
                            toValue: tWidth
                        }),
                        Animated.spring(this.state.size.y, {
                            toValue: tHeight
                        }),
                        Animated.spring(this.state.animation, {
                            toValue: 1
                        })
                    ]).start();
                })
            })
        })
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
                            <TouchableWithoutFeedback
                                key={idx}
                                onPress={() => this.handleOpeningImage(idx)}
                            >
                                <Image 
                                    source={{uri: src}}
                                    resizeMode="cover"
                                    style={[styles.photoStyle, activeStyle]}
                                    ref={image => this._gridImages[idx] = image}
                                />
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
        )
    }

    renderImageDummyData = () => {
        const animatedContentTranslate = this.state.animation.interpolate({
            input
        })
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
    },
    photoStyle: {
        width: '33%',
        height: 150,
    }
})