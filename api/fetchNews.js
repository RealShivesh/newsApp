import axios from 'axios';

//fetch news from hacker news api
//url: https://hacker-news.firebaseio.com/v0/topstories.json

const fetchNews = (newsId, setNewsId) => {
  //an async function to fetch the topstories id from hackernews api
  async function fetchTopStories() {
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
      setNewsId(result);
    } catch (err) {
      console.error(err);
    }
  }
};
//this will return an array of ids

export default fetchNews;
