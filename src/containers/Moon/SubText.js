import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import * as MoonActions from '../../reducers/modules/moon';

import SubTextComponent from '../../components/Moon/SubText';

export class SubTextContainer extends Component {
    takePhoto = () => {
      const options = {quality: 1};

      ImagePicker.launchCameraAsync(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          console.log('Image src: ' + response.uri);
          this.props.moonActions.setUserImage(response.uri)
        }
      });
    }

    render() {
      const text = '실제 모양과 조금 다를 수 있습니다.',
            subText = '<<실제 달 찍기>>'

      return (
          <SubTextComponent text={text}
                            subText={subText}
                            takePhoto={this.takePhoto}/>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
    moonActions: bindActionCreators(MoonActions, dispatch)
});

export default connect(
    null,
    mapDispatchToProps
)(SubTextContainer)