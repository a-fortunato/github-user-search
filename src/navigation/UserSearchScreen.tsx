import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import AppWrapper from '../components/AppWrapper'
import SearchBar from '../components/SearchBar'
import UserItem from '../components/UserItem'
import config from '../config'
import { fetchUserById, fetchUserFollowers, fetchUserRepos } from '../redux/actions'
import { useAppDispatch } from '../redux/store'

type Props = NativeStackScreenProps<RootStackParamList, 'UserSearch'>

const UserSearchScreen: React.FC<Props> = ({ navigation }) => {
  const [items, setItems] = useState<User[]>([])
  const dispatch = useAppDispatch()

  const handleSearch = useCallback((text: string) => {
    const queryString = `q=${encodeURIComponent(`${text} in:login`)}`
    fetch(`${config.host}/search/users?${queryString}`).then((response) => response.json()).then((data) => {
      setItems(data.items)
    })
  }, [])

  const handleSelectedUser = useCallback(
    (user: User) => {
      dispatch(fetchUserById(user.url))
      dispatch(fetchUserRepos(user.repos_url))
      dispatch(fetchUserFollowers(user.followers_url))
      navigation.navigate('UserData', { title: user.login })
    },
    [dispatch, navigation],
  )

  return (
    <AppWrapper>
      <SearchBar
        onSearch={handleSearch}
      />
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={items}
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
