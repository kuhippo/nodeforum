/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import App from './App/Containers/App';
import thunk from 'redux-thunk';
import configureStore from './App/store/configureStore';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const store = configureStore()
class Project extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('nodeforum', () => Project);
