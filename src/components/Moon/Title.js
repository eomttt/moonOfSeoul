import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';


export default class Title extends Component {

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '20%',
    backgroundColor: 'blue'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: '30%'
  }
});
