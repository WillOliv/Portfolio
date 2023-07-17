var day = new Date("2023-07-17");

document.addEventListener("DOMContentLoaded", function() {

    var getLastUpdate = document.getElementById("last_update");
    
    var filterDay = day.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    });

    getLastUpdate.textContent = "Atualizado em " + filterDay;
  });
  