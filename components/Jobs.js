import React, {useEffect, useState} from 'react';
import {Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';
import fetchJobs from '../api/fetchJobs';

const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);

  useEffect(() => {
    async function getJobs() {
      const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
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
        setJobs(result);
      } catch (err) {
        console.error(err);
      }
    }
    getJobs();
  }, []);

  if (jobs.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Job alerts</Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 40,
        }}>
        {jobs.map(job => (
          <Card key={job.id}>
            <Card.Title>{job.title}</Card.Title>
            <Button
              title={'View More'}
              onPress={async () => {
                await Linking.openURL(job.url);
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
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Jobs;
