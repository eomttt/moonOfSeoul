import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded } from 'react-native-admob'

let bannerId = 'ca-app-pub-3940256099942544/6300978111'

BANNER_ID = {
  ANDROID: 'ca-app-pub-9152190009267204/8927727869',
  TEST: 'ca-app-pub-3940256099942544/6300978111'
}

export default class Advertise extends Component {

  bannerError = () => {
    console.log('Fail to admob load');
  }

  render() {
    return (
      <View style={styles.advertise}>
        <AdMobBanner
          adSize="fullBanner"
          adUnitID={getBannerId()}
          onAdFailedToLoad={this.bannerError}/>
      </View>
    );
  }
}

const getBannerId = () => {
  if (global.PUBLIC_MODE) {
    if (Platform.OS === 'ios') {
      return BANNER_ID.IOS;
    } else {
      return BANNER_ID.ANDROID;
    }
  }

  return BANNER_ID.TEST;
}

const styles = StyleSheet.create({
  advertise: {
    alignItems:'center',
    marginTop: 10
  }
});
