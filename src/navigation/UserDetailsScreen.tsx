import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
import Avatar from '../components/Avatar'
import UserField from '../components/UserField'
import UserScreenWrapper from '../components/UserScreenWrapper'
import { useAppSelector } from '../redux/store'
import { getTitleCase, sortAsc } from '../utils'

type Props = MaterialTopTabScreenProps<UserTabsParamList, 'UserDetails'>

const UserScreen: React.FC<Props> = () => {
  const user = useAppSelector((state) => state.user.details) as UserDetails
  const isFetching = useAppSelector((state) => state.user.fetchingDetails)

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
    ...userData
  } = user || {}

  return (
    <UserScreenWrapper isLoading={isFetching} hasError={!user}>
      <Avatar url={avatarUrl} />
      <Text style={styles.name}>{name}</Text>
      {(Object.keys(userData) as (keyof typeof userData)[])
        .filter((key) => !key.includes('url'))
        .sort(sortAsc)
        .map((key) => (
          <UserField
            key={key}
            tag={getTitleCase(key)}
            content={userData[key]}
            isUrl={key === 'blog'}
          />
        ))}
    </UserScreenWrapper>
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
