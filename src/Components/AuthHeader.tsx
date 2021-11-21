import React from 'react'
import { View, Image, ViewStyle, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'

interface Props {
  text: number | string
  style: ViewStyle
  subtitle?: Element
  parentStyle: ViewStyle
}

export default ({ text, style, subtitle, parentStyle }: Props) => {
  return (
    <View style={{ ...parentStyle }}>
      <Text style={{ ...style }}>{text}</Text>
      {subtitle}
    </View>
  )
}
