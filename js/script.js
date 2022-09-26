// Brings in the fetch and ui classes
const ft = new Fetch();
const ui = new UI();

// Event handlers for capturing user input on submit button click
const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;
  search.value = '';
  ft.getCurrent(currentVal).then((data) => {
    ui.populateUI(data);
    ui.saveToLS(data);
  });
});

// Once document is parsed, gets data from local storage and displays it 
window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});