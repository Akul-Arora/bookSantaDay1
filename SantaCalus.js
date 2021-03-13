import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
export default class SantaAnimation extends React.Component {
  render() {
    return (
        <View>
            <Image src={require('./SANTA.jpg')} styles={{width:20, height:20}} />
            </View>
      /*<LottieView
      source={require('../assets/13015-santa-claus.json')}
      style={{width:"60%"}}
      autoPlay loop />*/

    )
  }
}