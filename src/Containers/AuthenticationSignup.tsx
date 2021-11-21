import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setSafeAreaBackgroundColor } from '@/Store/Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Background from '@/Components/Background'
import { useDispatch } from 'react-redux'
import { color } from 'react-native-reanimated'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AuthHeader from '@/Components/AuthHeader'
import Privacy from '@/Components/Privacy'
import Signup from '@/Components/Forms/Signup'
import { navigate } from '@/Navigators/utils'
import TextButton from '@/Components/TextButton'
import SocialButtons from '@/Components/SocialButtons'

export default () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors } = useTheme()
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
      headerRight: (_props: any) => (
        <TextButton
          onPress={() => {
            navigate('AuthenticationLogin', {})
          }}
          parentStyle={Gutters.regularRMargin}
          textStyle={Fonts.textLargeWhite}
          text={'login'}
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
      <Background style={[Common.backgroundTop]} />
      <AuthHeader
        text={'sign up'}
        subtitle={<Privacy />}
        style={{ ...Fonts.titleLargeWhite, ...Gutters.tinyBMargin }}
        parentStyle={{ ...Layout.selfLeft, ...Gutters.largeTMargin }}
      />
      <View style={[Layout.fill, Layout.selfStretch, { top: 100 }]}>
        <Signup onChange={() => {}} parentStyle={{}} />
        <TouchableOpacity
          style={[Common.button.largeYellow, Gutters.regularBMargin]}
          onPress={() => {}}
        >
          <Text style={Fonts.textLargeYellowButton}>get started</Text>
        </TouchableOpacity>
        <Text style={[Fonts.titleYellow, Fonts.textCenter]}>OR</Text>
        <SocialButtons
          parentStyle={{
            ...Layout.selfStretch,
            ...Layout.alignItemsCenter,
            ...Layout.justifyContentBetween,
          }}
        />
      </View>
    </View>
  )
}
