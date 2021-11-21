import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthenticationMain from '@/Containers/AuthenticationMain'
import AuthenticationSignup from '@/Containers/AuthenticationSignup'
import AuthenticationLogin from '@/Containers/AuthenticationLogin'
import AuthenticationForgot from '@/Containers/AuthenticationForgot'
import AuthenticationForgotThankYou from '@/Containers/AuthenticationForgotThankYou'
import NavigationLogo from '@/Components/NavigationLogo'
import { useTheme } from '@/Hooks'
import Image from '@/Components/Image'
import { View } from 'react-native'
import { navigate, navigationRef } from './utils'

const Stack = createStackNavigator()

// @refresh reset
const AuthenticationNavigator = () => {
  const { Colors, Images, Gutters, Fonts } = useTheme()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: props => <NavigationLogo />,
        headerStyle: {
          backgroundColor: Colors.transparent,
        },
        headerBackImage: props => (
          <Image
            image={Images.closeIcon}
            mode={'center'}
            parentStyle={{ ...Gutters.regularLMargin }}
          />
        ),
        headerBackTitleVisible: false,
      }}
      initialRouteName="AuthenticationMain"
    >
      <Stack.Screen name="AuthenticationMain" component={AuthenticationMain} />
      <Stack.Screen
        name="AuthenticationSignup"
        component={AuthenticationSignup}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="AuthenticationLogin"
        component={AuthenticationLogin}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="AuthenticationForgot"
        component={AuthenticationForgot}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="AuthenticationForgotThankYou"
        component={AuthenticationForgotThankYou}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthenticationNavigator
