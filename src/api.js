export const fetchWeatherData = async (city) => {
    const apiKey = "6bb6d8c969b86ed24ddf90d544223526"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  