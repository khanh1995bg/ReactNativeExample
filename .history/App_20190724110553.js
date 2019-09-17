import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Dimensions, TouchableWithoutFeedback, Animated, SafeAreaView } from 'react-native'

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
      <SafeAreaView>
      <ScrollView style={{flex: 1}}>
          {this.state.data.map(item => {
            return (
              <TouchableWithoutFeedback key={item.id}>
                  <Animated.View 
                    style={{width: width, height:  height - 150, padding: 15}}
                  >
                    <Image source={item.src} resizeMode="cover" style={{flex: 1, width: null, height: null, borderRadius: 20}}/>
                  </Animated.View>
              </TouchableWithoutFeedback>
            )
          })}
      </ScrollView>
      </SafeAreaView>
    )
  }
}
