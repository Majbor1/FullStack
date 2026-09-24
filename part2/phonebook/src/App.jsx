import { use, useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('new person')
  const [newNumber, setNewNumber] = useState('new number')
  const [filter, setFilter] = useState('')

  
    
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    if(persons.map((name) => name.name).includes(personObject.name)){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  const filterPeople = persons.filter((name) => name.name.toLowerCase().startsWith(filter.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filterPeople.map((person) => <p key={person.id}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App