import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
    display: inline-block;
    text-decoration: none;
    background: ${props => props.primary ? "var(--color-primary)" : "var(--color-white)"};
    border: 2px solid ${props => props.primary ? "var(--color-primary)" : "var(--color-white)"};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    /* border-radius: 5px; */
    text-align: center;
    color: ${props => props.primary ? "var(--color-white)" : "var(--color-black)"};
    padding: 1rem 2rem;
    /* margin-top: var(--space-s); */
    margin-bottom: var(--space-s);
    /* margin-right: var(--space-s); */
    width: 100%;
    transform: translateY(0);
    transition: all var(--time-fast);
    @media (min-width: 500px){
        width: ${props => props.fullwidth ? "100%" : "auto"};
    }

    :hover{
      color: ${props => props.primary ? "var(--color-white)" : "var(--color-black)"};
      background: ${props => props.primary ? "var(--color-primary-light)" : "var(--color-lighter)"};
      border-color: ${props => props.primary ? "var(--color-primary-light)" : "var(--color-lighter)"};
      transform: translateY(-1px);
      transition: all var(--time-fast);    
    }
    :active{
      background: ${props => props.primary ? "var(--color-primary-dark)" : "var(--color-light)"};
      transform: translateY(1px);
    }
`


const Button = props => (
  <StyledButton fullwidth={props.fullwidth} primary={props.primary} href={props.link}>
    {props.children}
  </StyledButton>
)

export default Button