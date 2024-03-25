function displayWeather(response) {
  let date = new Date(response.data.time * 1000);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formateDate(date);

  let weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-img " />`;

  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = `${Math.round(response.data.temperature.current)}°C`;

  let condition = document.querySelector(".condition");
  condition.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;

  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
}

function searchCity(city) {
  let apiKey = "a34b872b401de0d58o6t84c11efbc2d4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
}

function formateDate(date) {
  let dayOfMonth = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
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

  let months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[date.getMonth()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes}`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h1");
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  cityElement.innerHTML = city;

  searchCity(city);
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

searchCity("eMalahleni");
