import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButton = styled(Link)`
    display: inline-block;
    background: ${props => props.primary ? "var(--color-primary)" : "var(--color-white)"};
    border: 2px solid ${props => props.primary ? "var(--color-primary)" : "var(--color-white)"};
    color: ${props => props.primary ? "var(--color-white)" : "var(--color-black)"};

    /* border-radius: 5px; */

    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    user-select: none;
    cursor: pointer;

    padding: 1rem 2rem;
    margin-bottom: var(--space-s);

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
  <StyledButton 
    fullwidth={props.fullwidth} 
    primary={props.primary} 
    to={props.link}
    type={props.type}
    >
    {props.children}
  </StyledButton>
)

export default Button