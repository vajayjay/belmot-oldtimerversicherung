import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import BurgerButtton from './BurgerButton'
import logo from '../../../content/images/Logo.svg'


const Nav = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background: var(--color-white);
  box-shadow: 0 2px 3px rgba(0,0,0,0.1);
  overflow: hidden;
  z-index: 3;
  padding-left: 14px;
  font-size: var(--small);

  /*Nav bar on desktop*/
  @media (min-width: 769px) {
    height: 100px;
    padding-left: 34px;
    padding-right: 48px;
  }
  /*Vertically center the Logo*/
  & > a {
    margin-top: 1px;
    display:flex;
  }

  /*Hide BurgerButton on Dektop*/
  @media (min-width: 769px) {
    & > :last-child {
      display: none;
    }
  }
`
const StyledLogo = styled.img`
  height: 34px;
  @media (min-width: 769px) {
    height: 36px;
  }
`

const DesktopLinks = styled.div`
  /*Hide Dekstop Nav links on mobile*/
  @media (max-width: 768px) {
      display: none;
  }

  /*Desktop Nav links*/
  & > a{
    color: var( --color-darker);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    opacity:0.8;
    transition: opacity 200ms;
    margin-left: var(--space-l);
    padding-bottom: 20px;

    :hover{
      opacity: 1;
      transition: opacity 200ms;
    }

    &.active {
      color: var(--color-primary);
      padding-bottom:37px;
      border-bottom: 4px solid var(--color-primary);
    }
  }
`


const NavBar = props => (
  <header>
      <Nav>
        <Link to="/">
          <StyledLogo src={logo} alt="Belmot Oldtimerversicherung Logo"/>
        </Link>
        <DesktopLinks>
          {/* <Link to="/about" activeClassName="active">About</Link> */}
          <Link to="/faq" activeClassName="active">FAQ</Link>
          <Link to="/kontakt" activeClassName="active">Kontakt</Link>
          <Link to="/anfrage" activeClassName="active">Online-Anfrage</Link>
        </DesktopLinks>
        <BurgerButtton 
          click={props.burgerButtonClickHandler}
          showMobileMenu={props.showMobileMenu}
        />
      </Nav>
  </header>
);

export default NavBar