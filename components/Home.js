import React, {useEffect, useState} from 'react';
import {Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';

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
      <View style={styles.container}>
        <Text style={styles.heading}>Here are the top 10 news</Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 40,
        }}>
        {posts.map(post => (
          <Card key={post.id}>
            <Card.Title>{post.title}</Card.Title>
            <Text
              style={{
                marginBottom: 10,
              }}>
              {post.by} ({post.score}){' '}
            </Text>
            <Button
              title={'View More'}
              onPress={async () => {
                await Linking.openURL(post.url);
              }}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
