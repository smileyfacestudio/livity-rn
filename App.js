import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: './assets/guccibg.png'}} />
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
  image: {
    flex: 1
  }
});
