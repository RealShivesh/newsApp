import axios from 'axios';

//fetch news from hacker news api
//url: https://hacker-news.firebaseio.com/v0/topstories.json

const fetchJobs = setJobId => {
  return axios
    .get('https://hacker-news.firebaseio.com/v0/jobstories.json')
    .then(response => {
      response.data;
      console.log(response.data.slice(0, 10));
      setJobId(response.data.slice(0, 10));
    })
    .catch(error => console.log(error));
};
//this will return an array of ids

export default fetchJobs;
