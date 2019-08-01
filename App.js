/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import { Transition } from 'react-native-reanimated';

// import { View } from 'react-native';

// Views
import Home from './src/views/Home';
import Camera from './src/views/Camera';
import Inbox from './src/views/Inbox';
import Search from './src/views/Search';
import Upload from './src/views/Upload';
import Activity from './src/views/Activity';

// import Camera from './src/views/Camera.js';
// import Inbox from './src/views/Inbox.js';

console.disableYellowBox = true;

// Navigator

// navigationOptions: ({ navigation }) => {

//   let tabBarVisible = true;

//   // console.log('navigation.state', navigation.state);

//   const { index, routeName } = navigation.state;

//   if(routeName === 'Home' && (index == 0 || index == 2)) {

//     // console.log('Camera or Inbox!');

//     tabBarVisible = false;
//   }

//   return {
//     tabBarVisible,
//   };
// }

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    enableSwipe: true,
  },
  Search: {
    screen: Search,
    enableSwipe: false,
  },
  Upload: {
    screen: Upload,
    enableSwipe: false,
  },
  Activity: {
    screen: Activity,
    enableSwipe: false,
  },
});





// AppNavigator.navigationOptions = ({ navigation }) => {

//   let tabBarVisible;

//   console.log('navigation.state', navigation.state);

//   if (navigation.state.routes.length > 1) {
//     navigation.state.routes.map(route => {

//       console.log('route', route);

//       if (route.routeName === "Camera") {
//         tabBarVisible = false;
//       } else {
//         tabBarVisible = true;
//       }
//     });
//   }

//   return {
//     // navigationOptions: {
//       // header:null,
//     tabBarVisible
//     // }
//   };
// };


// export default App;
export default createAppContainer(AppNavigator);
