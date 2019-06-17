import React from "react"

const TextInput = props => (
    <label>
        <span>{props.label}</span>
        <input type={props.type} name={props.name} required={props.required} />
    </label>
)

export default TextInput
