import axios from 'axios'
const baseurl ="/api/persons"

const getAll = (persons,setPersons,setErrorMsg) =>{
    console.log("getAll called")
    axios.get(baseurl)
    .then(response =>{
        console.log("promise fullfilled")
        if(persons ===''){
         console.log("empty persons") 
         setPersons(response.data)  
        }
    })
    .catch(error =>
        {console.log(error)
          setErrorMsg('get all failed')
        })
}

const add = (person,persons,setPersons,setNewName,setNewPhone,setErrorMsg) =>{
    const successMsg ='success '+person.name+' added'
    axios.post(baseurl,person)
    .then((response) =>{
        const x = persons.concat(response.data)
        setPersons(x)
        setNewName('')
        setNewPhone('')
        setErrorMsg(successMsg)
    })
    .catch(error =>
        {console.log(error)
            setErrorMsg('add failed')
        })

}
const del=(person,persons,setPersons,setErrorMsg) =>{
    const setp = () => {
        let p = persons.filter(x =>x.id !== person.id)
        setPersons(p)
        setTimeout(()=>{setErrorMsg(null)},5000)
    }
    axios.delete(baseurl+"/"+person.id)
    .then(response =>{
        console.log(response)
        setp()
    })
    .catch(error =>
        {
        console.log(error)
        setErrorMsg(person.name+' is already deleted')
        setp()
    })
        
}

const update=(person,persons,setPersons,setNewName,setNewPhone,setErrorMsg) =>{
const p = persons.filter(x=>x.name === person.name) // used to get id of old person
let pNew = p[0]
pNew.phoneNumber =person.phoneNumber
let np = persons.filter(x =>x.id !== p[0].id)
np = np.concat(pNew)
console.log(pNew)
setPersons(np)
setNewName('')
setNewPhone('')
axios.put(baseurl+"/"+pNew.id,pNew)
.then(response =>{
    console.log(response)
    setErrorMsg('success '+p[0].name+' updated')
})
.catch(error =>
    {console.log(error)
    setErrorMsg('update failed')
    })

}
export default{getAll,add,del,update}