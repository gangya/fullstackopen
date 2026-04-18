import { useState } from 'react';
import { FormFields } from './components/FormFields';
import servicesCountries from './services/services';
import { ShowTextOfCountries } from './components/DisplayCountries';

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

  return (
    <>
    <FormFields formSearchLabel="find countries" formSearchText={searchText} methodToCall={searchTextHandle}></FormFields>
    <br></br>
    <ShowTextOfCountries arrayOfCountriesToShow={countriesToShow} arrayOfCountries={countriesArrayOriginal} />
    {/* {countriesToShow} */}
    </>
  )
}

export default App
