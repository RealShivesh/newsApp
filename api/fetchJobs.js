import axios from 'axios';

//fetch news from hacker news api
//url: https://hacker-news.firebaseio.com/v0/topstories.json

const fetchNews = () => {
  return axios
    .get('https://hacker-news.firebaseio.com/v0/jobstories.json')
    .then(response => {
      response.data;
      console.log(response.data);
    })
    .catch(error => console.log(error));
};
//this will return an array of ids

export default fetchNews;
