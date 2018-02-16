import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import Bbc from '../Screens/BBC/index'
import Cnn from '../Screens/CNN/index'
import Search from '../Screens/Search'

const Router = TabNavigator({
    BBC: { screen: Bbc },
    Search: {screen: Search },
    CNN: { screen: Cnn },
  });


  export default Router