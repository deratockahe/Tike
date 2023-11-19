navigator.splashscreen.show();
window.setTimeout(function () {
  navigator.splashscreen.hide();
}, splashDuration - fadeDuration);

async function DohvatiPatike() {
  try {
    const response = await fetch("patike.json");
    const data = await response.json();

    const patika = document.getElementById("patika");
    patika.innerHTML = `
      <div class="patikaDana">
        <div class="imgWrapperDana">
          <img src=${data[12].img} class="slikaDana">
        </div>
        <div id="opisDana" style="background-color:${data[12].boja}">
          <div class="naziv">
            <div class="nameDana">${data[12].ime}</div>
            <div class="font18">${data[12].vrijeme}</div>
          </div>
          <div class="ocjenaDana">
            <div class"font18">Udobnost</div>
            <div class="font12"> ${data[12].udobnost}</div>
          </div>
          <div class="detaljanOpis poravnanjeTeksta">${data[12].opis1} </div>
        </div>  
      </div>
    `;

    const patikaSunce = document.getElementById("patikaSunce");
    patikaSunce.innerHTML = `
        <div class="obuca">
          <div class="imgWrapperKategorija">
            <img src=${data[0].img} class="slikaKategorija">
          </div>
          <div id="opisDanaKategorija" style="background-color:${data[0].boja}">
              <div class="productInfo">
                <h3>${data[0].ime}</h3>
              </div>
              <a href="${data[0].link}" target="_blank">
                <div class="kupovina">
                  <h4 class="marginaDesno8">${data[0].cijena}</h4> <div>na ${data[0].stranica}</div>
                </div>
              </a>
          </div>
        </div> 

        <div class="odjeca">
          <div class="dvaPredmeta">
            <div class="odjecaPredmet2"><img src="${data[0].odjeca1}" class="slikaOdjeca" alt=""></img></div>
            <div class="odjecaPredmet2"><img src="${data[0].odjeca2}" class="slikaOdjeca" alt=""></div>
          </div>
          <div class="odjecaPredmet1 traperice" ><img src="${data[0].odjeca3}" class="slikaOdjeca" alt=""></div>
        </div>  
    `;

    const patikaVruce = document.getElementById("patikaVruce");
    patikaVruce.innerHTML = ` 
          <div class="obuca">
            <div class="imgWrapperKategorija">
            <img src=${data[6].img} class="slikaKategorija">
            </div>
            <div id="opisDanaKategorija" style="background-color:${data[6].boja}">
                <div class="productInfo">
                      <h3>${data[6].ime}</h3>
                </div>
                <a href="${data[6].link}" target="_blank">
                  <div class="kupovina">
                    <h4 class="marginaDesno8">${data[6].cijena}</h4> <div>na ${data[6].stranica}</div>
                  </div>
                </a>
            </div>
          </div>

          <div class="odjeca">
          <div class="dvaPredmeta">
            <div class="odjecaPredmet2"><img src="${data[6].odjeca1}" class="slikaOdjeca" alt=""></img></div>
            <div class="odjecaPredmet2"><img src="${data[6].odjeca2}" class="slikaOdjeca" alt=""></div>
          </div>
          <div class="odjecaPredmet1" ><img src="${data[6].odjeca3}" class="slikaOdjeca" alt=""></div>
        </div> 
    `;

    const patikaKisa = document.getElementById("patikaKisa");
    patikaKisa.innerHTML = `
        <div class="obuca">
          <div class="imgWrapperKategorija">
            <img src=${data[10].img} class="slikaKategorija">
            </div>
          <div id="opisDanaKategorija" style="background-color:${data[10].boja}">
            <div class="productInfo">
              <h3>${data[10].ime}</h3>
            </div>
            <a href="${data[10].link}" target="_blank">
              <div class="kupovina">
                <h4 class="marginaDesno8">${data[10].cijena}</h4> <div>na ${data[10].stranica}</div>
              </div>
            </a>
          </div>
        </div>

        <div class="odjeca">
          <div class="dvaPredmeta">
            <div class="odjecaPredmet2"><img src="${data[10].odjeca1}" class="slikaOdjeca" alt=""></img></div>
            <div class="odjecaPredmet2"><img src="${data[10].odjeca2}" class="slikaOdjeca" alt=""></div>
          </div>
          <div class="odjecaPredmet1" ><img src="${data[10].odjeca3}" class="slikaOdjeca" alt=""></div>
        </div> 

        
    `;

    const patikaSnijeg = document.getElementById("patikaSnijeg");
    patikaSnijeg.innerHTML = `
        <div class="obuca">
          <div class="imgWrapperKategorija">
            <img src=${data[12].img} class="slikaKategorija">
          </div>
          <div id="opisDanaKategorija" style="background-color:${data[12].boja}">
              <div class="productInfo">
                <h3>${data[12].ime}</h3>
              </div>
              <a href="${data[12].link}" target="_blank">
                <div class="kupovina">
                  <h4 class="marginaDesno8">${data[12].cijena}</h4> <div>na ${data[12].stranica}</div>
                </div>
              </a>
          </div>
        </div>

        <div class="odjeca">
          <div class="dvaPredmeta">
            <div class="odjecaPredmet2"><img src="${data[12].odjeca1}" class="slikaOdjeca" alt=""></img></div>
            <div class="odjecaPredmet2"><img src="${data[12].odjeca2}" class="slikaOdjeca" alt=""></div>
          </div>
          <div class="odjecaPredmet1 hlace" ><img src="${data[12].odjeca3}" class="slikaOdjeca" alt=""></div>
        </div> 
    `;

    const randomPatike = randomiziraj(data);

    const svePatike = document.getElementById("svePatike");
    svePatike.innerHTML = randomPatike
      .map((patike) => {
        const {
          id,
          ime,
          img,
          vrijeme,
          udobnost,
          boja,
          stil,
          opis2,
          link,
          cijena,
          stranica,
        } = patike;
        return `
          <div class="jednaPatika ${stil}" onmouseover="PokaziOpis(${id})" onmouseout="SakrijOpis(${id})" >

            <div id="primarno${id}">
              <div class="imgWrapper">
              <img src=${img} class="slika">
              </div>
              <div id="opis" style="background-color:${boja}">
                <div class="naziv">
                  <div class="name">${ime}</div>
                  <div class="font12">${vrijeme}</div>
                </div>
                <div class="ocjena">
                  <div class="font16">Udobnost</div>
                  <div class="font10">${udobnost}</div>
                </div>
              </div>
            </div>

            <div id="dodatno${id}" class="dodatnoSvi" style="background-color:${boja}" hidden>
              <div class="dodatniOpis">${opis2}</div>
              <a href="${link}" target="_blank">
                <div class="kupovinaSve">
                <h4 class="marginaDesno8">${cijena}</h4> <div>na ${stranica}</div>
                </div>
              </a>
            </div>

          </div>
      `;
      })
      .join("");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//funkcija za randomiziranje
function randomiziraj(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Pokazi(stil) {
  var listaPatika = $(".jednaPatika");
  $(listaPatika).each(function (i, item) {
    $(item).show();
  });

  $(listaPatika).each(function (i, item) {
    if (!$(item).hasClass(stil)) {
      $(item).hide();
    }
  });
}

function PokaziSve() {
  var listaPatika = $(".jednaPatika");

  $(listaPatika).each(function (i, item) {
    $(item).show();
  });
}

function PokaziKategorije() {
  document.getElementById("kategorije").hidden = false;
  document.getElementById("pocetna").hidden = true;
  document.getElementById("favoriti").hidden = true;
}
function PokaziPocetnu() {
  document.getElementById("favoriti").hidden = true;
  document.getElementById("pocetna").hidden = false;
  document.getElementById("kategorije").hidden = true;
}
function PokaziFavorite() {
  document.getElementById("kategorije").hidden = true;
  document.getElementById("pocetna").hidden = true;
  document.getElementById("favoriti").hidden = false;
}

function Accordion(panelId) {
  var panel = document.getElementById(panelId);
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
}

function PokaziOpis(id) {
  document.getElementById("primarno" + id).hidden = true;
  document.getElementById("dodatno" + id).hidden = false;
}

function SakrijOpis(id) {
  document.getElementById("primarno" + id).hidden = false;
  document.getElementById("dodatno" + id).hidden = true;
}
