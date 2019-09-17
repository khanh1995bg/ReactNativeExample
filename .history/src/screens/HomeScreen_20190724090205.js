import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../component/CustomButton';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomButton 
                    text={'Logout'}
                    onPress={this.props.logout}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        
    }
})