import React,{useState} from 'react';
import './App.css';

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
