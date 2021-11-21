import React, { useState } from 'react'
import { View, Image, ViewStyle, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'

interface Props {
  onChange: Event
  parentStyle: ViewStyle
}

enum InputFields {
  None = 'n',
  Email = 'e',
  Phone = 'p',
  Username = 'u',
  Password = 'pw',
}

export default ({ onChange, parentStyle }: Props) => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors } = useTheme()
  const [currentInput, setCurrentInput] = useState(InputFields.None)
  const [values, setValues] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
  })
  return (
    <View style={parentStyle}>
      <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        style={[
          currentInput === InputFields.Email || values.email !== ''
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Email'}
        onFocus={() => setCurrentInput(InputFields.Email)}
        onBlur={() => setCurrentInput(InputFields.None)}
        onChange={({ nativeEvent: { text } }) =>
          setValues({ ...values, email: text })
        }
      />
      <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        style={[
          currentInput === InputFields.Phone || values.phone !== ''
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Phone Number'}
        onFocus={() => setCurrentInput(InputFields.Phone)}
        onBlur={() => setCurrentInput(InputFields.None)}
        onChange={({ nativeEvent: { text } }) =>
          setValues({ ...values, phone: text })
        }
      />
      <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        style={[
          currentInput === InputFields.Username || values.username !== ''
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.tinyBMargin,
        ]}
        placeholder={'Username'}
        onFocus={() => setCurrentInput(InputFields.Username)}
        onBlur={() => setCurrentInput(InputFields.None)}
        onChange={({ nativeEvent: { text } }) =>
          setValues({ ...values, username: text })
        }
      />
      <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        style={[
          currentInput === InputFields.Password || values.password !== ''
            ? Common.textInput
            : Common.textInputBlur,
          Gutters.largeBMargin,
        ]}
        placeholder={'Password'}
        onFocus={() => setCurrentInput(InputFields.Password)}
        onBlur={() => setCurrentInput(InputFields.None)}
        onChange={({ nativeEvent: { text } }) =>
          setValues({ ...values, password: text })
        }
      />
    </View>
  )
}
