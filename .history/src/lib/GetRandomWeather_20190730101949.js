const WEATHER_TYPES = ["cloud", "rain", "snow", "storm", "sun", "sunny"];

export const getRandomWeather = () => {
    const maxTemperature = 10 + Math.floor(20 * Math.random());
    console.log(maxTemperature);
    return {
        maxTemperature,
        minTemperature: Math.floor
    }
}