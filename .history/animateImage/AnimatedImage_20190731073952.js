import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, Animated } from 'react-native';

const DUMMY_TEXT = "Lorem ipsum dolor sit amet,consectetur adipisicing elit.\
Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo \
reprehenderit optio amet ab temporibus asperiores quasi cupiditate. \
Voluptatum ducimus voluptates voluptas?"

export default class AnimatedImage extends Component {
    state = {
        activeImage
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
