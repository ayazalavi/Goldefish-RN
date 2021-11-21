import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  EventEmitter,
  Text,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native'
import { useTheme } from '@/Hooks'

interface Props {
  onPress: (event: GestureResponderEvent) => any
  parentStyle: ViewStyle
  textStyle: ViewStyle
  text: string
}

const Brand = ({ onPress, parentStyle, textStyle, text }: Props) => {
  const { Gutters } = useTheme()

  return (
    <TouchableOpacity style={parentStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

Brand.defaultProps = {
  mode: 'center',
}

export default Brand
