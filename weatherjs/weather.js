class Weather {
    constructor(city, countryCode) {
        this.apiKey = '390b61c9daaf585e27b48780b750fab2';
        this.city = city;
        this.countryCode = countryCode;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}

// {
//     "coord": {
//         "lon":-0.13,"lat":51.51
//     },
//     "weather":[
//         {"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}
//     ],
//     "base":"stations",
//     "main":{
//         "temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15
//     },
//     "visibility":10000,
//     "wind":{
//         "speed":4.1,"deg":80
//     },
//     "clouds":{
//         "all":90
//     },
//     "dt":1485789600,
//     "sys":{
//         "type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875
//     },
//     "id":2643743,
//     "name":"London",
//     "cod":200
// }