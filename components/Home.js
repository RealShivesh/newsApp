import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import fetchNews from '../api/fetchNews';

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    async function getTopStories() {
      const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error('Response Error:' + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 10)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json(),
            ),
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, []);

  if (posts.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Here are the top 10 news</Text>
      {posts.map(post => (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.score}</Text>
          <Text>{post.url}</Text>
        </View>
      ))}
    </View>
  );
};

export default Home;
