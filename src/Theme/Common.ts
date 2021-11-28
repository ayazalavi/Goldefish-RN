/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
import { ThemeCommonParams } from '@/Theme/theme.type'
import { Fonts } from '.'
import { FontSize } from './Variables'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }: ThemeCommonParams) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.goldefish_background,
      },
      backgroundwhite: {
        backgroundColor: Colors.white,
      },
      backgroundFadeWhite: {
        backgroundColor: Colors.white_fade,
      },
      backgroundTop: {
        position: 'absolute',
        top: -150,
      },
      backgroundTopSmall: {
        position: 'absolute',
        top: -285,
      },
      textInput: {
        height: 47,
        backgroundColor: Colors.white,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: Colors.goldefish_gray,
        width: '100%',
        fontSize: FontSize.text_input,
        letterSpacing: 0.1,
        color: Colors.text_midgray,
        paddingHorizontal: 30,
      },
      textInputError: {
        height: 47,
        backgroundColor: Colors.goldefish_red_opacity,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: Colors.goldefish_red,
        width: '100%',
        fontSize: FontSize.text_input,
        letterSpacing: 0.1,
        color: Colors.text_midgray,
        paddingHorizontal: 30,
      },
      textInputBlur: {
        height: 47,
        backgroundColor: Colors.text_input_bg,
        borderRadius: 9,
        width: '100%',
        fontSize: FontSize.text_input,
        letterSpacing: 0.1,
        color: Colors.text_midgray,
        paddingHorizontal: 30,
      },
      tickIcon: {
        position: 'absolute',
        right: 15,
        top: 15,
      },
    }),
  }
}
