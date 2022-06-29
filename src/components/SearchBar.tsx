import React, { useState } from 'react'
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native'

interface Props {
  onSearch(text: string): void
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState<string>('')

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setInput}
        value={input}
        style={styles.input}
        placeholder="Search by username"
      />
      <TouchableOpacity style={styles.button} onPress={() => onSearch(input)}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'orange',
  },
  text: {},
  button: {
    flex: 0.3,
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginLeft: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    height: 'auto',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
})
