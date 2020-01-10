import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    },

  },
  {
    initialRouteName: 'Login'
  }
)


export default createAppContainer(SwitchNavigator)