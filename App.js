import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  } from 'react-native';
// import StaggerExample from './Animated/StaggerExample';
// import AnimatedImage from './src/animateImage/AnimatedImage';
// import ScrollViewHeader from './src/AnimatedScrollviewHeader/ScrollViewHeader';
import Blur from './src/BlurScreen/Blur';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  render() {
    return <Blur />
  }
}

const styles = StyleSheet.create({
  
})