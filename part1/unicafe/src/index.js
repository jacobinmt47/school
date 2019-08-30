import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const All = (props) =>{
    let total = props.good + props.neutral + props.bad;
    return(
        <li> total {total}</li>
    )
}

const Average = (props) =>{
    let positive = props.good - props.bad;
    let total = props.good + props.neutral + props.bad ;
    return (
        <li>average {positive/total}</li>
    )
}
const Positive = (props) =>{
    let p = props.good ;
    let total = props.good + props.neutral + props.bad ;
    return (
        <li>positive {(p/total)*100 +"%"}</li>
    )
}


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
            <All good={good} neutral={neutral} bad={bad} />
            <Average good={good} neutral={neutral} bad={bad} />
            <Positive good={good} neutral={neutral} bad={bad} />
        </ul>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));
