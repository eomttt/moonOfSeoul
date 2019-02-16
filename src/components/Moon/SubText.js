import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';


export default class SubText extends Component {

  render() {
    const { text } = this.props;
    return (
      <View>
        <Text>
          {text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
