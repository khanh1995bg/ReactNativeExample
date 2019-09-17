import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  CameraRoll,
  Share } from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      scale: new Animated.Value(1),
      isImageFocused: false,
      data: [
        {
          id: 0,
          image: 'https://farm5.staticflickr.com/4332/35545027504_027eb8e2a6_z.jpg'
        },
        {
          id: 1,
          image: 'https://farm5.staticflickr.com/4386/35980200700_17e52c4250_z.jpg'
        },
        {
          id: 2,
          image: 'https://farm5.staticflickr.com/4356/36387221395_061bb71716_z.jpg'
        },
        {
          id: 3,
          image: 'https://farm5.staticflickr.com/4337/35984386640_8bd00cf482_z.jpg'
        },
      ]
    }
    this.scale = {
      transform: [{scale: this.state.scale}]
    };
    this.actionBarY = this.state.scale.interpolate({
      inputRange: [0.9, 1],
      outputRange: [0, -80],
    });
    this.borderRadius = this.state.scale.interpolate({
      inputRange: [0.9, 1],
      outputRange: [30, 0],
    })
  }
  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <FlatList 
              scrollEnabled
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  
})