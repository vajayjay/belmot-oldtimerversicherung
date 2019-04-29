import React from 'react'


const TextInput = (props) => (
    <label>
        <span>{props.label}</span>
        <input 
            type={props.type} 
            name="name" 
            required={props.required}
        >
        </input>
    </label>
)


export default TextInput