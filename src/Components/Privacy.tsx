import React from 'react'
import { View, Image, ViewStyle, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'

export default () => {
  const { Fonts } = useTheme()
  return (
    <Text style={Fonts.titleSmall}>
      By continuing you agree to Goldefish’s{' '}
      <Text style={{ fontWeight: 'bold' }}>Terms & Conditions</Text> and{' '}
      <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>
    </Text>
  )
}
