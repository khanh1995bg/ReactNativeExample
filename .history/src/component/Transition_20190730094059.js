import React, { PureComponent } from 'react'
import { Text, View } from 'react-native';
import * as Animatable from "react-native-animatable";
import {theme} from '../theme'

export class Transition extends PureComponent {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default Transition
