import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addContact = (event) => {
    event.preventDefault();
    // console.log('add button clicked');
    const newPerson = {
      name: newName
    }
    const newPersons = persons.concat(newPerson);
    // console.log('newPerson ', newPerson);
    // console.log('newPersons ', newPersons);
    setPersons(newPersons);
  };
  
  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        {/* <div>debug: {newName}</div> */}
        <div>
          <button type="submit" onClick={addContact} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
      {/* {persons.map(person => <br key={person.name} /> {person.name})} */}
    </>
  )
}

export default App
