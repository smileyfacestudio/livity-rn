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
import { View, ScrollView, Image, StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity} from 'react-native';
import ThumbnailCarousel from './ThumbnailCarousel';
import { Constants } from 'expo';
import {Ionicons} from '@expo/vector-icons';

export default class Profile extends Component {

  render() {
    const { goBack } = this.props.navigation;

    return(
      <View style={styles.imageContainer}>
      <ImageBackground resizeMode='cover' blurRadius={50} style={styles.image} source={require('../assets/guccibg.png')}>
      <View style={{flexDirection:'row', paddingHorizontal: 25, marginTop: 30, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => {goBack('Home')}}>
          <Ionicons name="ios-arrow-back" size={32} color="white" />
        </TouchableOpacity>
        <Image style={styles.dm} source={require('../assets/dm_icon.png')} />
      </View>
      <View style={{flexDirection:'column', alignItems:'center', justifyContent: 'space-between'}}>
        <Image style={styles.profilePhoto} source={require('../assets/profilePhoto.png')} />
        <Text style={styles.profileName}>jg123</Text>
        <Text style={styles.fullName}>Juan Gutierez | 30.50</Text>
      </View>

        <ThumbnailCarousel />
        <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>Notifications</Text>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems: 'center', marginLeft: 20, marginTop: 20}}>
          <Image style={{height: 20, width: 20}} source={require('../assets/heart.png')}/>
          <View style={{flexDirection:'column', alignItems:'flex-start', flex: 2, marginLeft: 15}}>
          <Image style={{height: 35, width: 35}} source={require('../assets/profilePhoto.png')} />
          <Text style={{color: 'white', fontSize: 15, marginTop: 5}}><Text style={{color: 'green', fontSize: 15, fontWeight: 'bold'}}>Lorich</Text> likes you</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems: 'center', marginLeft: 20, marginTop: 20}}>
          <Image style={{height: 20, width: 20}} source={require('../assets/drip.png')}/>
          <View style={{flexDirection:'column', alignItems:'flex-start', flex: 2, marginLeft: 15}}>
          <Image style={{height: 35, width: 35}} source={require('../assets/profilePhoto.png')} />
          <Text style={{color: 'white', fontSize: 15, marginTop: 5}}><Text style={{color: 'green', fontSize: 15, fontWeight: 'bold'}}>Lorich</Text> fed your moment</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems: 'center', marginLeft: 20, marginTop: 20}}>
          <Image style={{height: 20, width: 20}} source={require('../assets/comment.png')}/>
          <View style={{flexDirection:'column', alignItems:'flex-start', flex: 2, marginLeft: 15}}>
          <Image style={{height: 35, width: 35}} source={require('../assets/profilePhoto.png')} />
          <Text style={{color: 'white', fontSize: 15, marginTop: 5}}><Text style={{color: 'green', fontSize: 15, fontWeight: 'bold'}}>Lorich</Text> commented on your moment</Text>
          </View>
        </View>
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
