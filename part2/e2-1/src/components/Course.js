import React from 'react';
const Sum = (props) =>{
    return (
        <li><h2>Total exercises:{props.sum}</h2></li>
    )
}

const Parts = (props) =>{
    const rows = props.courses.map(p =><li key ={p.id}>{p.name}  {p.exercises}</li> )
    return(
        rows
    )
}   

const Course =(props) =>{
    const course = props.course
    const array = course.parts.map(e =>e.exercises)
    console.log(array)
    const sum =((s,p) =>  s + p)
    const total = array.reduce(sum)
    return(
    <div>
    <h1>{course.name}</h1>
    <ul>
    <Parts courses={course.parts}/>
    <Sum sum={total}/>
    </ul>
    </div>
)

}
export default  Course;