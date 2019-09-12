import axios from 'axios'
const baseurl ="http://localhost:3001/persons"

const getAll =(persons,setPersons) =>{
    console.log("getAll called")
    axios.get(baseurl)
    .then(response =>{
        console.log("promise fullfilled")
        if(persons ===''){
         console.log("empty persons") 
         setPersons(response.data)  
        }
    })
}
//pServices.add(p,persons,setPersons,setNewName,setNewPhone)
const add =(person,persons,setPersons,setNewName,setNewPhone) =>{
    axios.post(baseurl,person)
    .then((response) =>{
        const x = persons.concat(response.data)
        setPersons(x)
        setNewName('')
        setNewPhone('')
    })

}
const del=(person,persons,setPersons) =>{
    axios.delete(baseurl+"/"+person.id)
    .then(response =>{
        console.log(response)
        let p = persons.filter(x =>x.id !== person.id)
        setPersons(p)
    })
}
const update=(person,persons,setPersons,setNewName,setNewPhone) =>{
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
}
export default{getAll,add,del,update}