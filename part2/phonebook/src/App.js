import React,{useState} from 'react';
import './App.css';
const Names= (props) =>{
  const people = props.persons
  const p = people.map(x =><li key={x.id}>{x.name}</li>)
  return(p)
}

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id:0
    }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    const p ={
      name:newName,
      id:persons.length
    }
    console.log(p)
    const x = persons.concat(p)
    setPersons(x)
    setNewName('')
  } 
  const handlePersonChange =(event) =>{
    setNewName(event.target.value)
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit ={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names persons={persons}  />
    </div>
  );
}

export default App;
