import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import fetchJobs from '../api/fetchJobs';

const Jobs = () => {
  const [jobId, setJobId] = useState([]);
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    if (jobId.length === 0) {
      fetchJobs(setJobId);
    }
    //https://hacker-news.firebaseio.com/v0/item/{item-id}.json
    if (jobsList.length === 0) {
      setJobsList(
        jobId.map(id => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setJobsList([...jobsList, data]);
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
  }, [jobId, jobsList]);
  return (
    <View>
      <Text>Jobs</Text>
    </View>
  );
};

export default Jobs;
