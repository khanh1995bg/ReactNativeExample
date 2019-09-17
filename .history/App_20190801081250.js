import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  } from 'react-native';
// import AnimatedImage from './animateImage/AnimatedImage';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <AnimatedImage />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  
})