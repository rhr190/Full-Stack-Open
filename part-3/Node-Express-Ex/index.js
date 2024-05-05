const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

morgan.token('postData', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'))

/*
const requestLogger = (request, response, next) => {
      console.log('Method:', request.method)
      console.log('Path:  ', request.path)
      console.log('Body:  ', request.body)
      console.log('---')
      next()
}
*/
// app.use(requestLogger)

let contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const generateId = () => {
    const startId = contacts.length > 0
    ? Math.max(...contacts.map(n => n.id))
    : 0
    
    const endId = 10000
    
    return (Math.floor(Math.random() * (endId - startId) + startId) + 1)
}

app.get('/', (request, response) => {
    response.send('<h1>Start of Phonebook Exercise.</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(contacts)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = contacts.filter(contact => contact.id === id)
    if(person.length === 1) response.json(person)
    else {
        response.status(404).end()
    }
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    if(!body.name || !body.number) {
        return response.status(400).json({
            error : 'Information missing!'
        })
    }
    const matches = contacts.filter(contact => contact.name === body.name)
    if (matches.length >= 1) {
        return response.status(400).json({
            error: 'name must be unique'        
        })
    }
    const contact = {
        id : generateId(),
        name : body.name,
        number : body.number,
    }
    contacts = contacts.concat(contact)

    response.json(contacts)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    prevLen = contacts.length
    contacts = contacts.filter( contact => contact.id !== id)
    currLen = contacts.length
    if(prevLen !== currLen) {
        response.status(204).end()
    }
    else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    const currDate = new Date()
    response.send(`<p>Phonebook has info for ${contacts.length} people <br> ${currDate} </p>`)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
