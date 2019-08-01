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


class Search extends React.Component {
  static navigationOptions = {
    title: 'Search Page',
  };

  goTo(screen, options) {
    const { navigate } = this.props.navigation;
  }

  render() {

    return (
      <SafeAreaView>
        <Text style={styles.titleText}>
          Search Page!
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

export default Search;
