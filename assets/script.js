var searchBtn = document.getElementById('searchBtn');
var location = document.getElementById('input');
function getWeather(userInput) {
    var myKey = "b5f2c6f61d508cd8a83c094b4381aa02";   
    var input = userInput;
    var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + myKey + "&appid=" + input;
    fetch(weather)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        var weatherData = [
            `Temperature:`,
            `Humidity: `,
            `Wind: `,
            `UV Index: `
        ]
    })
}



searchBtn.on("click", () => {
    var searchInput = location.val().trim();
    // console.log(input);
    getWeather(searchInput);
    location.val("");
  });