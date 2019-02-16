import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';


export default class TextComponent extends Component {

  render() {
    const { text, takePhoto } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={takePhoto}>
          <Text>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
