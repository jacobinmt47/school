import React from 'react';
import ReactDOM from 'react-dom';
const Header = (props) =>{
    return (
        <h1>{props}</h1>
    );
}

const Part =(props) =>{
    return(
        <p>{props.name}  {props.credit}</p>
    )
}

const Content = (props) =>{
    return (
        <>
       <Part name={props.n1}  credit={props.e1} />
       <Part name={props.n2}  credit={props.e2} />
       <Part name={props.n3}  credit={props.e3} />
       </>
    );
}
const Footer = (props) =>{
    return(
        <p>Number of exercises {props}</p>
    );
}
const App =() =>{
    const course ="Half Stack application development";
    const part1 ="Fundamentals of react";
    const exercises1 =10;
    const part2 ="Using props to pass data";
    const exercises2 =7;
    const part3 ="State of a component";
    const exercises3 =14;

    return(
        <div>
            {Header(course) }
            <Content n1={part1} e1={exercises1} n2={part2} e2={exercises2} n3={part3} e3={exercises3} />
            {Footer (exercises1+exercises2+exercises3)}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));