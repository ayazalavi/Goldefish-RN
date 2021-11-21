import React, { useState } from 'react'
import { View, Image, ViewStyle, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { ImageSourcePropType } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '@/Navigators/utils'

interface Props {
  onChange: Event
  parentStyle: ViewStyle
}

enum InputFields {
  None = 'n',
  Email = 'e',
}

export default ({ onChange, parentStyle }: Props) => {
  const { Layout, Common, Fonts, Gutters, NavigationTheme, Colors } = useTheme()
  const [currentInput, setCurrentInput] = useState(InputFields.None)
  const [values, setValues] = useState({
    email: '',
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
    </View>
  )
}
