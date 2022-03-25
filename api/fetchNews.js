import axios from 'axios';

//fetch news from hacker news api
//url: https://hacker-news.firebaseio.com/v0/topstories.json

const fetchNews = setNewsId => {
  return axios
    .get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => {
      response.data.slice(0, 10);
      console.log(response.data.slice(0, 10));
      setNewsId(response.data.slice(0, 10));
    })
    .catch(error => console.log(error));
};
//this will return an array of ids

export default fetchNews;
