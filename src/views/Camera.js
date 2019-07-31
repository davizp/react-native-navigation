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

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


class CameraScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera Page',
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
          {/*
          <Button
            title="Go to Jane's profile"
            onPress={this.goTo('Profile', {name: 'Jane'})}
          />
          */}
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
});

export default CameraScreen;
