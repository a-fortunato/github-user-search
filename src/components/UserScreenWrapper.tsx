import React, { PropsWithChildren } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import AppWrapper from './AppWrapper'
import ErrorMessage from './ErrorMessage'
import Loading from './Loading'

interface Props {
  isLoading: boolean
  hasError: boolean
}

const UserScreenWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  isLoading,
  hasError,
}) => {
  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <ErrorMessage />
  }

  return (
    <AppWrapper style={styles.container}>
      <ScrollView>
        {children}
      </ScrollView>
    </AppWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
})

export default UserScreenWrapper
