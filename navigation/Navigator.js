import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Home from '../components/Home.js';
import Profile from '../components/Profile.js';
import Camera from '../components/Camera.js';
import CameraPage from '../components/CameraPage.js';
import Explore from '../components/Explore.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Camera: {
    screen: Camera
  },
  CameraPage: {
    screen: CameraPage
  },
  Explore: {
    screen: Explore
  }
}, {
    initialRouteName: 'Home',
    // headerMode: 'none',
    defaultNavigationOptions: {
      headerTransparent: true
    }
});

export default createAppContainer(AppNavigator);
