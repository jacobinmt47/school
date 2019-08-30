import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name , age}) =>{
    const bornYear = () => new Date().getFullYear() -age ;
    return(
        <div>
            <p>
                Hello {name} you are {age} years old <br />
                you are probably  born in  {bornYear()}
            </p>
        </div>
    )
}

const App = (props) =>{
    const name = "Peter";
    const age = 10;
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="maya"  age={26+10}/>
            <Hello name={name}  age={age}/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));