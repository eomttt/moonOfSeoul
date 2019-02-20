import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';


export default class SubText extends Component {

  render() {
    const { text, subText, takePhoto } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={takePhoto}>
          <Text style={styles.text}>
            {subText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '5%',
    color: 'white'
  }
});
