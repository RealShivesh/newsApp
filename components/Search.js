import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <View>
      <SearchBar placeholder="type here" value={search} />
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
