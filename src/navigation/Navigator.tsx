import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import UserSearchScreen from './UserSearchScreen'
import UserScreen from './UserScreen'

const RootStack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => (
  <RootStack.Navigator initialRouteName="UserSearch">
    <RootStack.Screen
      name="UserSearch"
      component={UserSearchScreen}
      options={{ title: 'Github User Search' }}
    />
    <RootStack.Screen
      name="UserDetails"
      component={UserScreen}
      options={({ route }) => {
        const { login } = route.params.user
        return ({
          title: login,
        })
      }}
    />
  </RootStack.Navigator>
)

export default Navigator
