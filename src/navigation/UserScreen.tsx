import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'
import AppWrapper from '../components/AppWrapper'
import Avatar from '../components/Avatar'
import UserField from '../components/UserField'

type Props = NativeStackScreenProps<UserTabsParamList, 'UserDetails'>

const getTitleCase = (s:string) => s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
  .replace(/[-_]+(.)/g, (_, c) => ` ${c.toUpperCase()}`) // First char after each -/_

// eslint-disable-next-line no-nested-ternary
const sortAsc = (a: string, b: string) => (a > b ? 1 : b > a ? -1 : 0)

const UserScreen: React.FC<Props> = ({ route }) => {
  const [repos, setRepos] = useState([])
  const [followers, setFollowers] = useState([])
  console.log('route userscreen', route)
  const {
    id,
    login,
    name,
    avatar_url: avatarUrl,
    html_url: htmlUrl,
    node_id: nodeId,
    type,
    created_at: createdAt,
    updated_at: updatedAt,
    repos_url: reposUrl,
    followers_url: followersUrl,
    ...userData
  } = route.params.user

  useEffect(() => {
    fetch(reposUrl).then((response) => response.json()).then((data) => {
      console.log('repos', data)
      setRepos(data)
    })
  }, [reposUrl])
  useEffect(() => {
    fetch(followersUrl).then((response) => response.json()).then((data) => {
      console.log('followers', data)
      setFollowers(data)
    })
  }, [followersUrl])

  return (
    <AppWrapper>
      <ScrollView>
        <Avatar url={avatarUrl} />
        <Text style={styles.name}>{name}</Text>
        {Object.keys(userData)
          .filter((key) => !key.includes('url'))
          .sort(sortAsc)
          .map((key) => (
            <UserField key={key} tag={getTitleCase(key)} text={userData[key]} isUrl={key === 'blog'} />
          ))}
      </ScrollView>
    </AppWrapper>
  )
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    margin: 20,
    marginTop: 0,
    color: 'purple',
  },
})

export default UserScreen
