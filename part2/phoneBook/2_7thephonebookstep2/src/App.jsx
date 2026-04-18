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
    console.log('persons: ', persons);
    // console.log('newPerson ', newPerson);
    // console.log('includes: ', persons.includes(newPerson.name));
    // console.log('longitud array', persons.filter(person => person.name === newName).length);
    if(!persons.filter(person => person.name === newName).length){
      const newPerson = {
        name: newName
      }      
      const newPersons = persons.concat(newPerson);
      setPersons(newPersons);
    }else{
      alert(`${newName} is already added to phonebook`);
    }
/*     const namesArray = persons.map((person) => person.name);
    console.log('namesArray', namesArray);
    // console.log('indice: ', namesArray.indexOf(newName));
    if(namesArray.indexOf(newName) === -1){
      const newPerson = {
        name: newName
      }      
      const newPersons = persons.concat(newPerson);
      setPersons(newPersons);
    }else{
      alert(`${newName} is already added to phonebook`);
    } */
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
    </>
  )
}

export default App
