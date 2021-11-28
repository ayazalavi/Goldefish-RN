import React, { useEffect, useState } from 'react'
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
import {
  ValidatorContextOptions,
  ValidatorProvider,
} from 'react-class-validator'
import { ValidationError } from 'class-validator'
import { useSignupMutation } from '@/Services/modules/auth'
import { SignupRequest } from '@/Services/modules/auth/signup'
import ActivityOverlay from '@/Components/ActivityOverlay'

export default () => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors } = useTheme()
  const { colors } = NavigationTheme
  const dispatch = useDispatch()
  const nav = useNavigation()

  const [signup, { data, isSuccess, isLoading, isError, error, status }] =
    useSignupMutation()
  const [params, setParams] = useState<SignupRequest>()
  const [enableSignup, setEnableSignup] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const onAccept = (
    email: string,
    password: string,
    phone: string,
    username: string,
  ) => {
    console.log('accept')
    const params: SignupRequest = { email, password, phone, username }
    setParams(params)
    setEnableSignup(true)
    setErrorMessage('')
  }

  const onReject = () => {
    console.log('reject')
    setEnableSignup(false)
  }

  const signUpHandler = () => {
    console.log('signin')
    enableSignup && params && !isLoading && signup(params)
  }

  useEffect(() => {
    console.log(data, isSuccess, isLoading, error, status)
    status === 'rejected' && setErrorMessage(error?.data?.message)
    status === 'fulfilled' && isSuccess && navigate('AuthenticationLogin', {})
  }, [signup, data, error, status, isError, isSuccess, isLoading])

  const validatorOptions: ValidatorContextOptions = {
    onErrorMessage: (error: ValidationError): string[] => {
      // custom error message handling (localization, etc)
      console.log(error)
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
      {isLoading && <ActivityOverlay />}
      <AuthHeader
        text={'sign up'}
        subtitle={<Privacy />}
        style={{ ...Fonts.titleLargeWhite, ...Gutters.tinyBMargin }}
        parentStyle={{ ...Layout.selfLeft, ...Gutters.largeTMargin }}
      />
      <View style={[Layout.fill, Layout.selfStretch, { top: 100 }]}>
        <ValidatorProvider options={validatorOptions}>
          <Signup
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
            !enableSignup
              ? Common.button.largeLightYellow
              : Common.button.largeYellow,
            ,
            Gutters.regularBMargin,
          ]}
          onPress={signUpHandler}
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
