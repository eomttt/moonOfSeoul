import React, { Component } from 'react';
import { StyleSheet, Text, View,
         TouchableOpacity, Linking, Image,
         PanResponder, Animated, ImageBackground } from 'react-native';


export default class ImageComponent extends Component {

  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(1)
  };

  beforeDistance = null;

  maxScale = 1.5;
  minScale = 1;

  offsetScale = 0.05;

  nowScale = this.minScale;

  componentWillMount = () => {
    this.setPanResponder();
  }

  calcDistance = (x1, y1, x2, y2) => {
    let dx = Math.abs(x1 - x2)
    let dy = Math.abs(y1 - y2)

    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }

  setPanResponder = () => {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        const touches = e.nativeEvent.touches;

        // Set the initial value to the current state
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});

        if (touches.length > 1) {
          // Nothing
        } else {
          this.setAnimated(this.nowScale + this.offsetScale, 3); 
        }
      },

      // When we drag/pan the object, set the delate to the states pan position
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ], {
        listener: (e, gestureState) => {
          const touches = e.nativeEvent.touches;

          if (touches.length > 1) {
            this.calculateScale(touches);
            this.setAnimated(this.nowScale);
          } else {
            // Nothing       
          }
      }}),

      onPanResponderRelease: (e, {vx, vy}) => {
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset();
        this.setAnimated(this.nowScale);
      }
    });
  }

  setAnimated = (scale, friction) => {
    Animated.spring(
      this.state.scale,
      { toValue: scale, friction: friction }
    ).start();       
  }

  calculateScale = (touches) => {
    let nowDistance = this.calcDistance(touches[0].pageX, touches[0].pageY,
                                        touches[1].pageX, touches[1].pageY);
    if (!!this.beforeDistance) {
      if (this.beforeDistance < nowDistance) {
        if (this.nowScale <= this.maxScale) {
          this.nowScale = this.nowScale + this.offsetScale;
        }
      } else {
        if (this.nowScale >= this.minScale) {
          this.nowScale = this.nowScale - this.offsetScale;
        }
      }
    }

    this.beforeDistance = nowDistance;    
  }

  setImage(imageStyle) {
    if (!!this.props.imageSrc) {
      if (!!this.props.userSrc) {
        return (
          <ImageBackground style={styles.imageBackground}
                           source={{uri: this.props.userSrc}}>
            {this.renderImage(imageStyle)}
          </ImageBackground>
        ) 
      } else {
        return (
          this.renderImage(imageStyle)
        )       
      }
    } else {
      return (
        <Text style={styles.titleText}>
          이미지 가져오는 중...
        </Text>
        )
    }
  }

  renderImage(imageStyle) {
    return (
      <View style={styles.imageContainer}>
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <Image style={styles.image}
                 source={{uri: this.props.imageSrc}}>
          </Image>
        </Animated.View>
      </View>   
    )
  }

  render() {
    const { imageSrc, userSrc } = this.props;
    // Destructure the value of pan from the state
    let { pan, scale } = this.state;

    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];

    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {transform: [{translateX}, {translateY}, {scale}]};

    return (
      <View style={styles.container}>
        {this.setImage(imageStyle)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: '10%'
  },
  imageBackground: {
    width: 'auto',
    height: '100%',
    overflow: 'hidden',
  },
  imageContainer: {
    width: 70,
    height: 70,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%'
  },
});
