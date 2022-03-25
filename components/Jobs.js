import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import fetchJobs from '../api/fetchJobs';

const Jobs = () => {
  const [jobId, setJobId] = useState([]);

  useEffect(() => {
    if (jobId.length === 0) {
      fetchJobs(setJobId);
    }
  }, [jobId]);
  return (
    <View>
      <Text>Jobs</Text>
    </View>
  );
};

export default Jobs;
