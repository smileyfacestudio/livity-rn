import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Camera, Permissions } from 'expo';


class CameraComponent extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off
  }

  async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({hasCameraPermission: status === 'granted'})
  }
  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    }
    else if (hasCameraPermission === false){
      return <Text> No access to camera</Text>
    }
    else {
      return (
        <View style={{ flex:1 }}>
          <Camera style={{ flex:1 }} type={this.state.type}>
          <View style={{flexDirection:'row', paddingHorizontal: 25, marginTop: 30, justifyContent:'space-between'}}>
            <Ionicons
            onPress={() => {
              this.setState({
                flashMode: this.state.flashMode ===
                Camera.Constants.FlashMode.off ?
                Camera.Constants.FlashMode.on :
                Camera.Constants.FlashMode.off
              })
            }}
            name="ios-flash" size={32} color="white" />
            <Text style={{color:'white'}}>Tap and hold anywhere to record</Text>
            <Ionicons name="ios-arrow-forward" size={32} color="white" />
          </View>
          <View style={{flexDirection:'row', alignItems:'flex-start', paddingHorizontal: 23, marginTop: 30}}>
          <Ionicons
          onPress={() => {
            this.setState({
              type: this.state.type ===
              Camera.Constants.Type.back ?
              Camera.Constants.Type.front :
              Camera.Constants.Type.back
            })
          }}
          name="ios-reverse-camera" size={32} color="white" />
          </View>
          </Camera>
        </View>
      )
    }
  }
}

export default CameraComponent;

// const styles = StyleSheet.create({
//
// })
