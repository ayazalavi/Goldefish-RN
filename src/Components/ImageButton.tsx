import React from 'react'
import { View, Image, ViewStyle, GestureResponderEvent } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
  height?: number | string
  width?: number | string
  mode: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
  image: ImageSourcePropType
  parentStyle: ViewStyle
  onPress: () => void
}

export default ({ mode, image, parentStyle, onPress }: Props) => {
  return (
    <TouchableOpacity style={parentStyle} onPress={onPress}>
      <Image source={image} resizeMode={mode} />
    </TouchableOpacity>
  )
}
