function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  //temperature
  let selectTemp = document.querySelector("#temperature");
  selectTemp.innerHTML = Math.round(response.data.main.temp);

  //city
  let selectCity = document.querySelector("#city");
  selectCity.innerHTML = response.data.name;

  //description
  let selectDescription = document.querySelector("#description");
  selectDescription.innerHTML = response.data.weather[0].description;

  //precipitation
  /*let selectPrecipitation = document.querySelector("#precipitation");
  let precipitation = response.data.minulely[1].precipitation;
  if (precipitation) {
    selectPrecipitation.innerHTML = precipitation;
  }*/

  //humidity
  let selectHumidity = document.querySelector("#humidity");
  selectHumidity.innerHTML = response.data.main.humidity;

  //wind
  let selectWind = document.querySelector("#wind");
  selectWind.innerHTML = Math.round(response.data.wind.speed);

  //date
  let selectDate = document.querySelector("#date");
  selectDate.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "7484e80630313a40c6d275fe9ae8e684";
let city = "Kharkiv";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
