import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BurgerButton from "./BurgerButton"
import logo from "../../../content/images/logo.svg"
import Button from "../../components/Button"
import { device } from "../../theme/breakpoints"

const Nav = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background: var(--color-white);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 3;
    padding-left: 14px;
    font-size: var(--small);

    /*Nav bar on desktop*/
    @media ${device.tablet} {
        height: 100px;
        padding-left: 34px;
        padding-right: 22px;
    }
    /*Vertically center the Logo*/
    & > a {
        margin-top: 1px;
        display: flex;
    }

    /*Hide BurgerButton on Dektop*/
    @media ${device.tablet} {
        & > :last-child {
            display: none;
        }
    }
`
const StyledLogo = styled.img`
    height: 34px;
    @media ${device.tablet} {
        height: 36px;
    }
`

const DesktopLinks = styled.div`
    /*Hide Dekstop Nav links on mobile*/
    display: none;

    @media ${device.tablet} {
        display: inline-block;
    }
    /*Desktop Nav links*/
    & > a {
        color: var(--color-darker);
        text-decoration: none;
        /* text-transform: uppercase; */
        font-weight: 500;
        letter-spacing: 1px;
        transition: all 100ms;
        margin-left: var(--space-l);

        :hover {
            transition: all 100ms;
            color: var(--color-primary);
        }

        &.active {
            color: var(--color-primary);
            padding-bottom: 37px;
            border-bottom: 4px solid var(--color-primary);
        }
        & > a:not(:last-of-type) {
            padding-bottom: 20px;
        }
    }
    & > a:last-of-type {
        color: white;
    }
`

const StyledButton = styled(Button)`
    /* margin-bottom: 0; */
`

const NavBar = props => (
    <header>
        <Nav>
            <Link to="/">
                <StyledLogo src={logo} alt="Belmot Oldtimerversicherung Logo" />
            </Link>
            <DesktopLinks>
                {/* <Link to="/about" activeClassName="active">About</Link> */}
                <Link to="/faq" activeClassName="active">
                    FAQ
                </Link>
                <Link to="/kontakt" activeClassName="active">
                    Kontakt
                </Link>
                <StyledButton link="/anfrage" primary="primary">
                    Jetzt anfragen
                </StyledButton>
            </DesktopLinks>
            <BurgerButton
                click={props.burgerButtonClickHandler}
                showMobileMenu={props.showMobileMenu}
            />
        </Nav>
    </header>
)

export default NavBar
