import React from 'react'

const Notification = (props) => {
    if (props.error === null){
        return null
    }
    if(props.error.includes('success')){
        return(
            <li className='success' >
                {props.error}
            </li>
        )
    }
    return (
        <li className='error'>
            {props.error}
        </li>
    )
}

export default Notification