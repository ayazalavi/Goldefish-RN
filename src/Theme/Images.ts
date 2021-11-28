import { ThemeImages, ThemeVariables } from '@/Theme/theme.type'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({}: ThemeVariables): ThemeImages {
  return {
    splashLogo: require('@/Assets/Images/background.png'),
    background: require('@/Assets/Images/background_short.png'),
    navigationLogo: require('@/Assets/Images/small_logo.png'),
    closeIcon: require('@/Assets/Images/close_icon.png'),
    backIcon: require('@/Assets/Images/left_arrow.png'),
    google: require('@/Assets/Images/google_login.png'),
    facebook: require('@/Assets/Images/facebook_login.png'),
    apple: require('@/Assets/Images/apple_login.png'),
    backgroundGray: require('@/Assets/Images/background_gray.png'),
    inputTickIcon: require('@/Assets/Images/check.png'),
  }
}
