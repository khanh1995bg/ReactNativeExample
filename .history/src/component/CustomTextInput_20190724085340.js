import React, { Component } from 'react'
import { Text, Platform, StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native-animatable'

const IS_ANDROID = Platform.OS === 'android'

export default class CustomTextInput extends Component {
    state = {
        isFocused: false,
    }


    render() {
        const {isEnabled, ...otherProps} = this.props;
        const {isFocused} = this.state;
        const color = isEnabled ? 'white' : 'rgba(255, 255, 255, 0.4)'
        return (
            <View style={styles.container}>
               <View style={[styles.textInputWrapper, {borderColor}]}>
                    <TextInput 
                        ref={(ref) => this.textInputRef = ref}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        style={[styles.textInput, {color}]}
                        maxLength={32}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'rgba(255,255,255,0.4)'}
                        selectionColor={'white'}
                        onFocus={() => this.setState({ isFocused: true})}
                        onBlur={() => this.setState({isFocused: false})}
                    />
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        marginBottom: 10
    },
    textInputWrapper: {
        height: 42,
        marginBottom: 2,
        borderBottomWidth: 1
    },
    textInput: {
        flex: 1,
        
    }
})
