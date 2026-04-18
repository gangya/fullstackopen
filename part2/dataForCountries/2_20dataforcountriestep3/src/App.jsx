import { useState } from 'react';
import { FormFields } from './components/FormFields';
import servicesCountries from './services/services';
import { ShowCountries } from './components/DisplayCountries';

function App() {
  const [searchText,setSearchText] = useState('');
  const [countriesArray, setCountriesArray] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [countriesArrayOriginal, setCountriesArrayOriginal] = useState([]);

  const requestCountries = () => {
    if(!countriesArray.length){      
      servicesCountries
      .getAllCountries()
      .then( response => {
        // console.log('response', response);
        const newCountriesArray = response.map((country, index) => [country.name.common, index] );  //countriesArray.concat("hello");
        // console.log('newCountriesArray ', newCountriesArray);            
        setCountriesArray(newCountriesArray);
        setCountriesArrayOriginal(response);
        // console.log(`response ${response}`)
      }            
      )
    }
  }

  requestCountries();

  const displayCountries = (countryToSearch) => {
    //console.log('countryToSearch.toString().toLowerCase()', countryToSearch.toString);    
    const newCountriesArray = countriesArray.filter(country => 
        country[0].toString().toLowerCase().includes(countryToSearch.toString().toLowerCase())
      );
      // "TEXT".toLowerCase() toString() toLowerCase.includes
      // country.toLowerCase.includes(countryToSearch)
      setCountriesToShow(newCountriesArray); 
  }

  const searchTextHandle = (event) => {
    const textValue = event.target.value;
    setSearchText(textValue);
    // console.log(`searchText ${textValue}`);    
    displayCountries(textValue);
  }

  const showCountry = (countryIdx, arrayOfCountries) => {
    // console.log('countryIdx: ', countryIdx, 'arrayOfCountries', arrayOfCountries);
    // console.log('arrayOfCountries[countryIdx].name.common', arrayOfCountries[countryIdx].name.common);
    displayCountries(arrayOfCountries[countryIdx].name.common);
  }


  return (
    <>
    <FormFields formSearchLabel="find countries" formSearchText={searchText} methodToCall={searchTextHandle}></FormFields>
    <br></br>
    <ShowCountries arrayOfCountriesToShow={countriesToShow} arrayOfCountries={countriesArrayOriginal} methodTocallFromButton={showCountry} />
    {/* {countriesToShow} */}
    </>
  )
}

export default App