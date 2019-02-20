import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import TitleContainer from '../containers/Moon/Title';
import ImageContainer from '../containers/Moon/Image';
import SubTextContainer from '../containers/Moon/SubText';

import BottomTextContainer from '../containers/Bottom/Text';

const backImage = '../assets/imgs/night_sky.png';

export default class MainPage extends Component {

  componentWillMount() {

  }

  render() {
    return (
        <ImageBackground source={require(backImage)}
                         style={styles.backgroundImage}>
          <TitleContainer/>
          <ImageContainer/>
          <SubTextContainer/>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  }
});