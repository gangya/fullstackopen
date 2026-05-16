const express = require('express');
const morgan = require('morgan');
const app = express();

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

app.use(express.json());
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.get('/', (request, response) => {
  // console.log('request: ', request);
  response.send('<h1>3.8 Phonebook backend step 8</h1>');
})

app.get('/api/info', (request, response) => {
  let infoResponse = `<p>Phonebok has info for ${persons.length} people</p> <p>${Date()}</p>`;
  response.send(infoResponse);
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
  return response.json(person);
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
  if(!body.name || !body.number){
    return response.status(400).json({"error":"The name or number is missing"});
  }
  if(persons.find(person => person.name === body.name)){
    return response.status(400).json({"error":"name must be unique"});
  }
  const person = createPerson(body);
  if(!person){
    return response.status(400).json({"error":"No able to create person"});
  }
  persons = persons.concat(person);
  response.json(person);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
})