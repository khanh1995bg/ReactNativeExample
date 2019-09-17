import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  state = {
    data: [
      {id: 0, src: require('./src/image/image1.jpg')},
      {id: 1, src: require('./src/image/image2.jpg')},
      {id: 2, src: require('./src/image/image1.jpg')},
    ]
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
