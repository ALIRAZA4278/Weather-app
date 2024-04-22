const apiKey = "c85bf4603fefac7ffbbefb3fede6b5bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

const getWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  if (response.status === 404) {
    // document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
    alert("Invalid city name")
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    }
    else if (data.weather[0].main == "rain") {
      weatherIcon.src = "rain.png";
    }
    else if (data.weather[0].main == "snow") {
      weatherIcon.src = "snow.png";
    }
    else if (data.weather[0].main == "drizzle") {
      weatherIcon.src = "drizzle.png";
    }
    else if (data.weather[0].main == "mist") {
      weatherIcon.src = "mist.png";
    }
    document.querySelector(".weather").style.display = "block"
  }

}
searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value)
})
