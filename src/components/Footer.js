import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const StyledFooter = styled.div`
    background-color: var(--color-lighter);
    font-size: var(--small);
    padding: 1rem;
    display: flex;
    align-items: center;
    @media (min-width: 769px) {
        padding: 2rem;
    }
    /*Links in footer*/
    a {
        color: var(--color-black);
        margin-right: 1rem;
        text-decoration: none;
    }

`
const Footer = props => (
    <StyledFooter>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
    </StyledFooter>
)
export default Footer
