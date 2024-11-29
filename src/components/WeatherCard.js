import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, weather: weatherDetails, main, wind, sys } = weather;
  const { description, icon } = weatherDetails[0];
  const temperature = (main.temp - 273.15).toFixed(1); 

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
      <p>{description}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  );
};

export default WeatherCard;
