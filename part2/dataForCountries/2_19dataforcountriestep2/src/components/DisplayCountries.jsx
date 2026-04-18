export const ShowCountries = ({arrayOfCountriesToShow, arrayOfCountries, methodTocallFromButton}) => {
    // console.log('arrayOfCountries.length', arrayOfCountries.length);    
    if(arrayOfCountriesToShow.length > 10){
        return (<>Too many matches, specify another filter</>)
    }
    if(arrayOfCountriesToShow.length == 1){
        // console.log('arrayOfCountries[arrayOfCountriesToShow[0][1]].languages', arrayOfCountries[arrayOfCountriesToShow[0][1]].languages);        
        return (
        <>
        <ShowCountryInfo countryIdx={arrayOfCountriesToShow[0][1]} arrayOfCountries={arrayOfCountries} />
        </>
        )        
    }    
     return (
        <>
        {arrayOfCountriesToShow.map((country) => 
        <p key={country[1]}>{country[0]} 
        <button type="button" onClick={() => methodTocallFromButton(country[1], arrayOfCountries)
         }>{country[1]},Show</button> 
        </p> 
        )
        }
        {/* arrayOfCountriesToShow.map((country) => { //console.log('country[1]', country[1]) 
            return (
            <>
            <p key={country[1]}>{country[0]} </p> <button key={country[1]} type="button" onClick={() => ShowCountry(country[1], arrayOfCountries)}>Show</button>
            </>
        )
        }) */}
        </>
    )
}


/* export const ShowCountry = ({countryIdx, arrayOfCountries}) => 
<ShowCountryInfo countryIdx={countryIdx} arrayOfCountries={arrayOfCountries} />; */

export const ShowCountryInfo = ({countryIdx, arrayOfCountries}) => {
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


/*
        <h1>{arrayOfCountriesToShow[0][0]}</h1>
        <p>Capital {arrayOfCountries[arrayOfCountriesToShow[0][1]].capital}</p>
        <p>Area {arrayOfCountries[arrayOfCountriesToShow[0][1]].area}</p>
        <h1>Languages</h1>
        <ul>
            // {ShowUlistElements(arrayOfCountries[arrayOfCountriesToShow[0][1]].languages)}
        // </ul>
        // <br />
        // <img src={arrayOfCountries[arrayOfCountriesToShow[0][1]].flags.png} alt="" />        

*/