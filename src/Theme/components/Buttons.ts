import { StyleSheet } from 'react-native'
import { ThemeCommonParams } from '@/Theme/theme.type'

export default function ({ Colors, Gutters, Layout }: ThemeCommonParams) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
  }
  const rounded = {
    ...base,
    borderRadius: 36,
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
  }

  const roundedLarge = {
    ...rounded,
    height: 71,
  }

  return StyleSheet.create({
    base,
    rounded,
    largeYellow: {
      ...roundedLarge,
      backgroundColor: Colors.goldefish_yellow,
    },
    largeLightYellow: {
      ...roundedLarge,
      backgroundColor: Colors.goldefish_light_yellow,
    },
    outlineRoundedWhite: {
      ...roundedLarge,
      backgroundColor: Colors.white,
      color: Colors.text_yellow,
      borderWidth: 1,
      borderColor: Colors.goldefish_yellow,
    },
  })
}
