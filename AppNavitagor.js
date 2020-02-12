import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenNewTrip from './screens/ScreenNewTrip';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import  AppIcon  from "./components/AppIcon";
const topMenuheaderStyle = {
  backgroundColor: '#ff0000',
  elevation: 0,
  shadowOpacity: 0,
}

const topMenuTitleStyle = {
  fontWeight: 'bold',
  color: '#ffffff',
}

const headerTintColor = '#333333';




const appNavigation = createStackNavigator(
  {
    Home: {
      screen: ScreenNewTrip,
      navigationOptions: ({navigation}) => ({
        title: 'New Trip',
      }),
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    mode: 'card',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: topMenuheaderStyle,
      headerTintColor: headerTintColor,
      headerTitleStyle: topMenuTitleStyle,
      headerLeft: (
        <AppIcon iconName="menu" style={{paddingLeft: 10, color: 'white'}} onPress={() => navigation.openDrawer()}/>
      ),
    }),
  },
);



const App = createSwitchNavigator({
 Auth: {
    screen: appNavigation,
  }
});

const AppNavContainer = createAppContainer(App, {
  initialRouteName: 'loader',
});

export default AppNavContainer;
