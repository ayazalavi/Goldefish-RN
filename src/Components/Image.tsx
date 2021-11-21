import React from 'react'
import { View, Image, ViewStyle } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'

interface Props {
  height?: number | string
  width?: number | string
  mode: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
  image: ImageSourcePropType
  parentStyle: ViewStyle
}

export default ({ mode, image, parentStyle }: Props) => {
  return (
    <View style={parentStyle}>
      <Image source={image} resizeMode={mode} />
    </View>
  )
}
