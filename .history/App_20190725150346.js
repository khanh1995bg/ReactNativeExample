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
      outputRange: [30, 0]
    })
  }
  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <FlatList 

            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  
})