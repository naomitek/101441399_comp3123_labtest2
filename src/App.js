import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('Toronto');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bb6d8c969b86ed24ddf90d544223526`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError('City not found or API error');
      }
    };
    fetchWeatherData();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="city" placeholder="Enter city" />
        <button type="submit">Search</button>
      </form>
      
      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.weather[0].description}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;

