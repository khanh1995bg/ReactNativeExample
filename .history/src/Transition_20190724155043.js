import React, { Component } from 'react'
import { Text, View, Image, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native'


const maxWidth = Dimensions.get('window').width;

export default class Transition extends Component {
    state = {}
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
