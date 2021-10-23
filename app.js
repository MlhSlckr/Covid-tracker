const select = document.querySelector(".select");
const option = document.querySelectorAll(".option");
const content = document.querySelector(".content");

function getData() {
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => {
      for (let x = 0; x < Object.keys(data.Countries).length; x++) {
        select.innerHTML += `<option class="option"  value="${x}">${data.Countries[x].Country}</option>`;
      }
      content.innerHTML = `
        <h1 class='title'>Global</h1>
        <div class="bars">
        <div class="left">
          <div class="bar" style="max-height:500px; height:${
            data.Global.TotalConfirmed * 0.002
          }px;">
          </div>
          <div class="value">
            <p class="text">İnfected</p>
            ${data.Global.TotalConfirmed}
          </div>
        </div>
        <div class="right">
          <div class="bar2" style="max-height:200px; height:
          ${data.Global.TotalDeaths * 0.02}px;">
          </div>
          <div class="value">
            <p class="text">Deaths</p>
            ${data.Global.TotalDeaths}
          </div>
        </div>
      </div>
       `;
      select.addEventListener("click", (e) => {
        let ulke = e.currentTarget;
        let ulkeData = data.Countries[ulke.value];
        content.innerHTML = `
        <h1 class='title'>${data.Countries[ulke.value].Country}</h1>
        <div class="bars">
        <div class="left">
          <div class="bar" style="max-height:500px; height:${
            ulkeData.TotalConfirmed * 0.002
          }px;">
          </div>
          <div class="value">
            <p class="text">İnfected</p>
            ${ulkeData.TotalConfirmed}
          </div>
        </div>
        <div class="right">
          <div class="bar2" style="max-height:200px; height:
          ${ulkeData.TotalDeaths * 0.02}px;">
          </div>
          <div class="value">
            <p class="text">Deaths</p>
            ${ulkeData.TotalDeaths}
          </div>
        </div>
      </div>
       `;
      });
    });
}

getData();
