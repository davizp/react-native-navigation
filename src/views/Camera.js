import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
//   ScrollView,
//   View,
  Image,
  Text,
//   StatusBar,
  Button,
} from 'react-native';

import { ARKit } from 'react-native-arkit';


class Camera extends React.Component {
  static navigationOptions = {
    title: 'Camera Page',
    bottom: null,
  };

  goTo(screen, options) {
    const { navigate } = this.props.navigation;
  }

  render() {

    return (
      <Fragment>
        <SafeAreaView>
          <Text style={styles.titleText}>
            Welcome to Camera Page!
          </Text>
          <View style={{ flex: 1 }}>
            <ARKit
              style={{ flex: 1 }}
              debug // debug mode will show feature points detected and 3D axis
              planeDetection // turn on plane detection
              lightEstimation // turn on light estimation
            >
              <ARKit.Box
                pos={{ x: 0, y: 0, z: 0 }}
                shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
              />
            </ARKit>
          </View>
        </SafeAreaView>
      </Fragment>
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
  stretch: {
    width: 50,
    height: 200
  }
});

export default Camera;
