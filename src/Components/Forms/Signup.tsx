import React, { useEffect, useState } from 'react'
import { View, Image, ViewStyle, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'
import { useValidation } from 'react-class-validator'
import { SignUpDTO } from '../dtos/signup.dto'

interface Props {
  onAccept: (
    email: string,
    password: string,
    phone: string,
    username: string,
  ) => void
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
  const { Common, Gutters, Images } = useTheme()
  const [currentInput, setCurrentInput] = useState(InputFields.None)
  const [values, setValues] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
  })
  const [validate, errors] = useValidation(SignUpDTO)
  useEffect(() => {
    let tempvalues = Object.values(values).filter(value => value === '')
    if (tempvalues.length === 0 && Object.keys(errors).length === 0) {
      onAccept(values.email, values.password, values.phone, values.username)
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
          errors.email
            ? Common.textInputError
            : currentInput === InputFields.Email
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Email'}
        onFocus={() => setCurrentInput(InputFields.Email)}
        onBlur={() => {
          validate({ email: values.email }, ['email'])
          setCurrentInput(InputFields.None)
        }}
        onChange={({ nativeEvent: { text } }) => {
          validate({ email: text }, ['email'])
          setValues({ ...values, email: text })
        }}
        value={values.email}
      />
      {values.email !== '' && !errors.email && (
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
        autoCapitalize={'none'}
        style={[
          errors.phone
            ? Common.textInputError
            : currentInput === InputFields.Phone
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Phone Number'}
        onFocus={() => setCurrentInput(InputFields.Phone)}
        onBlur={() => {
          validate({ phone: values.phone }, ['phone'])
          setCurrentInput(InputFields.None)
        }}
        onChange={({ nativeEvent: { text } }) => {
          validate({ phone: text }, ['phone'])
          setValues({ ...values, phone: text })
        }}
        value={values.phone}
      />
      {values.phone !== '' && !errors.phone && (
        <Image
          source={Images.inputTickIcon}
          width={24}
          height={18}
          style={[Common.tickIcon, { top: 70 }]}
        />
      )}
      <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        autoCapitalize={'none'}
        style={[
          errors.username
            ? Common.textInputError
            : currentInput === InputFields.Username
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Username'}
        onFocus={() => setCurrentInput(InputFields.Username)}
        onBlur={() => {
          validate({ username: values.username }, ['username'])
          setCurrentInput(InputFields.None)
        }}
        onChange={({ nativeEvent: { text } }) => {
          validate({ username: text }, ['username'])
          setValues({ ...values, username: text })
        }}
        value={values.username}
      />
      {values.username !== '' && !errors.username && (
        <Image
          source={Images.inputTickIcon}
          width={24}
          height={18}
          style={[Common.tickIcon, { top: 125 }]}
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
          style={[Common.tickIcon, { top: 180 }]}
        />
      )}
    </View>
  )
}
