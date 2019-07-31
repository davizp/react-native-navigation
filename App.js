/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  // createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Transition } from 'react-native-reanimated';

// Views
import Home from './src/views/Home.js';
import Camera from './src/views/Camera.js';
import Inbox from './src/views/Inbox.js';

// Navigator

// const AppNavigator = createStackNavigator({
const AppNavigator = createDrawerNavigator({
  Camera: {
    screen: Camera
  },
  Home: {
    screen: Home
  },
  Inbox: {
    screen: Inbox
  }
}, {
  // swipeEnabled: true,
  edgeWidth: true,
  // tabBarIcon: false,
  // tabBarLabel: false
  transition: (
    <Transition.Together>
      <Transition.Out
        type="slide-bottom"
        durationMs={400}
        interpolation="easeIn"
      />
      <Transition.In type="fade" durationMs={500} />
    </Transition.Together>
  )
});


// export default App;
export default createAppContainer(AppNavigator);
