const apiKey = "f185252152f5168093c43fb96697c26b";

const weatherDataE1 = document.getElementById("weather-data");

const cityInputE1 = document.getElementById("city-input");

const formE1 = document.getElementById("form");

formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputE1.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${Math.round(data.main.humidity)}%`,
      `Wind Speed: ${Math.round(data.wind.speed)} m/s`,
    ];
    weatherDataE1.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" >`;
    weatherDataE1.querySelector(
      ".temperature"
    ).textContent = `${temperature}°C`;
    weatherDataE1.querySelector(
      ".description"
    ).textContent = `${description}°C`;
    weatherDataE1.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    console.error(error);
  }
}
