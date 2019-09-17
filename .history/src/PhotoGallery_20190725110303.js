import React, { Component } from 'react'
import { Text, View, Animated, Image } from 'react-native'
import PropTypes from 'prop-types'
import Transition from './Transition';
import DetailScreen from './DetailScreen';


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
   getChildContext() {
       
   }

   render() {
       const {photo, openProgress, isAnimating} = this.state;
       return (
           <View style={{flex: 1}}>
                {this.props.renderContent({onPhotoOpen: this.open})}
                <Transition 
                    openProgress={openProgress}
                    photo={photo}
                    sourceImageRefs={this._images}
                    isAnimating={isAnimating}
                />
                <DetailScreen 
                    photo={photo}
                    onClose={this.close}
                    openProgress={openProgress}
                    isAnimating={isAnimating}
                />
           </View>
       )
   }
}
