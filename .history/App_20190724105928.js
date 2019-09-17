import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Dimensions, TouchableWithoutFeedback, Animated } from 'react-native'

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  state = {
    data: [
      {id: 0, src: require('./src/image/image1.jpg')},
      {id: 1, src: require('./src/image/image2.jpg')},
      {id: 2, src: require('./src/image/image3.jpg')},
    ]
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
          {this.state.data.map(item => {
            return (
              <Image source={item.src} resizeMode="cover" style={{width: width, height: height}}/>
            )
          })}
      </ScrollView>
    )
  }
}
