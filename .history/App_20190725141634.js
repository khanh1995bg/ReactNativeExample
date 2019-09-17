import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import PhotoGallery from './src/PhotoGallery';
import { FlatList } from 'react-native-gesture-handler';
import GridItem from './src/GridItem';
import PHOTOS from './src/data';
import { processImages, buildRows, normalizeRows } from './src/utils';

const maxWidth = Dimensions.get('window').width;

export default class App extends Component {
  render() {
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, maxWidth);
    rows = normalizeRows(rows, maxWidth);


    console.log(rows, 'bbbbbbbbb')
    return (
      <PhotoGallery 
        renderContent={({onPhotoOpen}) => 
          <FlatList 
            data={rows}
            keyExtractor={this.keyExtractor}
            extraData={this.state}
            renderItem={this.renderItem(onPhotoOpen)}
          />
        }
      />
    )
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = (onPhotoOpen) => (item, index) => {
    console.log(onPhotoOpen, )
    <View
      style={{flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between'}}
    > 
      <GridItem item={item} onPhotoOpen={onPhotoOpen}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})