import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

const Search =(props) =>{
  return(
    <>
    <form>
      <input value={props.filterName} onChange={props.handleFilterChange}/>
    </form>
    </>
  )
}

const Countries =(props) =>{
  const cntry = props.countries
  const filter = props.filter
  console.log(cntry)
  if(typeof(cntry) ==='undefined'){
    return(<>
    space holding
    </>)}
  const c = cntry.Map(x =><li>{x.name}</li>)
  return(
    <>
    {c}
    </>
  )
}
const App = () =>{
  const[countries,setCountries] =useState('')
  const[filter,setFilter] = useState('')

  useEffect(()=>{
   // const url = "http://restcountries.eu/rest/v2/all"
    const url ="http://localhost:3001/"
   console.log("Effect called")
    axios.get(url ).then(
      (response)=>{
        console.log("promise kept --",response.data)
        setCountries(response.data)
      }
    )
  },[])

  const handleFilterChange = (event) =>{
    setFilter(event.target.value)
  }
  
  return (
    <div>
      <Search filterName ={filter} handleFilterChange={handleFilterChange} />
      <ol>
      <Countries cntry ={countries} filter={filter} />
      </ol>
    </div>
  );
}

export default App;
