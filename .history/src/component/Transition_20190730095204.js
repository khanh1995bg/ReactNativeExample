import React, { PureComponent } from 'react'
import { Text, View } from 'react-native';
import * as Animatable from "react-native-animatable";
import {theme} from '../theme';

export class Transition extends PureComponent {
    render() {
        const {index, ...rest} = this.props;
        return (
            <Animatable.View 
                animation="fadeIn"
                duration={theme.transitionDuration}
                delay={index ? (index * transitionDuration) / 5 : 0}
                useNativeDriver
                
            />
        )
    }
}

export default Transition
