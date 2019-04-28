import React from 'react'
import styled from 'styled-components'

const SytledRadioButton = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: var(--space-m);

    & > span {
        margin-bottom: 6px;
        font-size: 16px;
    }
    
    & > input {
        height: 64px;
        max-width: 300px;
        border: 1px solid var(--color-medium);
        border-radius: 3px;
        padding: 20px;
        font-size: 18px;


        :focus{
            border: 3px solid var(--color-primary);
            outline-width: 0;
            outline: none;

        }
        /* focus:valid {
            border: 3px solid var(--color-success);
        }
        :focus:invalid {
            border: 3px solid var(--color-error);
        } */
    }


`
const RadioButton = (props) => (
    <SytledRadioButton>
        <span>{props.label}</span>
        {props.options}
        <input 
            type= "radio"
            name="name" 
            required={props.required}
        ></input>
        {props.options.label}
    </SytledRadioButton>
)


export default RadioButton