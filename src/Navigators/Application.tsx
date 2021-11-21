import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import AuthenticationNavigator from './Authentication'
import { navigationRef } from './utils'
import { useStore } from 'react-redux'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [safeAreaColor, setSafeAreaColor] = useState({
    top: colors.primary,
    bottom: colors.primary,
  })
  const store = useStore()
  store.subscribe(() => setSafeAreaColor(store.getState().theme.safeareaColor))

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: safeAreaColor.top }} />

      <SafeAreaView
        style={[
          Layout.fill,
          {
            backgroundColor: safeAreaColor.bottom,
          },
        ]}
      >
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar
            barStyle={darkMode ? 'light-content' : 'dark-content'}
            hidden={true}
          />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Startup" component={StartupContainer} />
            <Stack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

export default ApplicationNavigator
