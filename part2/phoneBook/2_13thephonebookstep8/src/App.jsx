import { useState, useEffect } from 'react'
import { SearchFilter } from './components/Searchfilter';
import { Showlist } from './components/Showlist';
import { Formfields } from './components/Formfields';
import servicesPersons from './services/services'

function App() {
  // const [urldb, setUrlDB] = useState('http://localhost:3001/persons');
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [showList, setShowList] = useState([]);

  const listHook = () => {
    servicesPersons
    .getAll()
    .then(newShowList => {
      // console.log('newShowList ', newShowList);
      setPersons(newShowList);
      setShowList(newShowList);      
    })
    .catch(error => console.log('Request Error: ', error));
  }

useEffect(listHook,[]);
  
const handleFilterChange = (event) => {
    let textFilter = event.target.value
    setNewFilter(textFilter);
    setShowList(persons.filter((person) => person.name.toLowerCase().includes(textFilter.toLowerCase())));
};
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    // console.log('newNumber: ', newNumber);    
  };  

  const addContact = (event) => {
    event.preventDefault();
    // console.log('persons: ', persons);    
    // console.log('includes: ', persons.includes(newPerson.name));
    if(!persons.filter(person => person.name === newName).length){
      const newPerson = {
        name: newName,
        number: newNumber,
        // id: String(persons.length+1),
      }
      // console.log('newPerson ', newPerson);
      servicesPersons
      .createContact(newPerson)
      .then( newPersonCreated => {
        console.log('newPersonCreated: ', newPersonCreated);
        const newPersons = persons.concat(newPersonCreated);
        setPersons(newPersons);
        setShowList(newPersons);
        setNewFilter('');
      }        
      )
      .catch(error => console.log('Request Error: ', error));      
    }else{
      alert(`${newName} is already added to phonebook`);
    }
  };
  
  return (
    <>
      <h2>Phonebook</h2>
      <SearchFilter methodToCall={handleFilterChange} valueText={newFilter} />
      <h2>add a new</h2>
      <Formfields methodToCallName={handleNameChange} valueTextName={newName} 
      methodToCallNumber={handleNumberChange} valueTextNumber={newNumber}
       submitMethod={addContact} />
      <h2>Numbers</h2>
      <Showlist personsArray={showList} />
    </>
  )
}

export default App