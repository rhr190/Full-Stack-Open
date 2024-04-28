// console.log('hello world')

// const http = require('http')

/*
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text-plain'})    // define response header
    response.end('Hello World')                                 // define response body
})
*/

const express = require('express')
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.post('/api/notes', (request, response) => {
    const note = request.body
    console.log(note)
    response.json(note)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)    
    if(note) response.json(note)
    else {
        response.statusMessage = "The resource does not exist."        
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    
    response.status(204).end()
})

/*
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})
*/

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
