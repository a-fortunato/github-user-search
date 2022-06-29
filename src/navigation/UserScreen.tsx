import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import AppWrapper from '../components/AppWrapper'
import { RootStackParamList } from '../types'

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>

const UserScreen: React.FC<Props> = ({ route }) => {
  const { user } = route.params
  return (
    <AppWrapper>
      <Text>
        {`Hey ${user.name}!!`}
      </Text>
    </AppWrapper>
  )
}

export default UserScreen
