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
    this.state = {

    }
  }

  render() {
    const array = [
      {
        name: "Lorich",
        action: "like",
      },
      {
        name: 'Lorich',
        action: "drip",
      },
      {
        name: "Lorich",
        action: "comment"
      }
    ];

    const listNotifications = array.map((item, index) =>
    <View key={index} style={{flexDirection:'row', justifyContent:'flex-start', alignItems: 'center', marginLeft: 20, marginTop: 20}}>
      <Image style={{height: 20, width: 20}} source={require('../assets/heart.png')}/>
      <View style={{flexDirection:'column', alignItems:'flex-start', flex: 2, marginLeft: 15}}>
        <Image style={{height: 35, width: 35}} source={require('../assets/profilePhoto.png')} />
        <Text style={{color: 'white', fontSize: 15, marginTop: 5}}><Text style={{color: 'green', fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text> {item.action} you</Text>
      </View>
    </View>
    );

    return (
      <React.Fragment>
        <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>Notifications</Text>
        {listNotifications}

      </React.Fragment>
    )

  }
}
