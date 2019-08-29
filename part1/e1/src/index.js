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
    console.log(props);
    return (
        <>
       <Part name={props.c1.name}  credit={props.c1.exercises} />
       <Part name={props.c2.name}  credit={props.c2.exercises} />
       <Part name={props.c3.name}  credit={props.c3.exercises} />
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
/*
   const part1 ={
    name:"Fundamentals of react",
    exercises:10,
   }
   const part2 ={
    name:"Using props to pass data",
    exercises:7,
   }
   const part3 ={
    name:"State of a component",
    exercises:14,
   }
   */
  const parts = [
    {
    name:"Fundaments of react",
    exercises:10,
    },
    {
    name:"Using props to pass data",
    exercises:7,
    },
    {
    name:"State of a component",
    exercises:14,
    }

]

    return(
        <div>
            {Header(course) }
            <Content c1={parts[0]} c2={parts[1]} c3={parts[2]} />
            {Footer (parts[0].exercises+parts[1].exercises+parts[2].exercises)}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));