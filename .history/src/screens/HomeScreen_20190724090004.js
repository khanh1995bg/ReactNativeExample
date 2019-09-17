import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../component/CustomButton';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomButton 
                    text={''}
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
    }
})