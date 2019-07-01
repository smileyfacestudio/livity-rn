// import React, { Component } from 'react';
// import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
// // import Carousel from './Carousel';
// import { Constants } from 'expo';


// export default class Profile extends Component {
//   render() {
//     const images = [
//   {
//     source: {
//       uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg',
//     },
//   },
//   {
//     source: {
//       uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg',
//     },
//   },
//   {
//     source: {
//       uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg',
//     },
//   },
//   {
//     source: {
//       uri: 'https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg',
//     },
//   },
//
// ];
//     return (
//       <View style={styles.container}>
//         <Carousel images={images} />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//   }
// });

import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity, Button} from 'react-native';
import ThumbnailCarousel from './ThumbnailCarousel';
import Notifications from './Notifications';
import { Constants } from 'expo';
import {Ionicons} from '@expo/vector-icons';

export default class Profile extends Component {
  constructor (props) {
    super(props);

    this.state = {
      profileName: 'jg123',
      fullName: 'Juan Gutierez',
      score: '30.50',
      activity: [
        {
          type: 'like',
          name: 'Lorich',
          timestamp: '',
          profileImage: 'profilePhoto'
        },
        {
          type: 'drip',
          name: 'Lorich',
          timestamp: '',
          profileImage: 'profilePhoto'
        },
        {
          type: 'comment',
          name: 'Lorich',
          timestamp: '',
          profileImage: 'profilePhoto'
        }
      ]

    }
  }

  render() {
    const { goBack } = this.props.navigation;

    return(
      <View style={styles.imageContainer}>
        <ImageBackground blurRadius={50} style={styles.image} source={require('../assets/guccibg.png')}>
          <ScrollView>
            <View style={{flexDirection:'row', paddingHorizontal: 25, marginTop: 30, justifyContent:'space-between'}}>

              <TouchableOpacity onPress={() => {goBack('Home')}}>
                <Ionicons name="ios-arrow-back" size={32} color="white" />
              </TouchableOpacity>

              <Image style={styles.dm} source={require('../assets/dm_icon.png')} />

            </View>

            <View style={{flexDirection:'column', alignItems:'center', justifyContent: 'space-between'}}>
              <Image style={styles.profilePhoto} source={require('../assets/profilePhoto.png')} />
              <Text style={styles.profileName}>{this.state.profileName}</Text>
              <Text style={styles.fullName}>{this.state.fullName} | {this.state.score}</Text>
            </View>

            <ThumbnailCarousel />

            <Notifications />

          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1,
  },
  profilePhoto: {
    width: 125,
    height: 125
  },
  dm: {
    height: 30,
    width: 30
  },
  profileName: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold'
  },
  fullName: {
    color: 'white',
    fontWeight:'bold'
  }
});
