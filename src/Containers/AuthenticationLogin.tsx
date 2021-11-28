import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setSafeAreaBackgroundColor } from '@/Store/Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Background from '@/Components/Background'
import { useDispatch } from 'react-redux'
import { color } from 'react-native-reanimated'
import { useFocusEffect } from '@react-navigation/native'
import AuthHeader from '@/Components/AuthHeader'
import Privacy from '@/Components/Privacy'
import Signup from '@/Components/Forms/Signup'
import SocialButtons from '@/Components/SocialButtons'
import Login from '@/Components/Forms/Login'
import { useSigninMutation } from '@/Services/modules/auth'
import {
  ValidatorContextOptions,
  ValidatorProvider,
} from 'react-class-validator'
import { ValidationError } from 'class-validator'
import ActivityOverlay from '@/Components/ActivityOverlay'
import { Signin } from '@/Services/modules/auth/signin'

export default () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const [signin, { data, isSuccess, isLoading, isError, error, status }] =
    useSigninMutation()
  const [params, setParams] = useState<Signin>()
  const [enableLogin, setEnableLogin] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const onAccept = (email: string, password: string) => {
    console.log('accept')
    const params: Signin = { usernameEmail: email, password }
    setParams(params)
    setEnableLogin(true)
    setErrorMessage('')
  }

  const onReject = () => {
    console.log('reject')
    setEnableLogin(false)
  }

  const signInHandler = () => {
    console.log('signin')
    enableLogin && params && !isLoading && signin(params)
  }

  useEffect(() => {
    console.log(data, isSuccess, isLoading, error, status)
    status === 'rejected' && setErrorMessage(error?.data?.message)
  }, [signin, data, error, status, isError, isSuccess, isLoading])

  const validatorOptions: ValidatorContextOptions = {
    onErrorMessage: (error: ValidationError): string[] => {
      // custom error message handling (localization, etc)
      const errors = Object.values(error.constraints || { '': 'Unknown Error' })
      setErrorMessage(errors[0])
      return errors
    },
    resultType: 'boolean', // default, can also be set to 'map'
  }

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
    <View
      style={[
        Layout.fill,
        Layout.colTop,
        Common.backgroundwhite,
        Gutters.regularHPadding,
      ]}
    >
      <Background style={[Common.backgroundTop]} />
      {isLoading && <ActivityOverlay />}
      <AuthHeader
        text={'welcome back'}
        subtitle={
          <Text style={Fonts.titleSmall}>
            Login with your username or email
          </Text>
        }
        style={{ ...Fonts.titleLargeWhite, ...Gutters.tinyBMargin }}
        parentStyle={{ ...Layout.selfLeft, ...Gutters.largeTMargin }}
      />
      <View style={[Layout.fill, Layout.selfStretch, { top: 150 }]}>
        <ValidatorProvider options={validatorOptions}>
          <Login
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
            !enableLogin
              ? Common.button.largeLightYellow
              : Common.button.largeYellow,
            Gutters.regularBMargin,
          ]}
          onPress={signInHandler}
        >
          <Text style={Fonts.textLargeYellowButton}>login</Text>
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
