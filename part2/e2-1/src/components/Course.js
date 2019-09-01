import React from 'react';

const Parts = (props) =>{
    const rows = props.courses.map(p =><li key ={p.id}>{p.name}  {p.exercises}</li> )
    return(
        rows
    )
}

const Course =(props) =>{
    const course = props.course
return(
    <div>
    <h1>{course.name}</h1>
    <ul>
    <Parts courses={course.parts}/>
    </ul>
    </div>
)

}
export default  Course;