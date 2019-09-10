import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
const Wxicon =(props) =>{
  let wxc =""
  let wxi =""
  if(typeof(props.c)==="object"){
    wxc = props.c.text
    wxi = props.c.icon
  }
  return(
    <>
    {wxc}
    <img alt="weather icon" src={wxi} />
    </>
  )
}
const Weather =(props) =>{
  const city = props.city
  const setWx =props.setWx
  const apixu_key ="ca7e19b41ebf477fb8a174631190909"
  const base_url ="http://api.apixu.com/v1/current.json"
  console.log(city,"--weather--")
  let url = base_url+"?key="+apixu_key+"&q="+city
  axios.get(url).then(
    (response) =>{
      setWx(response.data.current)
    }
  )
  return(
    <>
    <h2>weather for {city}</h2>
      <li>Temperture in fahrenheit:  {props.wx.temp_f}</li>
      <li>precip  {props.wx.precip_in}</li>
      <li><Wxicon c={props.wx.condition} /></li>
    </>
  )
}

const Search =(props) =>{
  return(
    <>
    <form>
      <input value={props.filterName} onChange={props.handleFilterChange}/>
    </form>
    </>
  )
}

const Lang =(props) =>{
  const l = props.languages
  const ns =l.map(x=><li key={x.name}>{x.name}</li>)
  console.log(ns)
  return(
    <ul>
    {ns}
    </ul>
  )
}
const Country =(props) =>{
  const cntry = props.cntry
  const filter = props.filter
    const y = cntry.filter(x =>x.name.toLowerCase().includes(filter))
    console.log(y)
    return(
      <div>
      <h2>{y[0].name} </h2><br />
      capital: {y[0].capital} <br />
      population: {y[0].population} <br />
      <Lang languages={y[0].languages} />
      flag: {y[0].flag} <br />
      <img id ="img" src={y[0].flag} alt="flag of country" />
      <Weather city={y[0].capital} setWx={props.setWx} wx={props.wx}/>
      </div>
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
    const c = fc.map(x =><div key={x+"key"}><li key={x}>{x}</li><button key={x+"btn"} id={x} onClick={props.btnclick}>show</button></div>)
    if(c.length ===1){
    return(
      <Country key="cntry1" cntry={cntry} filter={filter} setWx={props.setWx} wx={props.wx}/>
    )
    }
    if(c.length >10){
      return(
        <>
        To many matchs specifiy another filter
        </>
      )
    }
    return(
      <div id="cnt2">
      {c}
      </div>
    )
  }
return(
    <>
    </>
  )
}
const App = () =>{
  const[countries,setCountries] = useState('')
  const[filter,setFilter] = useState('')
  const[wx,setWx] = useState('')

  useEffect(()=>{
    const url = "http://restcountries.eu/rest/v2/all"
    //const url ="http://localhost:3001/countries"
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
  const handleButtonPressed = (event)=> {
    const btn = event.target
    console.log(btn.id)
    setFilter(btn.id)
  }
const handleWxChange = (event) =>{
  console.log(event)
  setWx(event)
}

  
  return (
    <div key="div1"> 
      <Search key="search" filterName ={filter} handleFilterChange={handleFilterChange} />
      <ul key="ol1">
      <Countries key ="countries1" cntry ={countries} filter={filter} btnclick={handleButtonPressed}  setWx={handleWxChange} wx={wx}/>
      </ul>
    </div>
  );
}
export default App;
