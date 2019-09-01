import React from 'react';

const Parts = (props) =>{
    const rows = props.map( p =><li>{p.name}  </li>)
    return(
        rows
    )
}

const Course =(props) =>{
    const course = props.course
    const name = course.name
return(
    <li>{name}</li>,
    <Parts props={course.parts} />
)

}
export default  Course;