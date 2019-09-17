import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

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
          {this.state.data}
      </ScrollView>
    )
  }
}
