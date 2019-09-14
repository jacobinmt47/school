import React from 'react'

const Notification = (props) => {
    if (props.error === null){
        return null
    }
    
    return (
        <li className='error'>
            {props.error}
        </li>

    )

}

export default Notification