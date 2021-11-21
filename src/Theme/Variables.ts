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
  goldefish_light_yellow: '#F6C527',
  goldefish_light_purple: '#B9C6F8',
  goldefish_green: '#A3DAAE',
  goldefish_red: '#E05375',
  goldefish_gray: '#ADB4D1',
  text_darkgray: '#363C45',
  text_midgray: '#5C646F',
  text_yellow: '#F7C628',
  transparent: 'rgba(0,0,0,0)',
  white: '#FFFFFF',
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.goldefish_background,
  background: Colors.goldefish_blue,
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
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes: ThemeMetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
