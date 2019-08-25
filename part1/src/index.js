import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) =>{
return(
    <div>
        <p>Hello {props.name} you are {props.age}</p>
    </div>
)

}
const App = () =>{
    console.log('Hello from component')
 return( 
 <>
     <p>Greetings</p>
    <Hello name="Jacob" age="40"/>
    <Hello name="Maya"  age={26+10} />
 </>
 )
}

ReactDOM.render(<App />,document.getElementById('root'));