import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/Hooks'

interface Props {
  style?: any[]
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Background = ({ mode, style }: Props) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={style}>
      <Image source={Images.background} resizeMode={mode} />
    </View>
  )
}

Background.defaultProps = {
  mode: 'center',
  style: [],
}

export default Background
