class Display {
  // Constructor function to target content container and display results
    constructor() {
      this.container = document.getElementById("content");
      this.city;
      this.default= "Denver";
    }

    // Takes in data from Fetch class and parses through the returned object for target values
    displayData(data) {
      
      this.container.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
              <h4>Current Conditions</h4>
            </div>
          </div>
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.city.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Current temperature: ${data.list[0].main.temp} °F</h6>
                  <p class="card-text">Weather conditions are described as: ${data.list[0].weather[0].description}</p>
                  <p class="card-text">Wind: ${data.list[0].wind.speed} MPH</p>
                  <p class="card-text">Humidity: ${data.list[0].main.humidity}%</p>
            
                  
              </div>
          </div>
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                <h4>5 Day Forecast</h4>
              </div>
          </div>
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h6 class="card-subtitle mb-2 text-muted">Average temperature: ${data.list[8].main.temp} °F</h6>
                  <p class="card-text">Weather conditions are described as: ${data.list[8].weather[0].description}</p>
                  <p class="card-text">Wind: ${data.list[8].wind.speed} MPH</p>
                  <p class="card-text">Humidity: ${data.list[8].main.humidity}%</p>
              </div>
          </div>
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h6 class="card-subtitle mb-2 text-muted">Average temperature: ${data.list[16].main.temp} °F</h6>
                  <p class="card-text">Weather conditions are described as: ${data.list[16].weather[0].description}</p>
                  <p class="card-text">Wind: ${data.list[16].wind.speed} MPH</p>
                  <p class="card-text">Humidity: ${data.list[16].main.humidity}%</p>
              </div>
          </div>
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h6 class="card-subtitle mb-2 text-muted">Average temperature: ${data.list[24].main.temp} °F</h6>
                  <p class="card-text">Weather conditions are described as: ${data.list[24].weather[0].description}</p>
                  <p class="card-text">Wind: ${data.list[24].wind.speed} MPH</p>
                  <p class="card-text">Humidity: ${data.list[24].main.humidity}%</p>
              </div>
          </div>
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h6 class="card-subtitle mb-2 text-muted">Average temperature: ${data.list[32].main.temp} °F</h6>
                  <p class="card-text">Weather conditions are described as: ${data.list[32].weather[0].description}</p>
                  <p class="card-text">Wind: ${data.list[32].wind.speed} MPH</p>
                  <p class="card-text">Humidity: ${data.list[32].main.humidity}%</p>
              </div>
          </div>
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h6 class="card-subtitle mb-2 text-muted">Average temperature: ${data.list[39].main.temp} °F</h6>
                  <p class="card-text">Weather conditions are described as: ${data.list[39].weather[0].description}</p>
                  <p class="card-text">Wind: ${data.list[39].wind.speed} MPH</p>
                  <p class="card-text">Humidity: ${data.list[39].main.humidity}%</p>
              </div>
          </div>
          `;
    }
  
    // Gets data from object and saves to local storage
    localStorageSet(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    // If there's no city in local storage, return default, otherwise return that data inside city
    localStorageGet() {
      if (localStorage.getItem("city" == null)) {
        return this.default;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
}