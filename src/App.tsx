import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './navigation/Navigator'
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </Provider>
)

export default App
