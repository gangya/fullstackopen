// import axios from 'axios';
import servicesCountries from '../services/services';
import { useState } from 'react';

const baseUrlIconsWeather = 'https://openweathermap.org/payload/api/media/file/';


export const ShowCountries = ({arrayOfCountriesToShow, arrayOfCountries, methodTocallFromButton}) => {
    const [cityTemperature, setCityTemperature] = useState(null);
    const [cityWind, setCityWind] = useState(null);
    const [cityWeather, setCityWeather] = useState(null);
    // let cityTemperature = null, cityWind = null, cityWeather = null;    
    // console.log('arrayOfCountries.length', arrayOfCountries.length);    
    if(arrayOfCountriesToShow.length > 10){
        return (<>Too many matches, specify another filter</>)
    }
    if(arrayOfCountriesToShow.length == 1){
        // console.log('arrayOfCountriesToShow[0][1] ', arrayOfCountriesToShow[0][1]);        
        servicesCountries
        .getWeatherCity(arrayOfCountries[arrayOfCountriesToShow[0][1]].capital)
        .then( response => {
                // console.log('response getWeatherCity', response);
                // console.log('cityTemperature', response.main.temp);
                return [response.main.temp, response.wind.speed, baseUrlIconsWeather+`${response.weather[0].icon}.png` ]             
            }
        )
        .then(arrayData => {
                setCityTemperature(arrayData[0]);
                setCityWind(arrayData[1])
                setCityWeather(arrayData[2]);                
           }
        )
        .catch(error => console.log('Error in promise: ', error))
/*         console.log('cityTemperature', cityTemperature);                             
        console.log('cityWind', cityWind);
        console.log('cityWeather', cityWeather);
 */
        return (
        <>
        <ShowCountryInfo countryIdx={arrayOfCountriesToShow[0][1]} arrayOfCountries={arrayOfCountries} 
        cityTemp={cityTemperature} cityWnd={cityWind} cityWth={cityWeather} />
        </>
        )        
    }    
     return (
        <>
        {arrayOfCountriesToShow.map((country) => 
            <p key={country[1]}>{country[0]} 
            <button type="button" onClick={() => 
                methodTocallFromButton(country[1], arrayOfCountries)}>{country[1]},Show</button> 
            </p> 
        )
        }
        </>
    )
}

export const ShowCountryInfo = ({countryIdx, arrayOfCountries, cityTemp, cityWnd, cityWth}) => {
    // console.log('countryIdx: ', countryIdx, 'arrayOfCountries', arrayOfCountries);
    // console.log('arrayOfCountries[countryIdx].name.common', arrayOfCountries[countryIdx].name.common);
    return (
    <>
        <h1>{arrayOfCountries[countryIdx].name.common}</h1>
        <p>Capital {arrayOfCountries[countryIdx].capital}</p>
        <p>Area {arrayOfCountries[countryIdx].area}</p>
        <h1>Languages</h1>
        <ul>
            {/* {ShowUlistElements(arrayOfCountries[countryIdx].languages)} */}
            <ShowUlistElements elementsToShow={arrayOfCountries[countryIdx].languages} />
        </ul>
        <br />
        <img src={arrayOfCountries[countryIdx].flags.png} alt="" />
        <br />
        <h1>Weather in {arrayOfCountries[countryIdx].capital}</h1>
        Temperature {cityTemp} Celsius
        <br />
        <img src={cityWth} alt="" />
        <br />
        Wind {cityWnd} m/s
    </>
    )   
}

export const ShowUlistElements = ({elementsToShow}) => {
    // console.log('elementsToShow ', elementsToShow);    
    const arrayofElementsToShow = Object.values(elementsToShow);
    return (
        <>
        {arrayofElementsToShow.map(element => <li key={element}>{element}</li>  ) }        
        </>
    )
}