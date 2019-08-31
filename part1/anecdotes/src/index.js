import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const Button = (props) =>{
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Votes = (props) => {
  if(props.votes ===1){
    return(
    <>
    has 1 vote
    </>
    )
  }
  return(
    <>
    has {props.votes} votes
    </>
  )
}
const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0,0,0,0,0,0])

    const setNum = () =>{
        const r = Math.floor(Math.random()*6) 
        setSelected(r)
    }
    const setP=() =>{
      let p = points
      p[selected] = p[selected] + 1
      setPoints(p)
    }
    const findMax =(array) =>{
     let v = 0
     let i = 0
     let retIndex = 0
     for(i = 0;i< array.length ;i++){
       if (v > array[i]){
          v = array[i]
          retIndex = i
       }
     }
     return retIndex
    }

    return (
      <div>
        <h1>Anecdote of the day</h1>
         { anecdotes[selected]} <br />
          <Votes votes ={points[selected]} /> <br />
         <Button text="upvote" handleClick = {setP} />
         <Button text="next item" handleClick = {setNum} />
         <h1>Anecdote with most votes</h1>
         {anecdotes[findMax(points)]}
      </div>
    )
  }
  
  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )
ReactDOM.render(<App />, document.getElementById('root'));
