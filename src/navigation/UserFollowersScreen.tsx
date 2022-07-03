import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import React from 'react'
import UserItem from '../components/UserItem'
import UserScreenWrapper from '../components/UserScreenWrapper'
import { useAppSelector } from '../redux/store'

type Props = MaterialTopTabScreenProps<UserTabsParamList, 'UserFollowers'>

const UserFollowersScreen: React.FC<Props> = () => {
  const followers = useAppSelector((state) => state.user.followers) as Follower[]
  const isFetching = useAppSelector((state) => state.user.fetchingFollowers)

  return (
    <UserScreenWrapper isLoading={isFetching} hasError={!followers}>
      {followers.map((follower) => (
        <UserItem
          key={follower.id}
          avatarUrl={follower.avatar_url}
          onPress={() => { /* handleSelectedUser(item) */ }}
          username={follower.login}
        />
      ))}
    </UserScreenWrapper>
  )
}

export default UserFollowersScreen
