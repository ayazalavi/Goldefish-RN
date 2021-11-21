import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthenticationMain from '@/Containers/AuthenticationMain'

const Stack = createStackNavigator()

// @refresh reset
const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthenticationMain" component={AuthenticationMain} />
    </Stack.Navigator>
  )
}

export default AuthenticationNavigator
