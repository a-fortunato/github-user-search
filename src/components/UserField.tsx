import React, { useCallback } from 'react'
import { StyleSheet, Text, Linking } from 'react-native'

interface Props {
  tag: string
  text: string | number | boolean | null
  isUrl?: boolean
}

const UserField: React.FC<Props> = ({ tag, text, isUrl }) => {
  const onPress = useCallback(async () => {
    if (isUrl) {
      const url = (text as string)?.includes('http') ? text : `https://${text}`
      try {
        const supported = await Linking.canOpenURL(url)
        if (supported) {
          await Linking.openURL(url)
        }
      } catch (e) {
        console.log('error accessing url', e)
      }
    }
  }, [isUrl, text])

  let processedText = text
  if (text === null) {
    processedText = ''
  } else if (typeof text === 'boolean') {
    processedText = !text ? 'No' : 'Yes'
  }

  return (
    <Text style={styles.container}>
      <Text style={styles.tag}>{`${tag}:  `}</Text>
      <Text style={styles.text} onPress={onPress}>{processedText}</Text>
    </Text>
  )
}

UserField.defaultProps = {
  isUrl: false,
}

const styles = StyleSheet.create({
  tag: {
    fontWeight: 'bold',
    color: 'purple',
  },
  text: {},
  container: {
    marginVertical: 5,
  },
})

export default UserField
