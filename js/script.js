// Brings in the fetch and display classes
const fc = new FetchClass();
const display = new Display();

// Event handlers for capturing user input on submit button click
const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const current = search.value;
  search.value = '';
  fc.fetchWeather(current).then((data) => {
    display.displayData(data);
    display.localStorageSet(data);
  });
});

// Once document is parsed, gets data from local storage and displays it 
window.addEventListener("DOMContentLoaded", () => {
  const savedData = display.localStorageGet();
  display.displayData(savedData);
});