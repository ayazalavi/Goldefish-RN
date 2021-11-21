import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme, setSafeAreaBackgroundColor } from '@/Store/Theme'
import { navigate } from '@/Navigators/utils'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

const AuthenticationMain = () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()

  useFocusEffect(() => {
    dispatch(
      setSafeAreaBackgroundColor({
        theme: null,
        darkMode: null,
        safeareaColor: { top: colors.primary, bottom: colors.primary },
      }),
    )
    return () => {}
  })

  return (
    <View style={[Layout.fill, Layout.colTop, Common.backgroundPrimary]}>
      <Brand />
      <View
        style={[
          Layout.fill,
          Layout.selfStretch,
          Layout.justifyContentCenter,
          Gutters.regularHPadding,
        ]}
      >
        <TouchableOpacity
          style={[Common.button.largeYellow, Gutters.regularBMargin]}
          onPress={() => {
            navigate('AuthenticationSignup', {})
          }}
        >
          <Text style={Fonts.textLargeYellowButton}>sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outlineRoundedWhite]}
          onPress={() => {
            navigate('AuthenticationLogin', {})
          }}
        >
          <Text style={Fonts.textLargeWhiteButton}>I have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AuthenticationMain
