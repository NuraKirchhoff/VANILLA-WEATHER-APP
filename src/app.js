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
  //temperature
  let selectTemp = document.querySelector("#temperature");
  selectTemp.innerHTML = Math.round(response.data.main.temp);

  //city
  let selectCity = document.querySelector("#city");
  selectCity.innerHTML = response.data.name;

  //description
  let selectDescription = document.querySelector("#description");
  selectDescription.innerHTML = response.data.weather[0].description;

  //humidity
  let selectHumidity = document.querySelector("#humidity");
  selectHumidity.innerHTML = response.data.main.humidity;

  //wind
  let selectWind = document.querySelector("#wind");
  selectWind.innerHTML = Math.round(response.data.wind.speed);

  //date
  let selectDate = document.querySelector("#date");
  selectDate.innerHTML = formatDate(response.data.dt * 1000);

  //icon
  let selectIcon = document.querySelector("#icon");
  selectIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  selectIcon.setAttribute("alt", `${response.data.weather[0].description}`);
}

// search control
function search(city) {
  let apiKey = "7484e80630313a40c6d275fe9ae8e684";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function submitCity(event) {
  event.preventDefault();
  let cityImput = document.querySelector("#city-input");
  search(cityImput.value);
}

search("Paris");

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);
