import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const All = (props) =>{
    let total = props.good + props.neutral + props.bad;
    return(
        <> total {total}</>
    )
}

const Average = (props) =>{
    let positive = props.good - props.bad;
    let total = props.good + props.neutral + props.bad ;
    return (
        <>average {positive/total}</>
    )
}
const Positive = (props) =>{
    let p = props.good ;
    let total = props.good + props.neutral + props.bad ;
    return (
        <>positive {(p/total)*100 +"%"}</>
    )
}

const Statistics =(props) =>{
    if(props.good === 0 && props.neutral === 0 && props.bad === 0 ){
        return(
            <> 
            </>
        )
        // no feedback to display
    }
    return (
        <>
        if(props.type==="good"){<li>props.good</li>}
        if(props.type==="neutral"){<li>props.neutral</li>}
        if(props.type==="bad"){<li>props.bad</li>}
        if(props.type==="average"){<li>{Average(props)}</li>}
        if(props.type==="all"){<li>{All(props)}</li>}
        if(props.type==="positive"){<li>{Positive(props)}</li>}
        </>
    )
    }
const Button = (props) =>{

    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
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
        <Button handleClick={setG} text="good" />
        <Button handleClick={setN} text="neutral" />
        <Button handleClick={setB} text="bad" />
        <h1>statistics</h1>
        <ul>
        <Statistics good={good} neutral={neutral} bad={bad} type="good" />
        <Statistics good={good} neutral={neutral} bad={bad} type="neutral" />
        <Statistics good={good} neutral={neutral} bad={bad} type="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} type="all" />
        <Statistics good={good} neutral={neutral} bad={bad} type="average" />
        <Statistics good={good} neutral={neutral} bad={bad} type="positive" />
        </ul>
    </div>
    
)
}

ReactDOM.render(<App />, document.getElementById('root'));
