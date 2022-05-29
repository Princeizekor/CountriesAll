const create = document.querySelector(".contain");
const place = document.querySelector(".placeObjects")
const set = document.querySelector(".selectRegion")
const drop = document.querySelector(".pro")
const nav = document.querySelector("#navbar")
const moon = document.querySelector(".moon")
const darks = document.querySelector(".darkmode")
const body = document.querySelector(".container")
const mode = document.querySelector(".mode")
const region = document.querySelectorAll(".region")
const finder = document.querySelector(".search")
const info = document.querySelector(".countryinfo")
const search = document.querySelector(".search-input")
async function getCountry() {
    const url = await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    res.forEach(element => {
        showCountry(element)
    });
    
}
getCountry()
function showCountry(data) {
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML= `<div class="placeObjects">
     <div class="imageWrapper">
    <img src="${data.flag}" alt="country flag">
    </div>
    <div class="countryinfo">
    <h5 class="countryName">${data.name}</h5>
<p>Popullation: <span class="popullation">${data.population}</span></p>
<p class="regions">Region: <span class="reg">${data.region}</span></p>
<p>Capital: <span class="capital">${data.capital}</span></p>
</div>
</div>`
create.appendChild(country)
country.addEventListener("click", function() {
    showCountryfiles(data)
})
}
set.addEventListener("click", function() {
    drop.classList.toggle("showDropDown")
})
const regions = document.getElementsByClassName("regions")
const countryName = document.getElementsByClassName("countryName")
region.forEach(element => {
    element.addEventListener("click", function() {
       Array.from(regions).forEach(elements => {
        if(elements.innerText.includes(element.innerText) || element.innerText == "All") {
            elements.parentElement.parentElement.style.display = "grid"
        } else {
            elements.parentElement.parentElement.style.display = "none"
        }
       })
    })
})
search.addEventListener("input", function() {
    Array.from(countryName).forEach(elements => {
        if(elements.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elements.parentElement.parentElement.style.display = "grid"
        } else {
            elements.parentElement.parentElement.style.display = "none"
        }
       })
})
darks.addEventListener("click", function() {
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})
const Modal = document.querySelector(".countryMode")
function showCountryfiles(data) {
    Modal.classList.toggle("show")
    Modal.innerHTML =`<button class="back">Back</button>
    <div class="Modal">
        <div class="firstModal">
            <img src="${data.flag}" alt="country flag image">
        </div>
        <div class="secondModal">
            <h1>${data.name}</h1>
            <div class="Modalinfo">
            <div class="modalText">
                <p><strong>Native Name:</strong> <span class="popullation">${data.nativeName}</span></p>
                <p><strong>population:</strong> <span class="reg">${data.population}</span></p>
                <p><strong>Region:</strong> <span class="capital">${data.region}</span></p>
                <p><strong>Sub Region:</strong> <span class="capital">${data.subregion}</span></p>
                <p><strong>Capital:</strong> <span class="capital">${data.capital}</span></p>
            </div>
            <div class="modalTexttwo">
                <p><strong>Top Level Domain:</strong> <span class="popullation">${data.topLevelDomain.map(element => element)}</span></p>
                <p><strong>Currencies:</strong> <span class="reg">${data.currencies.map(element => element.name)}</span></p>
                <p><strong>Language:</strong> <span class="capital">${data.languages.map(element => element.name)}</span></p>
            </div>
            </div>
        </div>
    </div>`;
    const back = Modal.querySelector(".back")
back.addEventListener("click", function() {
     Modal.classList.toggle("show")
})
}