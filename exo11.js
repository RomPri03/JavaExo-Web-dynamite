const url = "http://192.168.65.97/data.json";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.body.innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error("Erreur lors du fetch :", error);
    document.body.innerText = "Erreur lors du chargement des données.";
  });