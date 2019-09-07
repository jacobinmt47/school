import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

App = () =>{
  const[contries,setCountries] =useState(0)

  useEffect(()=>{
    console.log("Effect called")
    axios.get("http://restcountries.eu/rest/v2/all").then(
      (response)=>{
        console.log(response.data,"promise kept --")
        setCountries(response.data)
      }
    )
  },[])

  return (
    <div>
    </div>
  );
}

export default App;
