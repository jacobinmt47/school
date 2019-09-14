import React from 'react'

const Notification = (props) => {
    if (props.error === null){
        return null
    }
    if(typeof(props.error)==='string'){
    if(props.error.includes('success')){
        return(
            <li className='success' >
                {props.error}
            </li>
        )
    }
}
    return (
        <li className='error'>
            'person all ready deleted' 
        </li>
    )
}

export default Notification