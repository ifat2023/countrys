async function predictCountry(){
const firstName = document.querySelector("#nameInput").value;
fetch(`https://api.nationalize.io/?name=${firstName}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

let str ='';
for (let i = 0; i < data.country.length; i++) {
  
  str +=`
  <div class="btn-group m-2" role="group" aria-label="Basic mixed styles example">
  <button type="button" onclick="predictInfo('${data.country[i].country_id}')"
   class="btn btn-danger">${data.country[i].country_id}</button>
  <button type="button" class="btn btn-warning">${data.country[i].probability}</button>
   </div> <br>
  `
}
 document.querySelector("#countryList").innerHTML =str;
   
  })
  .catch(error => {
  
    console.log('There was an error', error);
  });


}

async function predictInfo(country) {

fetch(`https://restcountries.com/v3.1/alpha/${country}`)
  .then(response => response.json())
  .then(data => {
   
    const flagImg = document.querySelector('imageElement').innerHTML
    flagImg.src = data[0].flags.png;
    
  })
  .catch(error => {
   
    console.log('There was an error', error);
  });


}

