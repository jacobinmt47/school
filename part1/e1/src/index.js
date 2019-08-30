import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),1000,
    console.log(counter)
  )

  return (
    <div>{counter}
    <button onClick={() => setCounter(counter+1)}>
        plus
    </button>
    <button onClick={() => setCounter(0)}>
        zero
    </button>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)