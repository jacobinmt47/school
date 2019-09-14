import axios from 'axios'
const baseurl ="http://localhost:3001/persons"

const getAll =(persons,setPersons,setErrorMsg) =>{
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
          setErrorMsg(error)
        })
}
//pServices.add(p,persons,setPersons,setNewName,setNewPhone)
const add =(person,persons,setPersons,setNewName,setNewPhone,setErrorMsg) =>{
    axios.post(baseurl,person)
    .then((response) =>{
        const x = persons.concat(response.data)
        setPersons(x)
        setNewName('')
        setNewPhone('')
    })
    .catch(error =>
        {console.log(error)
            setErrorMsg(error)
        })

}
const del=(person,persons,setPersons,setErrorMsg) =>{
    axios.delete(baseurl+"/"+person.id)
    .then(response =>{
        console.log(response)
        let p = persons.filter(x =>x.id !== person.id)
        setPersons(p)
    })
    .catch(error =>
        {console.log(error)
        setErrorMsg(error)})
}

const update=(person,persons,setPersons,setNewName,setNewPhone,setErrorMsg) =>{
//console.log(person)//log person to be updated
const p = persons.filter(x=>x.name === person.name) // used to get id of old person
//console.log(p[0]) 
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
})
.catch(error =>
    {console.log(error)
    setErrorMsg(error)
    })

}
export default{getAll,add,del,update}