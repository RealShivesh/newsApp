import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import fetchNews from '../api/fetchNews';

const Home = () => {
  const [newsId, setNewsId] = useState([]);

  useEffect(() => {
    if (newsId.length === 0) {
      fetchNews(setNewsId);
    }
  }, [newsId]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
