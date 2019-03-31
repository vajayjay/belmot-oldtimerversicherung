import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
    display: inline-block;
    text-decoration: none;
    background: ${props => props.primary ? "var(--color-primary)" : "var(--color-accent)"};
    border: 2px solid ${props => props.primary ? "var(--color-primary)" : "var(--color-accent)"};
    border-radius: 5px;
    text-align: center;
    color: var(--color-white);
    padding: calc(0.5 * var(--space-unit)) calc(0.75 * var(--space-unit)) calc(0.5 * var(--space-unit) - 2px) calc(0.75 * var(--space-unit));
    /* margin-top: var(--space-s); */
    margin-bottom: var(--space-s);
    margin-right: var(--space-s);
    width: 100%;
    transform: translateY(0);
    transition: all var(--time-fast);
    @media (min-width: 500px){
        width: ${props => props.fullwidth ? "100%" : "auto"};
    }

    :hover{
      color:var(--color-white);
      background: ${props => props.primary ? "var(--color-primary-light)" : "var(--color-accent-light)"};
      border-color: ${props => props.primary ? "var(--color-primary-light)" : "var(--color-accent-light)"};
      transform: translateY(-1px);
      transition: all var(--time-fast);    
    }
    :active{
      background: ${props => props.primary ? "var(--color-primary-dark)" : "var(--color-accent-dark)"};
      transform: translateY(1px);
    }
`


const Button = props => (
  <StyledButton fullwidth={props.fullwidth} primary={props.primary} href={props.link}>
    {props.children}
  </StyledButton>
)

export default Button