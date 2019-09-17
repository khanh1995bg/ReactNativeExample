import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native';

const maxWidth = Dimensions.get('window').width;

export default class DetailScreen extends Component {
    state = {
        localPhoto: null,
    }

    componentWillReceiveProps(nextProps) {
        const {photo} = nextProps;
        if(photo) {
            this.setState({localPhoto: photo});
        }
    }
    render() {
        const {onClose, openProgress, isAnimating} = this.props;
        const {localPhoto} = this.state;
        if(localPhoto) {
            return (
                <Animated.View
                    style={[StyleSheet.absoluteFill]}
                    pointerEvents={isAnimating || this.props.photo ? 'auto' : 'none'}
                >
                    <Animated.Image 
                        ref={r => (this._openingImageRef = r)}
                        source={localPhoto.source}
                        style={{
                            width: maxWidth,
                            height: 300,
                            opacity: 
                        }}
                    />
                </Animated.View>
            )
        }
        
    }
}

const styles = StyleSheet.create({

})
