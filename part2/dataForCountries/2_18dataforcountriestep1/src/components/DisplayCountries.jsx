export const ShowTextOfCountries = ({arrayOfCountriesToShow, arrayOfCountries}) => {
    // console.log('arrayOfCountries.length', arrayOfCountries.length);    
    if(arrayOfCountriesToShow.length > 10){
        return (<>Too many matches, specify another filter</>)
    }
    if(arrayOfCountriesToShow.length == 1){
        // console.log('arrayOfCountries[arrayOfCountriesToShow[0][1]].languages', arrayOfCountries[arrayOfCountriesToShow[0][1]].languages);        
        return (
        <>
        {/* One matches, show detailed information */}
        <h1>{arrayOfCountriesToShow[0][0]}</h1>
        <p>Capital {arrayOfCountries[arrayOfCountriesToShow[0][1]].capital}</p>
        <p>Area {arrayOfCountries[arrayOfCountriesToShow[0][1]].area}</p>
        <h1>Languages</h1>
        <ul>
            {/* {arrayOfCountries[arrayOfCountriesToShow[0][1]].languages} */}
            {ShowUlistElements(arrayOfCountries[arrayOfCountriesToShow[0][1]].languages)}
        </ul>
        <br />
        <img src={arrayOfCountries[arrayOfCountriesToShow[0][1]].flags.png} alt="" />        
        </>
        )        
    }    
     return (
        <>
        {arrayOfCountriesToShow.map((country) => <p key={country[1]}>{country[0]}</p>  )}
        </>
    )
}

export const ShowCountry = () => {}

export const ShowUlistElements = (elementsToShow) => {
    // console.log('elementsToShow ', elementsToShow);    
    const arrayofElementsToShow = Object.values(elementsToShow);
    return (
        <>
        {arrayofElementsToShow.map(element => <li key={element}>{element}</li>  ) }        
        </>
    )
}