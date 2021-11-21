import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { setSafeAreaBackgroundColor } from '@/Store/Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Background from '@/Components/Background'
import { useDispatch } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AuthHeader from '@/Components/AuthHeader'

import Forgot from '@/Components/Forms/Forgot'
import TextButton from '@/Components/TextButton'
import { navigate } from '@/Navigators/utils'
import Image from '@/Components/Image'
import { Images } from '@/Theme/themes/default_dark'

export default () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors, Images } =
    useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const nav = useNavigation()
  useFocusEffect(() => {
    dispatch(
      setSafeAreaBackgroundColor({
        theme: null,
        darkMode: null,
        safeareaColor: { top: colors.background, bottom: colors.transparent },
      }),
    )
    nav.setOptions({
      headerBackImage: (props: any) => (
        <Image
          image={Images.backIcon}
          mode={'center'}
          parentStyle={{ ...Gutters.regularLMargin }}
        />
      ),
    })
    return () => {}
  })

  return (
    <View
      style={[
        Layout.fill,
        Layout.colTop,
        Common.backgroundwhite,
        Gutters.regularHPadding,
      ]}
    >
      <Background style={[Common.backgroundTopSmall]} />
      <AuthHeader
        text={'Forgot password?'}
        subtitle={
          <Text style={Fonts.titleSmallGray}>
            Don’t worry we will send you a link to reset your password! Just
            enter your email below.
          </Text>
        }
        style={{ ...Fonts.titleLargeGray, ...Gutters.tinyBMargin }}
        parentStyle={{ ...Layout.selfLeft, ...Gutters.xlargeVMargin }}
      />
      <View style={[Layout.fill, Layout.selfStretch]}>
        <Forgot onChange={() => {}} parentStyle={{}} />
        <TouchableOpacity
          style={[Common.button.largeYellow, Gutters.regularVMargin]}
          onPress={() => navigate('AuthenticationForgotThankYou', {})}
        >
          <Text style={Fonts.textLargeYellowButton}>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
