import { useState } from 'react'
import { SearchFilter } from './components/Searchfilter';
import { Showlist } from './components/Showlist';
import { Formfields } from './components/Formfields';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [showList, setShowList] = useState(persons);
  
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
        id: persons.length+1,
      }
      // console.log('newPerson ', newPerson);
      const newPersons = persons.concat(newPerson);
      setPersons(newPersons);
      setShowList(newPersons);
      setNewFilter('');
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
