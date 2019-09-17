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
       return {onImageRef: this._onImageRef};
   }
   _onImageRef = (photo, imageRef, setOpacity) => {
       this._images[photo.id] = imageRef;
       this._imageOpacitySetters[photo.id] = setOpacity;
   }
   open = photo => {
       this._imageOpacitySetters[photo.id] (
           this.state.openProgress.interpolate({
               inputRange: [0.005, 0.01],
               outputRange: [1, 0]
           })
       );
       this.setState({photo, isAnimating: true}, () => {
           Animated.timing(this)
       })
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
