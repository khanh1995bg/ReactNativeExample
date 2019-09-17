import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class PhotoGallery extends Component {
    state = {
        opacity: 1
    }

    static contextTypes = {
        onImageRef: PropTypes.func
    }

    setOpacity = opacity => {
        this.setState({opacity})
    }
    render() {
        const {style, photo} = this.props;
        const {opacity} = this
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
