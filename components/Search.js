import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Search = () => {
  return (
    <View>
      <Text>Search</Text>
      <TextInput style={styles.search} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Search;
