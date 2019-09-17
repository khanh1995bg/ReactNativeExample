import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const maxWidth = Dimensions.get('window').width;

export default class App extends Component {
  render() {

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