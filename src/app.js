function displayTemperature(response) {
  console.log(response.data);
  let selectTemp = document.querySelector("#temperature");
  let selectCity = document.querySelector("#city");
  let selectDescription = document.querySelector("#description");

  //let selectPrecipitation = document.querySelector("#precipitation");
  let selectHumidity = document.querySelector("#humidity");
  let selectWind = document.querySelector("#wind");

  selectTemp.innerHTML = Math.round(response.data.main.temp);
  selectCity.innerHTML = response.data.name;
  selectDescription.innerHTML = response.data.weather[0].description;
  selectWind.innerHTML = Math.round(response.data.wind.speed);

  //selectPrecipitation.innerHTML = response.data.minulely[0].precipitation;
  selectHumidity.innerHTML = response.data.main.humidity;
}

let apiKey = "7484e80630313a40c6d275fe9ae8e684";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
