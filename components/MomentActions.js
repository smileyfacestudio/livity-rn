import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class MomentActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dripCount: '17,335',
      commentCount: '17,335'
    }
  }

  render() {
    return (
      <View style={styles.sideButtons}>
        <View style={ styles.commentCounters }>
          <Image style={styles.iconDrip} source={require('../assets/drip.png')} />
          <Text style={styles.dripText}>{this.state.dripCount}</Text>
        </View>
        <View style={ styles.commentCounters }>
          <Image style={styles.iconDrip} source={require('../assets/comments.png')} />
          <Text style={styles.iconCounterText}>{this.state.commentCount}</Text>
        </View>
        <View style={ styles.commentCounters }>
          <Image style={styles.iconDrip} source={require('../assets/more.png')} />
        </View>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  sideButtons: {
    position:'absolute',
    right: 10,
    top: 270,
    flexDirection: 'column',
  },
  commentCounters: {
    marginTop: 20,
  },
  iconCounter: {
    fontSize: 21,
    color: '#bbbbbb',
    textAlign: 'center',
  },
  dripText: {
    color: 'rgb(51,204,255)',
    fontSize: 16
  },
  iconCounterText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
})
