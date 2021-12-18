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