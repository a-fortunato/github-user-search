import React from 'react'
import { StyleSheet, Text } from 'react-native'
import AppWrapper from './AppWrapper'

const ErrorMessage: React.FC<{}> = () => (

  <AppWrapper style={styles.container}>
    <Text style={styles.text}>
      There has been an error retrieving the data.
      {'\n'}
      {'\n'}
      Please try again later.
    </Text>
  </AppWrapper>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
})

export default ErrorMessage
