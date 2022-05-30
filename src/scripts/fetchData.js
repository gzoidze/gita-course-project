const onSuccess = (result) => {
  const cities = document.querySelector('.cities');
  
  for (let i = 0; i < result.cities.length; i++) {
    const city = document.createElement("div");
    city.classList.add("single-city");
    cities.appendChild(city);
    const cityName = document.createElement("h3");
    cityName.innerHTML = result.cities[i].name;
    const cityImage = document.createElement("img");
    cityImage.setAttribute("src", result.cities[i].picture);
    const cityDescription = document.createElement("p");
    cityDescription.innerHTML =  result.cities[i].description;
    city.appendChild(cityName);
    city.appendChild(cityImage);
    city.appendChild(cityDescription);
  }
}

export const fetchData = () => {
  $.ajax({
    url: "../../test.json", 
    success: function(result){
      onSuccess(result);
    }
  });
}
