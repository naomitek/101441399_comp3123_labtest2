import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bb6d8c969b86ed24ddf90d544223526`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError("City not found.");
      }
      setLoading(false);
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar setCity={setCity} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
};

export default App;
