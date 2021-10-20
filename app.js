const select = document.querySelector(".select");
const option = document.querySelectorAll(".option");
const content = document.querySelector(".content");
function getData() {
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => {
      for (let x = 0; x < Object.keys(data.Countries).length; x++) {
        select.innerHTML += `<option class="option" value="${x}">${data.Countries[x].Country}</option>`;
      }
      select.addEventListener("click", (e) => {
        let ulke = e.currentTarget;
        let ulkeData = data.Countries[ulke.value];
        /*
        content.innerHTML = `
        <h1 class="Countries">${ulkeData.Country}</h1>
        <p class="Confirmed">Infected: ${ulkeData.TotalConfirmed}</p>
        <p class="Deaths">Deaths: ${ulkeData.TotalDeaths}</p>
        `;
        */
        content.innerHTML = `
       <div class='bar' style='max-height:500px; height:${
         ulkeData.TotalConfirmed * 0.002
       }px;'>${ulkeData.TotalConfirmed}</div>
        <div class='bar2' style='max-height:500px; height:${
          ulkeData.TotalDeaths * 0.02
        }px;'>${ulkeData.TotalDeaths}</div>
       `;
      });
    });
}

getData();
