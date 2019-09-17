import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types';

const CustomButton = ({onPress, isEnabled, isLoading, text, buttonStyle, textStyle, ...other})