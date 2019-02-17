import React, { Component } from 'react';
import { StyleSheet, Text, View, PanResponder, Animated } from 'react-native';

import TitleContainer from '../containers/Moon/Title';
import ImageContainer from '../containers/Moon/Image';
import SubTextContainer from '../containers/Moon/SubText';

import BottomTextContainer from '../containers/Bottom/Text';

export default class MainPage extends Component {
  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(1)
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        // Set the initial value to the current state
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});

        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },

      // When we drag/pan the object, set the delate to the states pan position
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset();

        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
      }
    });
  }

  render() {
    // Destructure the value of pan from the state
    let { pan, scale } = this.state;

    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];

    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {transform: [{translateX}, {translateY}, {scale}]};

    return (
      <View style={styles.container}>
        <TitleContainer/>
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <ImageContainer/>
        </Animated.View>
        <SubTextContainer/>
        <BottomTextContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  }
});