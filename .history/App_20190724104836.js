import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  state = {
    data: [
      {id: 0, src: require('.')}
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
