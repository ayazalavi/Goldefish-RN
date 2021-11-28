import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { setSafeAreaBackgroundColor } from '@/Store/Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Background from '@/Components/Background'
import { useDispatch } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AuthHeader from '@/Components/AuthHeader'
import { ValidationError } from 'class-validator'
import Forgot from '@/Components/Forms/Forgot'
import { navigate } from '@/Navigators/utils'
import Image from '@/Components/Image'
import { useForgotMutation } from '@/Services/modules/auth'
import {
  ValidatorContextOptions,
  ValidatorProvider,
} from 'react-class-validator'
import { ForgotRequest } from '@/Services/modules/auth/forgot'
import ActivityOverlay from '@/Components/ActivityOverlay'

export default () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors, Images } =
    useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const [params, setParams] = useState<ForgotRequest>()
  const [errorMessage, setErrorMessage] = useState('')
  const [enableForgot, setEnableForgot] = useState(false)
  const nav = useNavigation()
  const [forgot, { data, isSuccess, isLoading, isError, error, status }] =
    useForgotMutation()

  const validatorOptions: ValidatorContextOptions = {
    onErrorMessage: (error: ValidationError): string[] => {
      // custom error message handling (localization, etc)
      const errors = Object.values(error.constraints || { '': 'Unknown Error' })
      setErrorMessage(errors[0])
      return errors
    },
    resultType: 'boolean', // default, can also be set to 'map'
  }

  const onAccept = (email: string) => {
    console.log('accept')
    const params: ForgotRequest = { email }
    setParams(params)
    setEnableForgot(true)
    setErrorMessage('')
  }

  const onReject = () => {
    console.log('reject')
    setEnableForgot(false)
  }

  const forgotHandler = () => {
    console.log('forgot')
    enableForgot && params && !isLoading && forgot(params)
  }

  useEffect(() => {
    console.log(data, isSuccess, isLoading, error, status)
    status === 'rejected' && setErrorMessage(error?.data?.message)
    status === 'fulfilled' &&
      isSuccess &&
      navigate('AuthenticationForgotThankYou', {})
  }, [forgot, data, error, status, isError, isSuccess, isLoading])

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
      {isLoading && <ActivityOverlay />}
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
        <ValidatorProvider options={validatorOptions}>
          <Forgot
            onAccept={onAccept}
            onReject={onReject}
            parentStyle={errorMessage === '' ? Gutters.largeBMargin : {}}
          />
        </ValidatorProvider>
        {errorMessage !== '' && (
          <Text
            style={[
              Fonts.formerror,
              Fonts.fill,
              Fonts.textLeft,
              Gutters.largeBMargin,
            ]}
          >
            {errorMessage}
          </Text>
        )}
        <TouchableOpacity
          style={[
            !enableForgot
              ? Common.button.largeLightYellow
              : Common.button.largeYellow,
            Gutters.regularVMargin,
          ]}
          onPress={forgotHandler}
        >
          <Text style={Fonts.textLargeYellowButton}>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
