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
import { Colors } from '@/Theme/Variables'
import Background from '@/Components/Background'
import Image from '@/Components/Image'
import ForgotThanks from '@/Components/Forms/ForgotThanks'

const AuthenticationMain = () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Images } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()

  useFocusEffect(() => {
    dispatch(
      setSafeAreaBackgroundColor({
        theme: null,
        darkMode: null,
        safeareaColor: { top: colors.background, bottom: colors.transparent },
      }),
    )
    return () => {}
  })

  return (
    <View style={[Layout.fill, Layout.center, Common.backgroundwhite]}>
      <View
        style={[
          Gutters.height60percent,
          Layout.fullWidth,
          {
            backgroundColor: Colors.goldefish_blue,
            position: 'absolute',
            top: 0,
          },
        ]}
      ></View>
      <Image
        mode={'center'}
        image={Images.background}
        parentStyle={{ position: 'absolute', bottom: 100 }}
      />
      <Image
        mode={'center'}
        image={Images.backgroundGray}
        parentStyle={{ bottom: 70 }}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: Colors.transparent,
          ...Layout.fill,
          ...Layout.colCenter,
          ...Layout.alignItemsStretch,
          ...Gutters.regularHPadding,
        }}
      >
        <ForgotThanks />
        <TouchableOpacity
          style={[Common.button.largeYellow, Gutters.xlargeBMargin]}
          onPress={() => navigate('AuthenticationLogin', {})}
        >
          <Text style={Fonts.textLargeYellowButton}>Okay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AuthenticationMain
