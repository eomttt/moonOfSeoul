/***************************************
// Copyright 2017-2018 Eomttt.
// All rights reserved.
 _____ _____ _____ _____ _____ _____ 
|   __|     |     |_   _|_   _|_   _|
|   __|  |  | | | | | |   | |   | |  
|_____|_____|_|_|_| |_|   |_|   |_| 

**************************************/

import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';

import create from './store';

import MainPage from './pages/Main';

const store = create();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
