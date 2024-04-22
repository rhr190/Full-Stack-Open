import { useEffect, useState } from 'react'
import pbService from './services/phonebook'

const empStr = "";

const ContactList = (props) => {
  const contacts = props.persons
  const filterString = props.filterString
  const deleteContact = props.deleteContact
  const deleteId = 'del'

  if(filterString === ''){
    return (
      <>
        {contacts.map(contact =>
          <div>
              <p>{contact.name} {contact.number} <button id={contact.id.toString()} onClick={deleteContact}>Delete</button></p>
          </div>
        )
        }
      </>
    )
  }
  else {
    const filteredList = contacts.filter(contact => contact.name.toLowerCase().includes(filterString.toLowerCase()))
    return (
      <>
        {filteredList.map(contact =>
          <div>
              <p>{contact.name} {contact.number} <button id={contact.id.toString()} onClick={deleteContact}>Delete</button></p>
          </div>
          )
        }
      </>
    )
  }

}

const Filter = (props) => {
  const search = props.searchNameOp
  return (
    <div>filter shown with: <input defaultValue={empStr} onChange={search}/> </div>
  )
}

const PersonForm = (props) => {
  const add = props.add2Phone
  const nameOp = props.handleNameAddOp
  const numOp = props.handleNumAddOp
  return (
    <form onSubmit={add}>
    <div>
      name: <input id='nameField' defaultValue={empStr} onChange={nameOp}/>
    </div>
    <div>number: <input id='numField' defaultValue={empStr} onChange={numOp} /></div>
    <div>
      <button type="submit">add</button>
    </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  // fetch initial phonebook data from server (initDB.json)
  useEffect( 
    () => {
      pbService
      .getAll()
      .then(initialState => {
        setPersons(initialState)
      })
    }
  , [])

  // store the new name
  const handleNameAddOp = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value)
    
  }

  // store the new number
  const handleNumAddOp = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value)
    
  }
 
  // search for name with keyword
  const searchNameOp = (event) => {
    setFilterName(event.target.value)
  }

  // validate the stored name
  const validateNameOp = (event) => {
    event.preventDefault()
    const condObj = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if(condObj) {
      // window.alert(`${newName} is already added to phonebook`)
      return condObj
    }
    // setPersons(persons.concat(personObj))
    return newName
  }
  
  // validate the stored number
  const validateNumOp = (event) => {
    event.preventDefault()
    const condObj = persons.find(person => person.number === newNumber)
    if(condObj) {
      // window.alert(`${newNumber} already exists`)
      return condObj
    }
    return newNumber
  }

  const add2Phone = (event) => {
    event.preventDefault()
    const addingName = validateNameOp(event)
    const addingNumber = validateNumOp(event)
    const addingId = String(persons.length + 1);

    const nameObj = typeof addingName === 'object' &&
    !Array.isArray(addingName) &&
    addingName !== null

    const numObj = typeof addingNumber === 'object' &&
    !Array.isArray(addingNumber) &&
    addingNumber !== null

    const newName = typeof addingName === 'string'
    const newNum = typeof addingNumber === 'string'

    // a contact with same name exists already
    if(nameObj && !numObj) {
        const msg = `${addingName.name} is alrady added. Replace the old number with new one?`
        if(window.confirm(msg)) {
          pbService
            .replaceContact(addingName, addingNumber)
            .then(returnedState => {
              setPersons(
                persons.map(person => {
                  if(person.id === nameObj.id && person.number !== addingNumber){
                      return { ...person, number : addingNumber}
                  }
                  else return person
                })
              )
            })
        }
    } 
    if(newName && newNum) {
      const newPersonObj = {name:addingName, number:addingNumber, id:addingId}
      pbService
        .create(newPersonObj)
        .then(returnedState => {
          setPersons(persons.concat(newPersonObj))
        })
    }
    // else {
    //   window.alert(`${addingName} or ${addingNumber} already exists or you're providing invalid value`)
    // }
    
    document.getElementById('nameField').value = ''
    document.getElementById('numField').value = '' 
  }

  const deleteContact = (event) => {
    event.preventDefault()
    const delId = event.target.id
    const delPerson = persons.find(person => person.id === delId)
    if(delPerson === null) {
      alert("The contact doesn't exist anymore.")
      return
    }
    if(window.confirm(`Delete ${delPerson.name} ?`)) {
      pbService.deleteContact(delId)
      setPersons(persons.filter(person => person.id !== delId))
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchNameOp={searchNameOp} />
      <h2>Add a new</h2>
      <PersonForm add2Phone={add2Phone} handleNameAddOp={handleNameAddOp} handleNumAddOp={handleNumAddOp}/>
      <h2>Numbers</h2>
      <ContactList persons={persons} filterString={filterName} deleteContact={deleteContact}/>
    </div>
  )
}

export default App