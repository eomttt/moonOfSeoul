import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';


export default class Title extends Component {

  render() {
    const { title } = this.props;
    return (
      <View>
        <Text>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
