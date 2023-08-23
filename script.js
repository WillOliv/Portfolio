// Homepage loader
document.addEventListener("DOMContentLoaded", function() {
  let pageName = document.getElementById("content_container");

  fetch("pages/home-page.html")
    .then(response => response.text())
    .then(data => {pageName.innerHTML = data;})
    .catch(error => {
      console.log(error);
    });
});


// Menu loader
  function loadPage(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById("content_container").innerHTML = data;
      });
}


// Last update 
var day = new Date("2023-08-22");

document.addEventListener("DOMContentLoaded", function() {

    var getLastUpdate = document.getElementById("last_update");
    
    var filterDay = day.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    });

    getLastUpdate.textContent = "Atualizado em " + filterDay;
  });