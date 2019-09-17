import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const maxWidth = Dimensions.get('window').width;

export default class App extends Component {
  render() {
    return (
        <TextInput 
          placeholder="hello"
          style={styles.input}
        />
    )
  }
}

const styles = StyleSheet.create({

})