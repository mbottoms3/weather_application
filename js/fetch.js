class Fetch {
    async getCurrent(input) {
      const myKey = "b5f2c6f61d508cd8a83c094b4381aa02";
  
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }