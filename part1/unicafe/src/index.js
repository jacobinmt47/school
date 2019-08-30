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
            <><br />
            No feedback given 
            </>
        )
    }
    return (
        <ul>
        <li>good  {props.good}</li>
        <li>neutral {props.neutral}</li>
        <li>bad {props.bad}</li> 
        <li>{All(props)}</li>
        <li>{Average(props)}</li>
        <li>{Positive(props)}</li>
        </ul>
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
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));
