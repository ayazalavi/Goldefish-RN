import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/Hooks'

interface Props {
  height?: number
  width?: number
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const NavigationLogo = (props: Props) => {
  const { Images } = useTheme()

  return (
    <View style={{ width: props.width, height: props.height }}>
      <Image source={Images.navigationLogo} resizeMode={props.mode} />
    </View>
  )
}

NavigationLogo.defaultProps = {
  mode: 'center',
  width: '100%',
  height: '100%',
}

export default NavigationLogo
