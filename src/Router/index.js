import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import Bbc from '../Screens/BBC/index'
import Cnn from '../Screens/CNN/index'

const Router = TabNavigator({
    BBC: { screen: Bbc },
    CNN: { screen: Cnn },
  });


  export default Router