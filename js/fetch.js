class FetchClass {
    async fetchWeather(input) {
      // My Key for weather API
      const myKey = "b5f2c6f61d508cd8a83c094b4381aa02";
      
      // Fetches city lat and lon for the city the user inputs
      const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${myKey}`);

      // Stores return in order to access lat and lon coordinates
      const coordinates = await geo.json();
      

      // Fetches 5 day forecast using city coordinates and returns data
      const forecast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${myKey}&units=imperial`
      );
      
      // Stores data in const
      const data = await forecast.json();
      console.log(data);

      // Returns data
      return data;
    }
  }