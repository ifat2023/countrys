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
  <button type="button" class="btn btn-warning">${(data.country[i].probability * 100).toFixed(2)}%</button>
   </div><br> 
  `
}
 document.querySelector("#countryList").innerHTML =str;
   
  })
  .catch(error => {
  
    console.log('There was an error', error);
  });


 }

// async function predictInfo(country) {

// fetch(`https://flagcdn.com/en/codes.json`)
//   .then(response => response.json())
//   .then(data => {
   
//     const flagImg = document.querySelector('imageElement').innerHTML
//     flagImg.src = data[0].flags.png;
    
//   })
//   .catch(error => {
   
//     console.log('There was an error', error);
//   });
//}

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const countryCode = 'US'; // Replace with the desired country code

const apiUrl = `https://flagsapi.com/#countries${countryCode}?access_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const flagUrl = data.flags[0];
    
   
    const flagImg = document.createElement('img');
    flagImg.src = flagUrl;
    flagImg.alt = `${countryCode} Flag`;

    
    const imageElement = document.querySelector('#imageElement');
    imageElement.appendChild(flagImg);
  })
  .catch((error) => {
    console.log('There was an error', error);
  });




    