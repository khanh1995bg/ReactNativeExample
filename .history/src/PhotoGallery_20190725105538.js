import React, { Component } from 'react'
import { Text, View, Animated, Image } from 'react-native'
import PropTypes from 'prop-types'
import Transition from './Transition';


class PhotoGalleryPhoto extends Component {
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
        const {opacity} = this.state;
        return (
            <Animated.Image 
                ref={i => {this.context.onImageRef(photo, i, this.setOpacity)}}
                style={[style, {opacity}]}
                source={photo.source}
            />
        )
    }
}
export default class PhotoGallery extends Component {
   static Photo = PhotoGalleryPhoto;
   state = {
       photo: null,
       openProgress: new Animated.Value(0),
       isAnimating: false
   };

   _images = {};
   _imageOpacitySetters = {};

   static childContextTypes = {
       onImageRef: PropTypes.func
   }

   render() {
       const {photo, openProgress, isAnimating} = this.state;
       return (
           <View style={{flex: 1}}>
                {this.props.renderContent({onPhotoOpen: this.open})}
                <Transition 
                    openProgress
                />
           </View>
       )
   }
}
