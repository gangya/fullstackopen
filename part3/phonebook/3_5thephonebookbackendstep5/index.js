const express = require('express');
const app = express();
app.use(express.json());

let persons = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];

app.get('/', (request, response) => {
  response.send('<h1>3.5 Phonebook backend step 5</h1>');
})

app.get('/api/persons', (request, response) => {
  response.json(persons);
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  if(!id){
    return response.status(400).json({"error":"Bad request"});
  }
  const person = persons.find(person => person.id === id);
  if(!person){
    return response.status(404).json({"error":"Not found"});
  }
  response.json(person);
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;  
  if(!id){
    return response.status(400).json({"error":"Bad request"});
  }
  const person = persons.find(person => person.id === id);
  if(!person){
    return response.status(404).json({"error":"Not found"});
  }
  persons = persons.filter(person => person.id !== id );
  response.json(person);
})

const generateId = () => {
  return String(newId = Math.floor(Math.random()*1000000000))
}

const createPerson = (body) => {
  return (
    {
      "id": generateId(),
      "name": body.name,
      "number": body.number
    }
  )
}

app.post('/api/persons/', (request, response) => {
  const body = request.body; 
  // console.log('body ', body);   
  if(!body){
    return response.status(400).json({"error":"Bad request"});
  }
  const person = createPerson(body);
  if(!person){
    return response.status(400).json({"error":"No able to create person"});
  }
  persons = persons.concat(person);
  response.json(person);
})

app.get('/api/info', (request, response) => {
  let infoResponse = `<p>Phonebok has info for ${persons.length} people</p> <p>${Date()}</p>`;
  response.send(infoResponse);
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
})