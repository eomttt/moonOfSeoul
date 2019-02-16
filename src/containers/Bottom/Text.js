import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import TextComponent from '../../components/Bottom/Text';

import Camera from 'react-native-camera';

export class TextContainer extends Component {

    takePhoto = () => {
      this.camera.capture()
    }

    render() {
      const text = '실제 달 찍기';

      return (
          <Camera ref={(cam) => {
                        this.camera = cam;
                  }}>
            <TextComponent text={text}
                           takePhoto={this.takePhoto}/>
          </Camera>
      );
    }
}

export default connect(
    null,
    null
)(TextContainer)