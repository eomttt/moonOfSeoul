import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import TextComponent from '../../components/Bottom/Text';

export class TextContainer extends Component {

    takePhoto = () => {
        alert('Take moon');
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