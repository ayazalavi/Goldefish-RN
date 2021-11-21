import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AuthenticationMain = () => {
  const { Layout, Common, Fonts, Gutters } = useTheme()
  const { t } = useTranslation()

  const init = async () => {}

  useEffect(() => {
    init()
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
          onPress={() => {}}
        >
          <Text style={Fonts.textLargeYellowButton}>sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outlineRoundedWhite]}
          onPress={() => {}}
        >
          <Text style={Fonts.textLargeWhiteButton}>I have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AuthenticationMain
