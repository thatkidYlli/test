"use strict"

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

const getCountryData = function (country){
    const request = new XMLHttpRequest()
    request.open("GET", 'https://restcountries.com/v2/name/${country}')
    request.send()
    request.addEventListener("load", function(){
        const [data] = JSON.parse(this.responseText)
        console.log(data)

        const html = ` <article class="country">
        <img class="countryimg" src="${data.flag}" />
        <div class="countrydata">
          <h3 class="countryname">${data.capital}</h3>
          <h4 class="countryregion">${data.region}</h4>
          <h4 class="countryregion">${data.population}</h4>
          <h4 class="countryregion">${data.timezones}</h4>

          <p class="countryrow"><span>🏄</span>${(
            +data.population / 1000000).toFixed(1)} people </p>
        </div>
      </article> `

      countriesContainer.insertAdjacentElement('beforeend', html)
      countriesContainer.style.opacity = 1;
    })

    getCountryData('Albania')
    getCountryData('Kosovo')
    getCountryData('Usa')
}