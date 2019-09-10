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
//pServices.add(person,setPersons,setNewName,setNewPhone)
const add =(person,persons,setPersons,setNewName,setNewPhone) =>{
    axios.post(baseurl,person)
    .then((response) =>{
        const x = persons.concat(response.data)
        setPersons(x)
        setNewName('')
        setNewPhone('')
    })

}
export default{getAll,add}