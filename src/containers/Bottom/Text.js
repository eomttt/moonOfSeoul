import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import TextComponent from '../../components/Bottom/Text';

import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';

export class TextContainer extends Component {


    takePhoto = () => {
      const options = {
        title: 'Select Avatar',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = { uri: response.uri };

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        }
      });
    }

    render() {
      const text = '실제 달 찍기';

      return (
            <TextComponent text={text}
                           takePhoto={this.takePhoto}/>
      );
    }
}

export default connect(
    null,
    null
)(TextContainer)