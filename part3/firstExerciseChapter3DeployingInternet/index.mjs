import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

const app = express();
app.use(express.json());
app.use(cors());
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));

app.get('/', (request, response) => {
  response.send('<h1>Express Hello World with --watch flag!</h1>');
})

app.get('/api/notes', (request, response) => {
  response.json(notes);
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  const note = notes.find( note => note.id === id );  
  if(!note){
    // response.send(`<h1>There is not note like ${id} in database</h1>`);
    response.status(404).end();
  }else{
    response.json(note);
  }  
})

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  notes = notes.filter(note => note.id !== id);
  response.status(204).send();
})

// It's to parse json that comes in body request
app.use(express.json());

const generateID = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(note => Number(note.id))) : 0; 
  return String(maxId + 1)
}

const createNoteNode = (note) => {
  return (
    {
      "id" : generateID(),
      "content": note.content,
      "important": note.important || false,
    }
  )
}

app.post('/api/notes', (request, response) => {
 const body = request.body
//  console.log('body ', body);
  if(!body){
    return response.status(400).json({
      "error": "content missing"
    })
  }
  const note = createNoteNode(body);
  // console.log('newNote in app.post: ', note);
  notes = notes.concat(note);
  response.json(note);
})

app.put('/api/notes/:id', (request, response) => {
  const id = request.params.id; 
  const body = request.body
  console.log('id: ', id);
  const idIndex = notes.findIndex(note => note.id === id);
  console.log('idIndex: ', idIndex);
  notes[idIndex].important = !notes[idIndex].important; 
  response.json(body);  
})

const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})