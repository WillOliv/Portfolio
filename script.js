document.addEventListener("DOMContentLoaded", function() {
  let pageName = document.getElementById("content_container");

  fetch("pages/home-page.html")
    .then(response => response.text())
    .then(data => {pageName.innerHTML = data;})
    .catch(error => {
      console.log(error);
    });
});

/* -------------------------------------------------------------------*/

var day = new Date("2023-07-17");

document.addEventListener("DOMContentLoaded", function() {

    var getLastUpdate = document.getElementById("last_update");
    
    var filterDay = day.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    });

    getLastUpdate.textContent = "Atualizado em " + filterDay;
  });








  
  /* -------------------------------------------------------------------
  function loadPage(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById("content_container").innerHTML = data;
      });
}
*/

