document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = 'c33f7cb06d3535ba2c7485e3e41d06ca';  // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${weatherIcon}" alt="Weather Icon">
                <p><i class="fas fa-thermometer-half"></i>Temperature: ${data.main.temp}°C</p>
                <p><i class="fas fa-cloud"></i>Weather: ${data.weather[0].description}</p>
                <p><i class="fas fa-tint"></i>Humidity: ${data.main.humidity}%</p>
                <p><i class="fas fa-wind"></i>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherDisplay').innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
