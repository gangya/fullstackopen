import axios from 'axios';

const baseUrlCountries = 'https://studies.cs.helsinki.fi/restcountries/api/';
const baseUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = import.meta.env.VITE_SOME_KEY

const getAllCountries = async () => {
    // console.log('Looking for all countries');
    const request = axios.get(baseUrlCountries+'all');
    return await request.then(response => response.data)
/*     await request;
    return request.then(response => response.data)
 */    // return 'Looking for all countries'; 
}

const getWeatherCity = async (capitalCity) => {
    // console.log('Looking for weather City');
    // console.log('baseUrl --> ', baseUrlWeather+`${capitalCity}&appid=${api_key});    
    const request = axios.get(baseUrlWeather+`${capitalCity}&appid=${api_key}`);
    return await request.then(response => response.data)
}
export default {
    getAllCountries,
    getWeatherCity,
}