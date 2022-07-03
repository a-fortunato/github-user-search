import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserSearchScreen from './UserSearchScreen'
import UserTabs from './UserTabs'

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
      component={UserTabs}
      // options={({ route }) => ({
      //   title: route.params.title,
      // })}
    />
  </RootStack.Navigator>
)

export default Navigator
