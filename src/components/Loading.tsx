import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import AppWrapper from './AppWrapper'

const Loading: React.FC<{}> = () => (
  <AppWrapper style={styles.container}>
    <ActivityIndicator size="large" color="purple" />
  </AppWrapper>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
})

export default Loading
