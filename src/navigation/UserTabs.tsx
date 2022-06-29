import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import UserScreen from './UserScreen'
import UserReposScreen from './UserReposScreen'
import UserFollowersScreen from './UserFollowersScreen'

const Tab = createBottomTabNavigator()

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>

const UserTabs: React.FC<Props> = () => (
  <Tab.Navigator
    initialRouteName="Details"
    screenOptions={() => ({
      headerStyle: { backgroundColor: 'papayawhip' },
      tabBarIcon: () => null,
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Details" component={UserScreen} />
    <Tab.Screen name="Repositories" component={UserReposScreen} />
    <Tab.Screen name="Followers" component={UserFollowersScreen} />
  </Tab.Navigator>
)

export default UserTabs
