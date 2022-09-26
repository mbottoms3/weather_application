class UI {
  // Constructor function to target content container and display results
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "Denver";
    }

    // Takes in data from Fetch class and parses through the returned object for target values
    populateUI(data) {
  
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Current temperature: ${data.main.temp} °F</h6>
                  <p class="card-text">Weather conditions are described as: ${data.weather[0].description}</p>
                  <p class="card-text">Wind: ${data.wind.speed} MPH</p>
                  <p class="card-text">Humidity: ${data.main.humidity}%</p>
            
                  
              </div>
          </div>
          
          
          `;
    }
  
    // Gets data from object and saves to local storage
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    // If there's no city in local storage, return default, otherwise return that data inside city
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
}