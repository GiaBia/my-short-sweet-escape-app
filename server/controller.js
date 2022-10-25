require("dotenv").config();
const { WEATHER_API_KEY } = process.env;
const axios = require("axios");
let keyCities = [
    "Detroit",
    "Nashville",
    "Miami",
    "Los Angeles",
    "Las Vegas"
];
weather_base_URL = `https://api.openweathermap.org/data/2.5`
let keyCitiesWeather = {}

module.exports = {
    getWeatherForKeyCities: async (req, res) => {
        await Promise.all(keyCities.map((city) => {
            return axios
                .get(
                    `${weather_base_URL}/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=imperial`)
                .then((response) => {
                    keyCitiesWeather[city] = response.data
                })
                .catch((err) => console.log(err));
        }));
        res.status(200).send(keyCitiesWeather)
    },
};
