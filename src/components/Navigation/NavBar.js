import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import BurgerButtton from './BurgerButton'
import logo from '../../../content/images/logo.svg'


const Nav = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: var(--color-white);
  box-shadow: 0 2px 3px rgba(0,0,0,0.1);
  overflow: hidden;
  z-index: 3;
  padding-left: 0.5rem;
  font-size: var(--small);

  /*Nav bar on desktop*/
  @media (min-width: 769px) {
    height: 70px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  /*Vertically center the Logo*/
  & > a {
    display:flex;
  }

  /*Hide BurgerButton on Dektop*/
  @media (min-width: 768px) {
    & > :last-child {
      display: none;
    }
  }
`
const DekstopLinks = styled.div`
  /*Hide Dekstop Nav links on mobile*/
  @media (max-width: 768px) {
      display: none;
  }

  /*Desktop Nav links*/
  & > a{
    color: var( --color-black);
    text-decoration: none;
    opacity:0.8;
    transition: opacity 200ms;
    margin-left: 1rem;
    padding-bottom: 20px;

    :hover{
      opacity: 1;
      transition: opacity 200ms;
    }

    &.active {
      color: var(--color-accent);
      border-bottom: 4px solid var(--color-accent);
    }
  }
`


const NavBar = props => (
  <header>
      <Nav>
        <Link to="/">
          <img src={logo} alt="Company Logo"/>
        </Link>
        <DekstopLinks>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/page-2" activeClassName="active">Nav item 2</Link>
        </DekstopLinks>
        <BurgerButtton 
          click={props.burgerButtonClickHandler}
          showMobileMenu={props.showMobileMenu}
        />
      </Nav>
  </header>
);

export default NavBar