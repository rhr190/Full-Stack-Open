import { useState } from 'react'

const ContactList = (props) => {
  const contacts = props.persons
  const filterString = props.filterString

  if(filterString === ''){
    return (
      <>
        {contacts.map(contact =>
          <p key={contact.id}>{contact.name} {contact.number}</p>)
        }
      </>
    )
  }
  else {
    const filteredList = contacts.filter(contact => contact.name.toLowerCase().includes(filterString.toLowerCase()))
    return (
      <>
        {filteredList.map(contact =>
          <p key={contact.id}>{contact.name} {contact.number}</p>)
        }
      </>
    )
  }

}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  // store the new name
  const handleNameOp = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value)
  }

  // store the new number
  const handleNumOp = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  // search for name with keyword
  const searchNameOp = (event) => {
    setFilterName(event.target.value)
  }

  // validate the stored name
  const addNameOp = (event) => {
    event.preventDefault()
    const condObj = persons.find(person => person.name === newName)
    if(condObj) {
      // window.alert(`${newName} is already added to phonebook`)
      return null
    }
    // setPersons(persons.concat(personObj))
    return newName
  }
  
  // validate the stored number
  const addNumOp = (event) => {
    event.preventDefault()
    const condObj = persons.find(person => person.number === newNumber)
    if(condObj) {
      // window.alert(`${newNumber} already exists`)
      return null
    }
    return newNumber
  }

  const add2Phone = (event) => {
    event.preventDefault()
    const addingName = addNameOp(event)
    const addingNumber = addNumOp(event)
    setNewName('')
    setNewNumber('')
    const size = persons.length;
    if(addingName && addingNumber) {
      const newPersonObj = {
        name : addingName,
        number : addingNumber,
        id : size + 1
      }
      setPersons(persons.concat(newPersonObj))
    }
    else {
      window.alert(`${addingName} or ${addingNumber} already exists or you're providing invalid value`)
      return
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input defaultValue={filterName} onChange={searchNameOp}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={add2Phone}>
        <div>
          name: <input defaultValue={newName} onChange={handleNameOp}/>
        </div>
        <div>number: <input defaultValue={newNumber} onChange={handleNumOp} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ContactList persons={persons} filterString={filterName}/>
    </div>
  )
}

export default App