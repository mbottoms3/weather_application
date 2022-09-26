class Fetch {
    async getCurrent(input) {
      // My Key for weather API
      const myKey = "b5f2c6f61d508cd8a83c094b4381aa02";
  
      // Makes fetch call to weather API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=imperial`
      );
  
      const data = await response.json();
  
      console.log(data);
      
      // Data that will be used to display different values to the user
      return data;
    }
  }