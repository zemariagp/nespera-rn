import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import TestScreen from "../screens/TestScreen"
import TestScreen2 from "../screens/TestScreen2"

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: TestScreen
    },
    Signup: {
      screen: TestScreen2
    },

  },
  {
    initialRouteName: 'Login'
  }
)


export default createAppContainer(SwitchNavigator)