import axios from 'axios';

const fetchWeather = async (city) => {
  const API_KEY = '6bb6d8c969b86ed24ddf90d544223526';
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
  const url = `${baseURL}?q=${city}&appid=${API_KEY}`;
  return await axios.get(url);
};

export default fetchWeather;
