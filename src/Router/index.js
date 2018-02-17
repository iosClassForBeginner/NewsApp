import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import Bbc from '../Screens/BBC/index'
import {Icon} from 'native-base'
import Cnn from '../Screens/CNN/index'
import Search from '../Screens/Search'

const Router = TabNavigator({
    BBC: { screen: Bbc, navigationOptions: {
      tabBarIcon: <Icon name='calendar'/>,
      tabBarLabel: "BBC",
      swipeEnabled: true,
      animationEnabled: true,
    }, 
   },
    Search: {screen: Search,
      navigationOptions: {
      tabBarIcon: <Icon name='search'/>,
      tabBarLabel: "BBC",
      swipeEnabled: true,
      animationEnabled: true,
    },  },
    CNN: { screen: Cnn,
        navigationOptions: {
        tabBarIcon: <Icon name='clock'/>,
        tabBarLabel: "CNN",
        swipeEnabled: true,
        animationEnabled: true,
    },
  }
  })


  export default Router