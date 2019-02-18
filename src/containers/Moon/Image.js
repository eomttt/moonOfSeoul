import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import ImageComponent from '../../components/Moon/Image';

import * as MoonActions from '../../reducers/modules/moon';

const cheerio = require('react-native-cheerio');

export class ImageContainer extends Component {

  componentWillMount = () => {
    this.loadWeb();
  }

  loadWeb = async () => {
    let url = 'https://astro.kasi.re.kr',
        page = '/life/pageView/7';

    let searchUrl = url + page;
    let response = await fetch(searchUrl);

    let htmlString = await response.text();
    let $ = cheerio.load(htmlString); 

    let imageList = $('div img', $('.moon'));

    let nowTime = new Date(),
        nowDate = nowTime.getDate();

    let imageSrc = url + imageList[nowDate].attribs.src;

    this.props.moonActions.setImage(imageSrc);
  }

  render() {
    const { imageSrc, userSrc } = this.props;

    return (
      <ImageComponent userSrc={userSrc}
                      imageSrc={imageSrc}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    imageSrc: state.moon.get('src'),
    userSrc: state.moon.get('userSrc')
});

const mapDispatchToProps = (dispatch) => ({
    moonActions: bindActionCreators(MoonActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageContainer)