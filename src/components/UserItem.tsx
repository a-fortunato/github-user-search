import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import Avatar from './Avatar'

interface Props {
  username: string
  avatarUrl: string
  onPress(): void
}

const UserItem: React.FC<Props> = ({ username, avatarUrl, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Avatar isSmall url={avatarUrl} />
    <Text style={styles.text}>{username}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'purple',
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 10,
  },
  userInfo: {},
  text: {
    fontWeight: 'bold',
  },
})

export default React.memo(UserItem)
