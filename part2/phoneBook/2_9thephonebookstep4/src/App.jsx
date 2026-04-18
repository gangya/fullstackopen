import { useState } from 'react'

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
    // const newShowList = persons.filter((person) => person.name.toLowerCase().includes(textFilter.toLowerCase()));
    // setShowList(newShowList);
    setShowList(persons.filter((person) => person.name.toLowerCase().includes(textFilter.toLowerCase())));
    // console.log('newFilter.toUpperCase(): ', newFilter.toUpperCase());
/*     console.log('list to Show', persons.filter((person) => {
      console.log('comparison: ', person.name.toLowerCase().includes(textFilter.toLowerCase())

    )})) */
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
        id: String(persons.length+1),
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
        <div>
          filter shown with: <input onChange={handleFilterChange} value={newFilter} />
        </div>      
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>        
        {/* <div>debug: {newName}</div> */}
        <div>
          <button type="submit" onClick={addContact} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}     */}
      {showList.map(person => <p key={person.id}>{person.name} {person.number}</p>)} 
    </>
  )
}

export default App
