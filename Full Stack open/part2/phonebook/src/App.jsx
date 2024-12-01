import { useState, useEffect} from 'react'
import Filter from './fliter'
import PersonForm from "./personform"
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')

  useEffect(() =>{
    console.log('effect')

    const promise = axios.get('http://localhost:3001/persons')

    const eventHandler = response =>{
      console.log('promise fulfilled')
      setPersons(response.data)
    }

    promise.then(eventHandler)
  },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const addNameNumber = (event) =>{
    event.preventDefault()
    
    const nameExists = persons.some(x => x.name === newName)
   
    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };

    if (nameExists){
      const person = persons.find(x => x.name === newName)
      if (confirm(`${newName} is already added to phonebook, 
      replace the old number with a new one?`)){
        personsService
          .update(person.id,newPerson)
          .then(response =>{
            setPersons(persons.map(x => x.id === person.id ? response.data : x))
          })
      }

    }else{
      personsService.create(newPerson).then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deletePerson = (person) =>{
    if (confirm('Delete ' + person.name)){
      personsService.deleteEntries(person.id).then(response => {
        console.log('deleted', response.data)
        const newPersons = persons.filter(x => x.id != person.id)
        setPersons(newPersons)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} persons = {persons}></Filter>
      <h2>add a new</h2>
      <PersonForm addNameNumber= {addNameNumber} handleNameChange={handleNameChange} newName={newName} newNumber={newNumber} handleNumberChange= {handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      {persons.map(x => {
        return <div key = {x.id}>
          <p>{x.name + ' ' + x.number} <button onClick={(event) => deletePerson(x)}>Delete</button></p>
        </div>
      })}
    </div>
  )
}

export default App