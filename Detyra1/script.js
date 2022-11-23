"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const whereAmI = function(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  .then((res) => {
    if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
    return res.json()
  })
  .then((data) => {
    console.log(data)
    console.log(`You are in ${data.city}, ${data.country}`)
  })
  .then((data) => renderCountry(data[0]))
  .catch((err) => console.error(`${err.message} 💥`))
}

whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)

// Coding Challenge #1
/*
Në këtë sfidë ju do të ndërtoni një funksion 'whereAmI' i cili paraqet një shtet VETËM bazuar në koordinatat GPS.
 Për këtë, ju do të përdorni një API të dytë për  geocode koordinatat.
Këtu janë detyrat tuaja:
PJESA 1
1. Krijo një funksion 'whereAmI' i cili merr si hyrje një vlerë të gjerësisë gjeografike (lat)
 dhe një vlerë të gjatësisë (lng) (këto janë koordinatat GPS, shembujt janë më poshtë).
2. Bëni 'reverse geocoding' të koordinatave të dhëna. 
Reverse Geocoding do të thotë të konvertosh koordinatat në një vendndodhje kuptimplote, si emri i një qyteti dhe vendi.
 Përdorni këtë API për të bërë reverse geocoding : https://geocode.xyz/api.
 AJAX Call do të bëhet në një URL me këtë format: https://geocode.xyz/52.508,13.381?geoit=json.
Përdorni fetch API-në e dhe promises për të marrë të dhënat.
 MOS përdorni funksionin getJSON që kemi krijuar.
3. Pasi të keni të dhënat, kthehuni  në console për të parë të gjitha atributet që keni marrë për vendndodhjen
 e dhënë. Më pas, duke përdorur këto të dhëna, regjistroni një mesazh si ky në tastierë: 'Ju jeni në Berlin, Gjermani'
4. Lidhni një metodë .catch deri në fund të promise dhe regjistroni gabimet në console.
5. Ky API ju lejon të bëni vetëm 3 kërkesa në sekondë. Nëse ringarkoni shpejt, 
do të merrni këtë gabim me kodin 403. Ky është një gabim me kërkesën. Mbani mend, fetch() NUK e refuzon premtimin në këtë rast. Pra, krijoni një gabim për të refuzuar vetë premtimin, me një mesazh gabimi kuptimplotë.
PJESA 2
6. Tani është koha për të përdorur të dhënat e marra për të dhënë një shtet. Pra, merrni atributin përkatës nga rezultati i API-së së gjeokodimit dhe futeni atë në API të vendeve që kemi përdorur.
7. Rendisni shtetin dhe kapni ndonjë gabim, ashtu siç kemi bërë në leksionin e fundit (madje mund ta kopjoni këtë kod, nuk ka nevojë të shkruani të njëjtin kod)
KOORDINATAT E TESTIMIT 1: 52.508, 13.381 (Latitude, Longitude)
KOORDINATA TESTIMI 2: 19.037, 72.873
KOORDINATA TESTIMI 2: -33.933, 18.474
MIRË SURE 😀
*/
