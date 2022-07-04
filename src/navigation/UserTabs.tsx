import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import UserScreen from './UserDetailsScreen'
import UserReposScreen from './UserReposScreen'
import UserFollowersScreen from './UserFollowersScreen'

const Tab = createMaterialTopTabNavigator()

type Props = NativeStackScreenProps<RootStackParamList, 'UserData'>

const UserTabs: React.FC<Props> = () => (
  <Tab.Navigator
    initialRouteName="Details"
    screenOptions={() => ({
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Details" component={UserScreen} />
    <Tab.Screen name="Repositories" component={UserReposScreen} />
    <Tab.Screen name="Followers" component={UserFollowersScreen} />
  </Tab.Navigator>
)

export default UserTabs
