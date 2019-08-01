import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
//   ScrollView,
//   View,
  Text,
//   StatusBar,
  Button,
} from 'react-native';

import {
// createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
//   createMaterialBottomTabNavigator,
//   createAppContainer
} from "react-navigation";


import Camera from './Camera.js';
import Inbox from './Inbox.js';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home Page',
  };

  goTo(screen, options) {
    const { navigate } = this.props.navigation;
  }

  render() {

    return (
      <SafeAreaView>
        <Text style={styles.titleText}>
          Welcome to Home Page!
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
});


// const AppNavigator = createBottomTabNavigator({
//   Home: {
//     screen: Home
//   },
//   Search: {
//     screen: Search
//   },
// }, {
//   swipeEnabled: true,
// });

// const AppNavigator = createMaterialTopTabNavigator({
//   Camera: {
//     screen: Camera
//   },
//   Home: {
//     screen: Home
//   },
//   Inbox: {
//     screen: Inbox
//   }
// }, {
//   // swipeEnabled: true,
//   initialRouteName: 'Home',
//   tabBarComponent: Fragment,
// });

const HomeNav = createMaterialTopTabNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarVisible: false,
    }
  }
}, {
  swipeEnabled: true,
  initialRouteName: 'Home',

  // tabBarComponent: Fragment,
  // navigationOptions: {
  //   tabBarVisible: false,
  //   header: null,
  // },
  // header: null,
  // tabBarVisible: false,
});


HomeNav.navigationOptions = ({ navigation }) => {

  // let tabBarVisible;

  console.log('navigation.state', navigation.state);

  // return {
  // //   tabBarVisible
  // };
};

// export default AppNavigator;
export default HomeNav;
