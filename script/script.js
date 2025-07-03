document
.getElementById("weatherBtn")
.addEventListener("click", function () {
    const city = document.getElementById("input").value.trim();
    const apiKey = "368fa7e02354e472d1a03fdbc3f0c285";
    const weatherResult = document.getElementById("weatherResult");

    if (!city) {
    weatherResult.innerHTML =
        "<div class='text-danger'>Please enter a city name.</div>";
    return;
    }

    fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
    .then((response) => {
        if (!response.ok) {
        throw new Error("City not found.");
        }
        return response.json();
    })
    .then((data) => {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        weatherResult.innerHTML = `
        <div class="card p-3 shadow-sm">
        <h5 class="text-primary">${data.name}</h5>
        <p><strong>Temperature:</strong> ${temp} °C</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind} m/s</p>
        </div>
    `;
    })
    .catch((error) => {
        weatherResult.innerHTML =
        "<div class='text-danger'>Error: " + error.message + "</div>";
    });
});