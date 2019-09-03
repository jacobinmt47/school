import React,{useState} from 'react';
import './App.css';
const Names= (props) =>{
  const people = props.persons
  const filter = props.filter.toLowerString()
  const fp = people.filter((x) =>x.toLowerString().includes(filter))
  if(typeof(fp =='object')){
    const p2 = fp.map(x =><li key={x.id}>{x.name} {x.phoneNumber}</li>)
    return(p2)
  }
  return('')
}

const  App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456',id:0 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523',id:1 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345',id:2 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122',id:3 }
  ]) 
  const [ newPhone, setNewPhone] = useState('')
  const [ newName, setNewName ] = useState('')
  const [filterName, setFilterName] =useState('')

  const addName = (event) =>{
    event.preventDefault()
    const p ={
      name:newName,
      id:persons.length,
      phoneNumber:newPhone
    }
    const isNew = persons.findIndex((x) => x.name===p.name)
    console.log(isNew)
    if(isNew >=0 ){  //reject existing people
      const astring = `${newName} is already added to phonebook`
      alert(astring)
    }
    else{
      const x = persons.concat(p)
      setPersons(x)
      setNewName('')
    }
  } 
  const handlePersonChange =(event) =>{
    setNewName(event.target.value)
  }
  const handlePhoneChange =(event )=>{
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) =>{
    const newFilterName = event.target.value
    setFilterName(newFilterName)
  }
  
  return (
    <div className="App">
      <h2>Phonebook</h2>
      filter showen with: <input value={filterName} onChange={handleFilterChange} />
      <h2>Add a new </h2>
      <form onSubmit ={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>< br />
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names persons={persons} filter={filterName}  />
    </div>
  );
}

export default App;
