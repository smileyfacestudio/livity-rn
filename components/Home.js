import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  AppRegistry,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Icon,
  TouchableHighlight
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      profileName: 'guwop',
      dripCount: '17,335',
      commentCount: '17,335'
    }
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.imageContainer}>
        <StatusBar hidden={true} />
        <ImageBackground style={styles.image} source={require('../assets/guccibg.png')}>
          <TouchableHighlight onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Explore' })
                ],
              }))
            }}>
            <View style={styles.inputView}>
              <Image source={require('../assets/search.png')} />
              <Text style={styles.searchText}>Local</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.profile} onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Profile' })
                ],
              }))
            }}>
            <Image source={require('../assets/profilePhoto.png')} />
          </TouchableOpacity>

          <TouchableHighlight onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'CameraPage' })
                ],
              }))
            }}>
            <Image style={styles.camera} source={require('../assets/camera.png')} />
          </TouchableHighlight>
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

          <TouchableOpacity style={styles.guwop}>
            <View style={styles.guwopContainer}>
              <Image source={require('../assets/gucciprofile.png')} />
              <Text style={styles.guwopText}>{this.state.profileName}</Text>
            </View>
          </TouchableOpacity>

          <TouchableHighlight style={styles.like} onPress={this._onPressButton}>
            <Image source={require('../assets/path.png')} />
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  inputView: {
    flexDirection:'row',
    alignItems: 'center',
    position:'absolute',
    width: 200,
    top: 50,
    right: 60,
  },
  searchText: {
    marginLeft: 20,
    color:'#ffffff',
    fontWeight: 'bold',
    fontSize: 26,
  },
  input: {
    height: 36,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  image: {
    flex: 1
  },
  profile: {
    // ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    top: 50,
    right:20,
    position: 'absolute',
    height:10 // add if dont work with above

  },
  sideButtons: {
    position:'absolute',
    right: 10,
    top: 270,
    flexDirection: 'column',
  },
  camera: {
    position: 'absolute',
    top: 60,
    left: 30
  },
  dripText: {
    color: 'rgb(51,204,255)',
    fontSize: 16
  },
  commentCounters: {
    marginTop: 20,
  },
  iconCounter: {
    fontSize: 21,
    color: '#bbbbbb',
    textAlign: 'center',
  },

  iconCounterText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
  like: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 50,
    right: 50
  },
  guwop: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    left: 120
  },
  guwopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  guwopText: {
    marginLeft: 30,
    fontSize: 20,
    color: 'lightgreen'
  }
});

// {
//     borderWidth:1,
//     borderColor:'rgba(0,0,0,0.2)',
//     alignItems:'center',
//     justifyContent:'center',
//     width:100,
//     height:100,
//     backgroundColor:'#fff',
//     borderRadius:100,
//   }
