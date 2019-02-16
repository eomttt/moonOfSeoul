import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import TitleComponent from '../../components/Moon/Title';

export class TitleContainer extends Component {
    render() {
      const title = '오늘의 달';

      return (
          <TitleComponent title={title}/>
      );
    }
}

export default connect(
    null,
    null
)(TitleContainer)