/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {
  ThemeColors,
  ThemeFontSize,
  ThemeMetricsSizes,
  ThemeNavigationColors,
} from '@/Theme/theme.type'

/**
 * Colors
 */
export const Colors: ThemeColors = {
  // Example colors:
  goldefish_blue: '#2A78F4',
  goldefish_background: '#4085F4',
  goldefish_yellow: '#F6C527',
  goldefish_purple: '#415396',
  goldefish_light_blue: '#A2CDF8',
  goldefish_light_yellow: '#FAEAB5',
  goldefish_light_purple: '#B9C6F8',
  goldefish_green: '#A3DAAE',
  goldefish_red: '#E05375',
  goldefish_red_opacity: 'rgba(224, 83, 117, 0.04)',
  goldefish_gray: '#ADB4D1',
  text_darkgray: '#363C45',
  text_midgray: '#5C646F',
  text_yellow: '#F7C628',
  transparent: 'rgba(0,0,0,0)',
  white_fade: 'rgba(255, 255, 255, 0.7)',
  white: '#FFFFFF',
  text_input_bg: '#EBEDF4',
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.goldefish_background,
  background: Colors.goldefish_blue,
  transparent: Colors.transparent,
}

/**
 * FontSize
 */
export const FontSize: ThemeFontSize = {
  h1: 24,
  h2: 22,
  h3: 18,
  h4: 16,
  button_large: 20,
  medium: 15,
  text_input: 16,
  text_large: 25,
  text_small: 13,
}

/**
 * Metrics Sizes
 */
const tiny = 6 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2
const xlarge = large * 2
const largeN = -1 * regular * 2
const height60 = '60%'
const height80 = '80%'
const height50 = '50%' // 30
export const MetricsSizes: ThemeMetricsSizes = {
  tiny,
  small,
  regular,
  large,
  xlarge,
  largeN,
  height60,
  height80,
  height50,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
