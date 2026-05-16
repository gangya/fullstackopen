const express = require('express');
const app = express();

const persons = [
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

app.get('/', (request,response) => {
    response.send('<h1>3.2 Phonebook backend step 2</h1>');
})

app.get('/api/persons', (request,response) => {
    response.json(persons);
})

app.get('/api/info', (request,response) => {
  let infoResponse = `<p>Phonebok has info for ${persons.length} people</p> <p>${Date()}</p>`;
  response.send(infoResponse);
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})