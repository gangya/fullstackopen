import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAllCountries = async () => {
    // console.log('Looking for all countries');
    const request = axios.get(baseUrl+'all');
    return request.then(response => response.data)
/*     await request;
    return request.then(response => response.data)
 */    // return 'Looking for all countries'; 
}

export default {
    getAllCountries,
    // getContry
}