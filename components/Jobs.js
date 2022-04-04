import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
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
  return (
    <View>
      <Text>Jobs</Text>
      <View>
        <Text>Here are the top 10 news</Text>
        {jobs.map(job => (
          <View key={job.id}>
            <Text>{job.title}</Text>
            <Text>{job.score}</Text>
            <Text>{job.url}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Jobs;
