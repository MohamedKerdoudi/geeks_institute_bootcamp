const form = document.getElementById("sunrise-form");
const results = document.getElementById("results");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const lat1 = document.getElementById("lat1").value;
  const lng1 = document.getElementById("lng1").value;
  const lat2 = document.getElementById("lat2").value;
  const lng2 = document.getElementById("lng2").value;

  const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
  const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

  const request1 = fetch(url1).then(response => response.json());
  const request2 = fetch(url2).then(response => response.json());

  Promise.all([request1, request2])
    .then(data => {
      const sunrise1 = new Date(data[0].results.sunrise).toLocaleTimeString();
      const sunrise2 = new Date(data[1].results.sunrise).toLocaleTimeString();

      results.textContent = `
        City 1 Sunrise: ${sunrise1}
        | 
        City 2 Sunrise: ${sunrise2}
      `;
    })
    .catch(error => {
      results.textContent = "Error fetching sunrise data.";
      console.error(error);
    });
});
