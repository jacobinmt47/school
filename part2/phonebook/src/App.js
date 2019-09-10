import React,{useState, useEffect} from 'react';
import pServices from './services/person'
import './App.css';

const Names = (props) =>{
  const people = props.persons
  const filter = props.filter.toLowerCase()
  if(Array.isArray(people)){
  const fp = people.filter((x) =>x.name.toLowerCase().includes(filter))
  if(typeof(fp ==='object')){ //if empty fp is undefined
    const p = fp.map(x =><li key={x.id}>{x.name} {x.phoneNumber} <button id={x.id} onClick={props.onClick}>delete</button></li>)
    return(p)
  }
}
  return('')
}
const PhoneFilter =(props) =>{
  //console.log(props)
  return(
    <>
      filter showen with: <input value={props.filterName} onChange={props.handleFilterChange} />
    </>
  )
}

const PersonForm =(props) =>{
 // console.log(props)
  return(
    <form onSubmit ={props.addName}>
    <div>
      name: <input value={props.newName} onChange={props.handlePersonChange}/>< br />
      number: <input value={props.newPhone} onChange={props.handlePhoneChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}


const  App = () => {
  
  const [ persons, setPersons] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [ newName, setNewName ] = useState('')
  const [filterName, setFilterName] =useState('') 
  useEffect(() =>{
    console.log("effect called")
   pServices.getAll(persons,setPersons)

  },[persons]
  )
  const addName = (event) =>{
    console.log("add Name Called ")
    event.preventDefault()
    const p ={
      name:newName,
      id:persons.length,
      phoneNumber:newPhone
    }
    const isNew = persons.findIndex((x) => x.name===p.name)
    //console.log(isNew)
    if(isNew >=0 ){  //reject existing people
      const astring = `${newName} is already added to phonebook`
      alert(astring)
    }
    else{
      pServices.add(p,persons,setPersons,setNewName,setNewPhone)
    }
  } 
  const handlePersonChange =(event) =>{
    setNewName(event.target.value)
  }
  const handlePhoneChange =(event )=>{
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) =>{
    setFilterName( event.target.value)
  }
  const handleClick =(event) =>{
    console.log(event.target.id)
    const id =event.target.id
    let r = window.confirm("do you want to delete")
    console.log(r)
    if(r){
      //find person and delete
      if(Array.isArray(persons)){
         let p = persons.filter((x) =>x.id===Number(id))
         console.log('delete',p)
         pServices.del(p[0])
    }
  }
  }
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <PhoneFilter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>Add a new </h2>
      <PersonForm  
      addName={addName} newName={newName} newPhone={newPhone} handlePersonChange={handlePersonChange} handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Names persons={persons} filter={filterName} onClick={handleClick } />
    </div>
  );
}

export default App;