import { useState } from 'react'

const ContactList = (props) => {
  const contacts = props.persons

  return (
    <>
      {contacts.map(contact =>
        <p key={contact.name}>{contact.name} {contact.number}</p>)
      }
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: '',
      number: '' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // store the new name
  const handleNameOp = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value)
  }
  const handleNumOp = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  // add the name 2 the persons array
  const addNameOp = (event) => {
    event.preventDefault()
    const condObj = persons.find(person => person.name === newName)
    if(condObj) {
      // window.alert(`${newName} is already added to phonebook`)
      return null
    }
    // setPersons(persons.concat(personObj))
    const newPersonName = newName
    return newPersonName
  }

  const addNumOp = (event) => {
    event.preventDefault()
    const condObj = persons.find(person => person.number === newNumber)
    if(condObj) {
      // window.alert(`${newNumber} already exists`)
      return null
    }
    const newPersonNumber = newNumber
    return newPersonNumber
  }

  const add2Phone = (event) => {
    event.preventDefault()
    const addingName = addNameOp(event)
    const addingNumber = addNumOp(event)
    setNewName('')
    setNewNumber('')
    if(addingName && addingNumber) {
      const newPersonObj = {
        name : addingName,
        number : addingNumber
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
      <ContactList persons={persons}/>
    </div>
  )
}

export default App