import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import PhotoGallery from './src/PhotoGallery';
import { FlatList } from 'react-native-gesture-handler';

const maxWidth = Dimensions.get('window').width;

export default class App extends Component {
  render() {
    return (
      <PhotoGallery 
        renderContent={({onPhotoOpen}) => 
          <FlatList 
            
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})