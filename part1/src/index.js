import React from 'react';
import ReactDOM from 'react-dom';
const now = new Date();
const a = 10;
const b = 20;
const App = () =>{
    console.log('Hello from component')
 return( 
 <div>
     <p>Hello World it is {now.toString()}</p>
     <p>
         {a} plus {b} is {a+b}
     </p>
 </div>
 )
}

ReactDOM.render(<App />,document.getElementById('root'));