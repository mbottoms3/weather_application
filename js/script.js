// Brings in the fetch and ui classes
const ft = new Fetch();
const ui = new UI();

// Event handlers
const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    ui.populateUI(data);
    ui.saveToLS(data);
  });
});


window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});