/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'
import { ThemeVariables, ThemeFonts } from '@/Theme/theme.type'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }: ThemeVariables): ThemeFonts {
  return StyleSheet.create({
    textLargeYellowButton: {
      fontSize: FontSize.button_large,
      color: Colors.white,
      letterSpacing: 0.13,
      textTransform: 'uppercase',
      opacity: 1,
    },
    textLargeWhiteButton: {
      fontSize: FontSize.button_large,
      color: Colors.text_yellow,
      letterSpacing: 0.13,
      textTransform: 'uppercase',
      opacity: 1,
    },
    textLargeWhite: {
      fontSize: FontSize.button_large,
      color: Colors.white,
      letterSpacing: 0.13,
      textTransform: 'capitalize',
      opacity: 1,
    },
    textLargeGray: {
      fontSize: FontSize.h1,
      color: Colors.text_midgray,
      letterSpacing: 0.13,
      textTransform: 'capitalize',
      opacity: 1,
    },
    titleSmall: {
      fontSize: FontSize.medium,
      fontWeight: 'normal',
      color: Colors.white,
    },
    formerror: {
      fontSize: FontSize.medium,
      fontWeight: 'normal',
      color: Colors.goldefish_red,
    },
    titleSmallGray: {
      fontSize: FontSize.medium,
      fontWeight: 'normal',
      color: Colors.text_midgray,
    },
    titleYellow: {
      fontSize: FontSize.text_large,
      fontWeight: 'bold',
      color: Colors.text_yellow,
    },
    forgotLogin: {
      fontSize: FontSize.text_small,
      fontWeight: 'normal',
      color: Colors.text_midgray,
      borderBottomColor: Colors.text_midgray,
      borderBottomWidth: 1,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLargeWhite: {
      fontSize: FontSize.h1,
      fontWeight: 'bold',
      color: Colors.white,
      textTransform: 'capitalize',
    },
    titleLargeGray: {
      fontSize: FontSize.h1,
      fontWeight: 'bold',
      color: Colors.text_midgray,
      textTransform: 'capitalize',
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
