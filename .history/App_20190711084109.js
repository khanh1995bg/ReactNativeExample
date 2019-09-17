import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { set, cond, block, eq, add, Value, event, concat, multiply } = Animated;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.X = new Value(0);
    this.Y = new Value(0);
    this.R = new Value(0);
    this.Z = new Value(1);
    const offsetX = new Value(0);
    const offsetY = new Value(0);
    const offsetR = new Value(0);
    const offsetZ = new Value(1);

    this.handlePan = event([
      {
        nativeEvent: ({ translationX: x, translationY: y, state }) =>
          block([
            set(this.X, add(x, offsetX)),
            set(this.Y, add(y, offsetY)),
            cond(eq(state, State.END), [
              set(offsetX, add(offsetX, x)),
              set(offsetY, add(offsetY, y)),
            ]),
          ]),
      },
    ]);

    this.handlePan

   }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

