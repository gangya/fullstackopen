import { useState, useEffect } from 'react'
import { SearchFilter } from './components/Searchfilter';
import { Showlist } from './components/Showlist';
import { Formfields } from './components/Formfields';
import servicesNotes from './services/services'

function App() {
  // const [urldb, setUrlDB] = useState('http://localhost:3001/persons');
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [showList, setShowList] = useState([]);

  const listHook = () => {
    servicesNotes
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
      servicesNotes
      .createContact(newPerson)
      .then( newPersonCreated => {
        // console.log('newPersonCreated: ', newPersonCreated);
        const newPersons = persons.concat(newPersonCreated);
        setPersons(newPersons);
        setShowList(newPersons);
        // setNewFilter('');
        alert(`${newPerson.name} was added to phonebook`);
      }        
      )
      .catch(error => console.log('Request Error: ', error));      
    }else{
      //alert(`${newName} is already added to phonebook`);
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)){
        const newPerson = persons.find(person => person.name === newName);
        const oldPerson = {... newPerson, number: newNumber};
        servicesNotes
        .updateContact(oldPerson)
        .then( updatedContact => {
          // console.log('response updateContact: ', updatedContact);
          // console.log('oldPerson.id: ', oldPerson.id, 'oldPerson.number: ', oldPerson.number);          
          const newShowList = persons.map(person => person.id === oldPerson.id?updatedContact:person);
          // console.log('newShowList updateContact: ', newShowList);
          setPersons(newShowList);
          setShowList(newShowList);
          alert(`${newName} is already added on phonebook, number was updated`);
        }          
        )
        .catch(error => console.log('Request Error: ', error))        
      }else{
        alert(`${newName} is already added on phonebook, number was not updated`);
      }
    }
  };

  const deleteContact = (personId, persoName) => {
    // console.log(`On delete contact personId: ${personId}`);
    if(window.confirm(`Do you want to delete contact ${persoName}?`)){
      // console.log(`Delete contact ${persoName}?`);
      servicesNotes
      .deleteContact(personId)
      .then( response => {
        // listHook();
        const newShowList = persons.filter(person => person.id !== personId);
        setPersons(newShowList);
        setShowList(newShowList);
        alert(`Contact ${persoName} deleted`);
        console.log('Contact deleted: ', response);
      }                
      )
      .catch(error => console.log('Request Error: ', error))
    }else{
      console.log(`Keep contact ${persoName}`);
      alert(`Keep contact ${persoName}`);
    }
  } 
  
  return (
    <>
      <h2>Phonebook</h2>
      <SearchFilter methodToCall={handleFilterChange} valueText={newFilter} />
      <h2>add a new</h2>
      <Formfields methodToCallName={handleNameChange} valueTextName={newName} 
      methodToCallNumber={handleNumberChange} valueTextNumber={newNumber}
       submitMethod={addContact} />
      <h2>Numbers</h2>
      <Showlist personsArray={showList} methodToCallList={deleteContact} />
    </>
  )
}

export default App