import React from 'react'
import { Image, StyleSheet } from 'react-native'

interface Props {
  url: string
  isSmall?: boolean
}

const Avatar: React.FC<Props> = ({ isSmall, url }) => {
  const size = isSmall ? 75 : 100
  const dimensions = { width: size, height: size }
  return (
    <Image style={[dimensions, styles.avatar]} source={{ uri: url }} />
  )
}

Avatar.defaultProps = {
  isSmall: false,
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    margin: 10,
    alignSelf: 'center',
  },
})

export default Avatar
