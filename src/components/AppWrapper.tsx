import React, { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ViewStyle,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Props {
  style?: ViewStyle
}

const AppWrapper: React.FC<PropsWithChildren<Props>> = ({ children, style }) => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container, style]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  )
}

AppWrapper.defaultProps = {
  style: {},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 0,
  },
})

export default AppWrapper
