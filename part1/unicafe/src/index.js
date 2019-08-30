import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () =>{
const [good,setGood] = useState(0)
const [neutral,setNeutral] = useState(0)
const [bad,setBad] = useState(0)

// callback handlers
const setG = () => {
    return ( setGood(good +1))
}
const setN = () => {
    return(setNeutral(neutral +1))
}
const setB = () =>{
    return (setBad(bad +1))
}


return(
    <div>
        <h1>Give Feedback</h1><br />
        <button onClick={setG}>good</button>
        <button onClick={setN}>neutral</button>
        <button onClick={setB}>bad</button><br />
        <h1>statistics</h1>
        <ul>
            <li>good  {good}</li>
            <li>neutral {neutral}</li>
            <li>bad {bad}</li>
        </ul>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));
