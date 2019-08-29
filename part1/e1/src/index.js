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
    const course ={
    name:"Half Stack application development",
    parts: [
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
    }

    return(
        <div>
            {Header(course.name) }
            <Content c1={course.parts[0]} c2={course.parts[1]} c3={course.parts[2]} />
            {Footer (course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises)}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));