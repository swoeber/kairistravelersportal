import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import LoginScreen from '../Containers/LoginScreen'
import TextablesScreenThree from '../Containers/TextablesScreenThree'
import TextablesScreenTwo from '../Containers/TextablesScreenTwo'
import TextablesScreen from '../Containers/TextablesScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LaunchScreenTwo from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'


const SecondaryNav = TabNavigator({
  MainScreen: { screen: MainScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  header: null,
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    // headerStyle: styles.header
  }
})
// Manifest of possible screens
const PrimaryNav = TabNavigator({
  MainScreen: { screen: MainScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen },
  // menu : { screen: SecondaryNav }
}, {
  // Default config for all screens
  headerMode: 'none',
  
  initialRouteName: "MainScreen",
  navigationOptions: {
    // headerStyle: styles.header
  },
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#252525',
    },
  }
})



export default PrimaryNav
