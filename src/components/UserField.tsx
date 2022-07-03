import React, { useCallback } from 'react'
import { StyleSheet, Text, Linking } from 'react-native'

interface Props {
  tag: string
  content: string | number | boolean | null
  isUrl?: boolean
}

const UserField: React.FC<Props> = ({ tag, content, isUrl }) => {
  const onPress = useCallback(async () => {
    if (isUrl && content && typeof content === 'string') {
      const url = content.includes('http') ? content : `https://${content}`
      try {
        const supported = await Linking.canOpenURL(url)
        if (supported) {
          await Linking.openURL(url)
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('error accessing url', e)
      }
    }
  }, [isUrl, content])

  let processedText = content
  if (content === null) {
    processedText = ''
  } else if (typeof content === 'boolean') {
    processedText = !content ? 'No' : 'Yes'
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
