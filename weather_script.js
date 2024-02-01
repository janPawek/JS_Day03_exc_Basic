// Aufgabe: ex 2 | Temperature v2.0
// Now when you have program Temperature v1.0 done from the other day, it is time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.

document.addEventListener("DOMContentLoaded", function () {
    let temp = Math.random() * 50 - 5;
    displayWeather(temp);
});

function displayWeather(temperature) {
    let temperatureElement = document.getElementById("temperature");
    let messageElement = document.getElementById("weather-message");
    let imageElement = document.getElementById("weather-image");

    temperatureElement.textContent = `Temperature: ${temperature.toFixed(1)}°C`;

    if (temperature < 10) {
        messageElement.textContent = "The weather is cold";
        imageElement.src = "/media/cold-weather-image.jpg"; // Replace with the actual image source for cold weather
    } else if (temperature < 32) {
        messageElement.textContent = "The weather is moderate";
        imageElement.src = "media/moderate-weather.jpeg"; // Replace with the actual image source for moderate weather
    } else {
        messageElement.textContent = "The weather is hot";
        imageElement.src = "media/hot-weather-image.jpeg"; // Replace with the actual image source for hot weather
    }
}
