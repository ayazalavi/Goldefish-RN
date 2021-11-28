import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useTheme } from '@/Hooks'

export default () => {
  const { Layout, Common } = useTheme()

  return (
    <View
      style={[
        Layout.fill,
        Layout.rowCenter,
        Layout.halfSize,
        Layout.absolute,
        Layout.inFront,
      ]}
    >
      <ActivityIndicator size={'large'} />
    </View>
  )
}
