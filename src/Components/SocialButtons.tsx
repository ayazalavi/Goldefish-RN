import React from 'react'
import { View, Image, ViewStyle, GestureResponderEvent } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImageButton from './ImageButton'

interface Props {
  parentStyle: ViewStyle
}

export default ({ parentStyle }: Props) => {
  const { Layout, Images, Gutters } = useTheme()

  return (
    <View style={parentStyle}>
      <ImageButton
        mode={'center'}
        image={Images.apple}
        parentStyle={{ ...Gutters.tinyBMargin, ...Gutters.regularTMargin }}
        onPress={() => {}}
      />
      <ImageButton
        mode={'center'}
        image={Images.google}
        parentStyle={{ ...Gutters.tinyBMargin }}
        onPress={() => {}}
      />
      <ImageButton
        mode={'center'}
        image={Images.facebook}
        parentStyle={{ ...Gutters.tinyBMargin }}
        onPress={() => {}}
      />
    </View>
  )
}
