/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MinWidthTest extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          The below view displays the issue with flex and minWidth. None of the red view should be on display.
        </Text>
        <View style={styles.test}>
          <View style={styles.testInner1} />
          <View style={styles.testInner2} />
          <View style={styles.testInner3} />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  test: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: 'red',
  },
  testInner1: {
    minWidth: 80,
    flex: 1,
    backgroundColor: 'green'
  },
  testInner2: {
    minWidth: 80,
    flex: 1,
    backgroundColor: 'purple'
  },
  testInner3: {
    minWidth: 80,
    flex: 1,
    backgroundColor: 'yellow'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MinWidthTest', () => MinWidthTest);
