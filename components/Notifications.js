import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )

  }
}
