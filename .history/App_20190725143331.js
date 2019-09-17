import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';

const maxWidth = Dimensions.get('window').width;

export default class App extends Component {
  render() {
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, maxWidth);
    rows = normalizeRows(rows, maxWidth);


    console.log(processedImages, 'bbbbbbbbb')
    return (
      <PhotoGallery 
        renderContent={({onPhotoOpen}) => 
          <FlatList 
            data={processedImages}
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
    // console.log(onPhotoOpen, item, 'aaaaaaa')
    return (
      <View
      style={{flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between'}}
    > 
      <GridItem item={item} onPhotoOpen={onPhotoOpen}/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})