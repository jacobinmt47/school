import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () =>{
const [good,setGood] = useState(0)
const [neutral,setNeutral] = useState(0)
const [bad,setBad] = useState(0)


return(
    <div>
        <h1>Give Feedback</h1><br />
        <button onClick={() =>setGood(good +1)}>good</button>
        <button onClick={() =>setNeutral(neutral +1)}>neutral</button>
        <button onClick={() =>setBad(bad +1)}>bad</button><br />
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
