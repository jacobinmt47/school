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
  const cntry = props.cntry
  const filter = props.filter.toLowerCase()
  //console.log(Array.isArray(cntry,"is array countries"))
  if(Array.isArray(cntry)){
    console.log("arrayed called")
    const d = cntry.map(x =>x.name.toLowerCase())
    const fc =d.filter(x =>x.includes(filter))
    const c = fc.map(x =><li key={x}>{x}</li>)
    return(
      <>
      {c}
      </>
    )
  }
  
return(
    <>
    </>
  )
}
const App = () =>{
  const[countries,setCountries] =useState('')
  const[filter,setFilter] = useState('')

  useEffect(()=>{
   // const url = "http://restcountries.eu/rest/v2/all"
    const url ="http://localhost:3001/countries"
   console.log("Effect called")
    axios.get(url ).then(
      (response)=>{
        console.log("promise kept --")
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
