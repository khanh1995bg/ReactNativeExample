import React, { Component } from 'react'
import { Text, View, Image, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native'


const maxWidth = Dimensions.get('window').width;

export default class Transition extends Component {
    state = {
        destinationDimension: {
            width: maxWidth,
            height: 300,
            pageX: 0,
            pageY: 0,
        },
        sourceDimension: {
            width: 0,
            height: 0,
            pageX: 0,
            pageY: 0,
        }
    }

    componentWillReceiveProps(nextProps) {
        const {photo, sourceImageRefs} = nextProps;

        if(photo) {
            const sourceImageRef = sourceImageRefs[photo.id];
            sourceImageRef
            .getNode()
            .measure((soruceX, soruceY, width, height, pageX, pageY) => {
                this.setState({
                    sourceDimension: {
                        width,
                        height,
                        pageX,
                        pageY
                    },
                    photo
                });
            });
        }
    }
    render() {
        const {openProgress} = this.props;
        const {destinationDimension, sourceDimension, photo} = this.state;
        if(photo) {
            let destRightDimension = {
                width: 0,
                height: 0,
                pageX: 0,
                pageY: 0,
            };
            let openingInitScale = 1;

            const aspectRatio = photo.width / photo.height;
            const screenAspectRatio = destinationDimension.width / destinationDimension.height;

            destRightDimension = {
                width: destinationDimension.width,
                height: destinationDimension.height,
                pageX: destinationDimension.pageX,
            }
        }
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
