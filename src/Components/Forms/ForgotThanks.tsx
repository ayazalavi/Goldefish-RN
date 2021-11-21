import React, { useState } from 'react'
import { View, Image, ViewStyle, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '@/Navigators/utils'

export default () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors } = useTheme()

  return (
    <View style={{ ...Layout.center, ...Gutters.largeVMargin }}>
      <Text style={{ ...Fonts.titleLargeWhite, ...Gutters.tinyBMargin }}>
        Check your Inbox!
      </Text>
      <Text style={[Fonts.titleSmall, Fonts.textCenter]}>
        An email has been sent to your inbox to reset your password.
      </Text>
    </View>
  )
}
