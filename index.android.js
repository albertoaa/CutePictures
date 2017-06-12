/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

const Images = [
    {
        uri: "https://i.imgur.com/mxgtWKt.jpg",
        label: "Cat on a blue blanket"
    },

    {
        uri: "https://i.imgur.com/XCRnNWn.jpg",
        label: "A cat toy"
    },

    {
        uri: "https://i.imgur.com/dqQX1K0.jpg",
        label: "A close up of a dog"
    },

    {
        uri: "https://i.imgur.com/nZXbSbh.jpg",
        label: "Sheep next to a cat"
    },

    {
        uri: "https://i.imgur.com/mXCjefR.jpg",
        label: "Cat laying on the grass"
    },

    {
        uri: "https://i.imgur.com/AGyxRcc.jpg",
        label: "Bird sitting on a railing"
    }
];

export default class CutePictures extends Component {
  state = {
    index: 0,
    imageWidth: null
  }

  onImageLayout(event) {
        this.setState({
            imageWidth: event.nativeEvent.layout.width
        });
  }

  nextImage(event) {
    const { index,imageWidth } = this.state,
          X = event.nativeEvent.locationX,
          delta = (X < imageWidth/2) ? -1 : 1;

    let newIndex = (index + delta) % Images.length;

    if (newIndex < 0) {
      newIndex = Images.length - Math.abs(newIndex);
    }

    this.setState({
      index: newIndex
    });
  }
  render() {
    const image = Images[this.state.index];
    return (
      <View style={styles.container}>
        <View style={styles.empty} />
        <TouchableHighlight onPress={this.nextImage.bind(this)}
                            style={styles.image}>
        <Image source={{uri: image.uri}}
               style={styles.image}
               onLayout={this.onImageLayout.bind(this)}>
               <Text style = { styles.imageLabel } > {image.label} </Text>
        </Image>       
        </TouchableHighlight>
        <View style={styles.empty} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#abcdef',
    },
    welcome: {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        margin: 45,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        flex: 2,
        width: 320,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageLabel: {
        textAlign: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        color: 'white',
        width: 320
    },
    empty: {
        flex: 1
    }
});

AppRegistry.registerComponent('CutePictures', () => CutePictures);
