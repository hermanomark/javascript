class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.clouds = document.getElementById('w-clouds');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.pressure.textContent = `Pressure: ${weather.main.humidity}`;
        this.clouds.textContent = `Clouds: ${weather.clouds.all}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;
    }
}