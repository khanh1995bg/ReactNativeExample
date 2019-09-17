import React, { Component } from 'react';
import { View, Text, Image, SegmentedControlIOS, StyleSheet, Switch,  } from 'react-native';
import {BlurView, VibrancyView} from '@react-native-community/blur';

export default class Blur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlurs: true,
      blurBlurType: 'light',
      blurActiveSegment: 1,
      vibrancyBlurType: 'dark',
      vibrancyActiveSegment: 2
    };
  }

  onBlurChange(event) {
    this.setState({blurActiveSegment: event.nativeEvent.selectedSegmentIndex})
  }

  onBlurValueChange(value) {
    this.setState({blurBlurType: value})
  }

  onVibrancyChange(event) {
    this.setState({vibrancyActiveSegment: event.nativeEvent.selectedSegmentIndex})
  }

  onVibrancyValueChange(value) {
    this.setState({vibrancyBlurType: value})
  }

  render() {
    return (
      <View style={styles.container}>
          <Image source={{uri: 'https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.img}/>
          {this.state.showBlurs ? this.renderBlurs() : null}
          <View style={styles.blurToggle}>
            <Switch onValueChange={value => this.setState({showBlurs: value})} value={this.state.showBlurs}/>
          </View>
      </View>
    );
  }

  renderBlurs() {
    const tintColor = this.state.blurBlurType === 'xlight' ? 'black' : 'white';

    return (
      <View style={styles.container}>
          <View style={styles.blurContainer}> 
              <BlurView 
                blurType={this.state.blurBlurType}
                blurAmount={100}
                style={styles.blurView}
              />
              <Text style={[styles.text, {color: tintColor}]}>
                  Khanh Louis
              </Text>
              <SegmentedControlIOS 
                values={['xlight', 'light', 'dark', 'regular', 'prominent']}
                selectedIndex={this.state.blurActiveSegment}
                onChange={(event) => {this.onBlurChange(event)}}
                onValueChange={value => {this.onBlurValueChange(value)}}
                tintColor={tintColor}
              />
          </View>
          <VibrancyView
            blurType={this.state.vibrancyBlurType}
            blurAmount={10}
            style={[styles.container, styles.blurContainer]}
          >
            <Text style={styles.text}>Khanh louis 2</Text>
            <SegmentedControlIOS 
              values={['xlight', 'light', 'dark', 'regular', 'prominent']}
              selectedIndex={this.state.vibrancyActiveSegment}
              onChange={event => {this.onVibrancyChange(event)}}
              onValueChange={value => {this.onVibrancyValueChange(value)}}
              tintColor='white'
            />
          </VibrancyView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  img:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: null,
    width: null,
  },
  blurToggle: {
    position: 'absolute',
    top: 30,
    right: 10,
    alignItems: 'flex-end'
  },
  blurContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 20
  },
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  text: {
    position: 'absolute',
    top: 30,
    right: 10,
    alignItems: 'flex-end',
  }
});