import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideDrawer  from './CustomSideDrawer';
import Settings from '../Screens/Settings'
import ReceiverDetailsScreen from '../Screens/ReceiverDetailsScreen'
import MyBartersScreen from '../Screens/MyBartersScreen'
import NotificationScreen from '../Screens/NotificationsScreen'

export const AppDrawerNavigator = createDrawerNavigator( {
    Home : {
    screen : AppTabNavigator
    },
  Settings: {
    screen : Settings  },
     Reciever: {
    screen :MyBartersScreen  },
    NotificationScreen: {
    screen :NotificationScreen  },
  },

  {
    contentComponent: CustomSideDrawer,
  },
  {
    initialRouteName: 'Home',
  }
)
export default AppDrawerNavigator