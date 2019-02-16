import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import SubTextComponent from '../../components/Moon/SubText';

export class SubTextContainer extends Component {
    render() {
      const text = '실제 모양과 조금 다를 수 있습니다.';

      return (
          <SubTextComponent text={text}/>
      );
    }
}

export default connect(
    null,
    null
)(SubTextContainer)