const data = [{

    "Name": "Antigua and Barbuda",
    "Capital": "Saint John's",
    "Flag": "https://restcountries.eu/data/atg.svg",
    "Population": 86295,
    "code": "XCD",
    "name": "East Caribbean dollar",
    "symbol": "$"
        
      

 },

{
    "Name": "Bahamas",
    "Capital": "Nassau",
    "Flag": "https://restcountries.eu/data/bhs.svg",
    "Population": 378040,
    "code": "BSD",
    "name": "Bahamian dollar",
    "symbol": "$"
},

{
    "Name": "Barbados",
    "Flag": "https://restcountries.eu/data/brb.svg",
    "Capital": "Bridgetown",
    "Population": 285000,
},

{
    "Name": "Belize",
    "Capital": "Belmopan",
    "Flag": "https://restcountries.eu/data/blz.svg",
    "Population": 370300,

},

];







// function renderData(language = "caricom") {

//     const url = 'https://restcountries.eu/rest/v2/regionalbloc/CARICOM/${language}';
//     fetch(url)
//         .then(data => data.json())

// }
document
.querySelector('.js-language')
.addEventListener('change', languagChanged);
function countrytonode(country) {

return ` 
<section class="country-card">
<h1>${country.name}</h1>
<p>Capital:${country.capital}</p>

<p>Population:${country.population}</p>
<p>Currency:${country.code}</p>
<img src="${country.flag}" alt="${country.name}" class="flag-img"  />
</section>`;

}
function renderData(data) {
const nodes = [];
if (!Array.isArray(data)) {
    // Inform the user that an error occurred 
    return;
}

for (let country of data) {
 nodes.push(countrytonode(country));

}
console.log(nodes);
const markup = nodes.join("");

document
    .querySelector('.js-container')
    .innerHTML = markup;
}

function fetchData(language) {
const url = 'https://restcountries.eu/rest/v2/regionalbloc/' + language;
fetch(url)
    .then((response) => response.json())
    .then(renderData);

}
fetchData(document
.querySelector('.js-language').value)

function languagChanged(event) {
fetchData(event.target.value)
console.log(event.target.value);
}

document
.querySelector('.js-language')
.addEventListener('change', languagChanged);