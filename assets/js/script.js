var searchBtn = document.getElementById('searchBtn');
var city = document.getElementById('search-weather');
var results = document.querySelector('.results');
function getWeather(userInput) {
    var myKey = "b5f2c6f61d508cd8a83c094b4381aa02";   
    var input = userInput;
    var weather = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`;
    fetch(weather)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        var weatherData = [
            `Temperature: ${data.current.temp}`,
            `Humidity: ${data.current.humidity}`,
            `Wind: ${data.current.wind_speed}`,
            `UV Index: ${data.current.uvi}`
        ];
    for (var i = 0; i < weatherData.length; i++) {
        weatherData.eq(i).text(weatherData[i]);  
    }
    
    })
    .catch(function (e) {
        console.log(e);
      });
} 



searchBtn.on("click", () => {
    var searchInput = city.val().trim();
    // console.log(input);
    getWeather(searchInput);
    city.val("");
  });