import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TitleContainer from '../containers/Moon/Title';
import ImageContainer from '../containers/Moon/Image';
import SubTextContainer from '../containers/Moon/SubText';

import BottomTextContainer from '../containers/Bottom/Text';

export default class MainPage extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <TitleContainer/>
        <ImageContainer/>
        <SubTextContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  }
});