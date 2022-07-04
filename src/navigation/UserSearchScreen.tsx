import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import AppWrapper from '../components/AppWrapper'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'
import UserItem from '../components/UserItem'
import {
  fetchUserById,
  fetchUserFollowers,
  fetchUserRepos,
  fetchUsers,
} from '../redux/actions'
import { useAppDispatch, useAppSelector } from '../redux/store'

type Props = NativeStackScreenProps<RootStackParamList, 'UserSearch'>

const UserSearchScreen: React.FC<Props> = ({ navigation }) => {
  const users: UserDetails[] = useAppSelector((state) => state.search.users)
  const isFetching = useAppSelector((state) => state.search.isFetching)
  const dispatch = useAppDispatch()

  const handleSearch = useCallback((text: string) => {
    dispatch(fetchUsers(text))
  }, [dispatch])

  const handleSelectedUser = useCallback(
    (user: User) => {
      dispatch(fetchUserById(user.url))
      dispatch(fetchUserRepos(user.repos_url))
      dispatch(fetchUserFollowers(user.followers_url))
      navigation.navigate('UserData', { title: user.login })
    },
    [dispatch, navigation],
  )

  if (isFetching) {
    return <Loading />
  }

  if (!users) {
    return <ErrorMessage />
  }

  return (
    <AppWrapper>
      <SearchBar
        onSearch={handleSearch}
      />
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={users}
        renderItem={({ item }) => (
          <UserItem
            avatarUrl={item.avatar_url}
            onPress={() => handleSelectedUser(item)}
            username={item.login}
          />
        )}
      />
    </AppWrapper>
  )
}

export default UserSearchScreen
