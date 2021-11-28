import React, { useEffect, useState } from 'react'
import { View, Image, ViewStyle, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { ForgotDTO } from '../dtos/forgot.dto'
import { useValidation } from 'react-class-validator'

interface Props {
  onAccept: (email: string) => void
  onReject: () => void
  parentStyle: ViewStyle
}

enum InputFields {
  None = 'n',
  Email = 'e',
}

export default ({ onAccept, parentStyle, onReject }: Props) => {
  const { Common, Gutters, Images } = useTheme()
  const [currentInput, setCurrentInput] = useState(InputFields.None)
  const [values, setValues] = useState({
    email: '',
  })
  const [validate, errors] = useValidation(ForgotDTO)

  useEffect(() => {
    let tempvalues = Object.values(values).filter(value => value === '')
    if (tempvalues.length === 0 && Object.keys(errors).length === 0) {
      onAccept(values.email)
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
          currentInput === InputFields.Email || values.email !== ''
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
    </View>
  )
}
