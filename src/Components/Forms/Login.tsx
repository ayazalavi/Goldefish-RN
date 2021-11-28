import React, { useEffect, useState } from 'react'
import { View, Image, ViewStyle, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '@/Navigators/utils'
import { useValidation } from 'react-class-validator'
import { LoginDTO } from '../dtos/signin.dto'
interface Props {
  onAccept: (email: string, password: string) => void
  onReject: () => void
  parentStyle: ViewStyle
}

enum InputFields {
  None = 'n',
  Email = 'e',
  Phone = 'p',
  Username = 'u',
  Password = 'pw',
}

export default ({ onAccept, parentStyle, onReject }: Props) => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors, Images } =
    useTheme()
  const [currentInput, setCurrentInput] = useState(InputFields.None)
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [validate, errors] = useValidation(LoginDTO)

  useEffect(() => {
    let tempvalues = Object.values(values).filter(value => value === '')
    if (tempvalues.length === 0 && Object.keys(errors).length === 0) {
      onAccept(values.email, values.password)
    } else {
      onReject()
    }
  }, [errors])
  return (
    <View style={parentStyle}>
      <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        autoCapitalize={'none'}
        style={[
          errors.usernameEmail
            ? Common.textInputError
            : currentInput === InputFields.Email
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Email/Username'}
        onFocus={() => setCurrentInput(InputFields.Email)}
        onBlur={() => {
          validate({ usernameEmail: values.email }, ['usernameEmail'])
          setCurrentInput(InputFields.None)
        }}
        onChange={({ nativeEvent: { text } }) => {
          validate({ usernameEmail: text }, ['usernameEmail'])
          setValues({ ...values, email: text })
        }}
        value={values.email}
      />
      {values.email !== '' && !errors.usernameEmail && (
        <Image
          source={Images.inputTickIcon}
          width={24}
          height={18}
          style={[Common.tickIcon]}
        />
      )}
      <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        secureTextEntry={true}
        autoCapitalize={'none'}
        style={[
          errors.password
            ? Common.textInputError
            : currentInput === InputFields.Password
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Password'}
        onFocus={() => setCurrentInput(InputFields.Password)}
        onBlur={() => {
          validate({ password: values.password }, ['password'])
          setCurrentInput(InputFields.None)
        }}
        onChange={({ nativeEvent: { text } }) => {
          validate({ password: text }, ['password'])
          setValues({ ...values, password: text })
        }}
        value={values.password}
      />
      {values.password !== '' && !errors.password && (
        <Image
          source={Images.inputTickIcon}
          width={24}
          height={18}
          style={[Common.tickIcon, { top: 70 }]}
        />
      )}
      <TouchableOpacity
        style={[Fonts.forgotLogin, Layout.selfLeft]}
        onPress={() => navigate('AuthenticationForgot', {})}
      >
        <Text style={[Fonts.forgotLogin]}>I forgot my password</Text>
      </TouchableOpacity>
    </View>
  )
}
