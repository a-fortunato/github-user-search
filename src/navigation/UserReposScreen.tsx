import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import React, { useCallback } from 'react'
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import UserScreenWrapper from '../components/UserScreenWrapper'
import { useAppSelector } from '../redux/store'

type Props = MaterialTopTabScreenProps<UserTabsParamList, 'UserRepos'>

const UserReposScreen: React.FC<Props> = () => {
  const repos = useAppSelector((state) => state.user.repos) as Repository[]
  const isFetching = useAppSelector((state) => state.user.fetchingRepos)

  const handleOnPress = useCallback(async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url)
      if (supported) {
        await Linking.openURL(url)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error accessing url', e)
    }
  }, [])

  return (
    <UserScreenWrapper isLoading={isFetching} hasError={!repos}>
      {repos.map((repo) => (
        <TouchableOpacity
          key={repo.id}
          style={styles.card}
          onPress={() => handleOnPress(repo.html_url)}
        >
          <Text style={styles.title}>{repo.name}</Text>
          <Text style={styles.description}>{repo.description}</Text>
          <Text style={styles.language}>{repo.language}</Text>
        </TouchableOpacity>
      ))}
    </UserScreenWrapper>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'purple',
  },
  description: {},
  language: {
    fontSize: 11,
    marginTop: 10,
    textAlign: 'right',
  },
})

export default UserReposScreen
