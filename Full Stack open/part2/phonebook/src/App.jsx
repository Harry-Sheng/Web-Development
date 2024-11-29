import { useState } from 'react'
import Filter from './fliter'
import PersonForm from "./personform"
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')
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

    if (nameExists){
      alert(`${newName} is already added to phonebook`)
    }else{
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(newPerson));
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} persons = {persons}></Filter>
      <h2>add a new</h2>
      <PersonForm addNameNumber= {addNameNumber} handleNameChange={handleNameChange} newName={newName} newNumber={newNumber} handleNumberChange= {handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      {persons.map(x => <p key = {x.id}>{x.name + ' ' + x.number}</p>)}
    </div>
  )
}

export default App