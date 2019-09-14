import React from 'react'

const Notification =(props)=>{
    console.log(props)
    if(props.errormsg ===null){
        return null
    }

return(
    <div className='error'>
        {props.errormsg}
    </div>
)
}
export default Notification 