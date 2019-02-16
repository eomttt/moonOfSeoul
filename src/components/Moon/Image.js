import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';


export default class ImageComponent extends Component {

  setImage() {
    if (!!this.props.imageSrc) {
      return (
        <Image style={styles.Image}
               source={{uri: this.props.imageSrc}}>
        </Image>
      )
    } else {
      return (
        <Text>
          이미지 가져오는 중...
        </Text>
        )
    }
  }

  render() {
    const { imageSrc } = this.props;
 
    return (
      <View>
        {this.setImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    width: 50,
    height: 50
  },
});
