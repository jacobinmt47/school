import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const all = (good,neutral,bad) =>{
    let total = good + neutral +bad;
    return(total)
}

const average = (good,neutral,bad) =>{
    let positive = good - bad;
    let total = good + neutral +bad ;
    return (positive/total)
}

const positive = (good,neutral,bad) =>{
    let p = good ;
    let total = good + neutral + bad ;
    return ((p/total)*100 +"%")
}

const Statistics =(props) =>{
    if(props.show === 0){
        return(<></>)
    }
 return (
        <tr>
           <td>{props.text}</td><td>{ props.value}</td>
        </tr>
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
const [showStats,setShowStats] =useState(0)
// callback handlers
const setG = () => {
    setShowStats(1)
    return ( setGood(good +1))
}
const setN = () => {
    setShowStats(1)
    return(setNeutral(neutral +1))
}
const setB = () =>{
    setShowStats(1)
    return (setBad(bad +1))
}


return(
    <div>
        <h1>Give Feedback</h1><br />
        <Button handleClick={setG} text="good" />
        <Button handleClick={setN} text="neutral" />
        <Button handleClick={setB} text="bad" />
        <h1>statistics</h1>
        <table><tbody>
        <Statistics text="good" value={good} show={showStats}/>
        <Statistics text="neutral" value={neutral} show={showStats}/>
        <Statistics text="bad" value={bad} show={showStats} />
        <Statistics text="total" value={all(good,neutral,bad)} show={showStats} />
        <Statistics text="average" value={average(good,neutral,bad)} show={showStats} />
        <Statistics text="positive" value={positive(good,neutral,bad)} show={showStats} />
        </tbody>
        </table>
    </div>
    
)
}

ReactDOM.render(<App />, document.getElementById('root'));
