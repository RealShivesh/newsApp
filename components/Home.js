import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import fetchNews from '../api/fetchNews';

const Home = () => {
  const [newsId, setNewsId] = useState([]);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    if (newsId.length === 0) {
      fetchNews(setNewsId);
    }
    //https://hacker-news.firebaseio.com/v0/item/{item-id}.json
    //individual news item link (replace the itemID with the id of the news item)
    if (newsList.length === 0) {
      setNewsList(
        newsId.map(id => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setNewsList([...newsList, data]);
              return {
                id: id,
                title: data.title,
                url: data.url,
                score: data.score,
                by: data.by,
                time: data.time,
                text: data.text,
              };
            })
            .catch(error => console.log(error));
        }),
      );
    }
  }, [newsId, newsList]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
