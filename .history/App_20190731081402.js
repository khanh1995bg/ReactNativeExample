import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  } from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <Ani
        </View>
    )
  }
}

const styles = StyleSheet.create({
  
})