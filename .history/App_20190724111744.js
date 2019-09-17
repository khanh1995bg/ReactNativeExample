import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  state = {
    data: [
      { id: 0, src: require('./src/image/image1.jpg') },
      { id: 1, src: require('./src/image/image2.jpg') },
      { id: 2, src: require('./src/image/image3.jpg') }
    ],
    activeImage: null,
  };

  componentDidMount() {
    this.imageRef = {};
    this.oldPosition = {};
    this.position = new Animated.ValueXY();
    this.dimentions = new Animated.ValueXY();
  }
  openImage = (index) => () =>{
      this.imageRef[index].measure((x, y, width, height, pageX, pageY) => {
          this.oldPosition.x = pageX,
          this.oldPosition.y = pageY,
          this.oldPosition.width = width,
          this.oldPosition.height = height

          this.position.setValue({
            x: pageX,
            y: pageY
          })
          this.dimentions.setValue
      })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {this.state.data.map((item, index) => {
            return (
              <TouchableWithoutFeedback key={item.id} onPress={this.openImage(index)}>
                <Animated.View style={{ width: width, height: height - 150, padding: 15 }}>
                  <Image
                    ref={ref => (this.imageRef[index] = ref)}
                    source={item.src}
                    resizeMode="cover"
                    style={{ flex: 1, width: null, height: null, borderRadius: 20 }}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
