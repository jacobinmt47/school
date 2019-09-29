import React,{useState, useEffect} from 'react';
import pServices from './services/person'
import Notification from './components/Notification'

// convert to lowercase and return items that match
const Names = (props) =>{
  const people = props.persons
  const filter = props.filter.toLowerCase()
  if(Array.isArray(people)){
  console.log(people)
  console.log(typeof(people[0].name))
  const fp = people.filter((x) =>x.name.toLowerCase().includes(filter))
  if(typeof(fp ==='object')){ //if empty fp is undefined
    const p = fp.map(x =><li key={x.id}>{x.name} {x.phonenumber} <button id={x.id} onClick={props.onClick}>delete</button></li>)
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
  const [filterName, setFilterName] = useState('') 
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() =>{
    console.log("effect called")
   pServices.getAll(persons,setPersons,setErrorMsg)

  },[persons]
  )
  const addName = (event) =>{
    console.log("add Name Called ")
    event.preventDefault()
    const p ={
      name:newName,
      id:Math.floor(Math.random()*4000000000),
      phonenumber:newPhone
    }
    console.log(p)
    const isNew = persons.findIndex((x) => x.name===p.name)
    console.log(isNew)
    if(isNew >=0 ){  
      const astring = `${newName} update phone number?`
      const changePhoneNumber = window.confirm(astring)
      if(changePhoneNumber){
        pServices.update(p,persons,setPersons,setNewName,setNewPhone,setErrorMsg)
      }
      
    }
    else{
      pServices.add(p,persons,setPersons,setNewName,setNewPhone,setErrorMsg)
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
    const id =event.target.id
    console.log(id,'  ',typeof(id))
    const r = window.confirm("do you want to delete")
    if(r){
      //find person and delete
      if(Array.isArray(persons)){
         const p = persons.filter((x) =>x.id===id)
         console.log('delete',p)
         pServices.del(p[0],persons,setPersons,setErrorMsg)
         
    }
  }
  }
  return (
    <div className="App">
      <Notification error ={errorMsg} />
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