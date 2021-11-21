import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/Hooks'

interface Props {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Brand = ({ mode }: Props) => {
  const { Layout, Images } = useTheme()

  return (
    <View>
      <Image source={Images.splashLogo} resizeMode={mode} />
    </View>
  )
}

Brand.defaultProps = {
  mode: 'center',
}

export default Brand
