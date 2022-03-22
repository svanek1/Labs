import react, { useState } from 'react'

const InputDefault = (props) =>{


    console.log(props)
    return(
        <input maxLength={props.type === 'dec' ? 3 : 2} className='inputDefault' onChange={props.onChange} value={props.value}/>
    );
}
export default InputDefault;