const requestURL = "https://api.artic.edu/api/v1/artworks/search?q=cats";

function getMoods(){

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    console.log(jsonObject.data[1].api_link)

  });

};

getMoods();
function add(x) {
  let y=x+3
  return y
}
function subtract(x) {
  let y=x-3
  return y
}

let elemP = document.createElement('p');
elemP.textContent=add(100)
let elemP2 = document.createElement('p');
elemP2.textContent=subtract(100)

document.body.appendChild(elemP);
document.body.appendChild(elemP2);
