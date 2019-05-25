import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.div`
    background-color: var(--color-darker);
    font-size: var(--small);
    padding: var(--space-l) var(--space-side);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: top;
    color: var(--color-white);

    /* @media (min-width: 769px) {
            padding: 2rem;
        } */

    /*Links in footer*/
    a,
    p {
        margin: 0;
        color: var(--color-white);
        text-decoration: undeline;
        text-decoration-color: rgba(255, 255, 255, 0.5);
        line-height: 2;

        :hover {
            text-decoration-color: rgba(255, 255, 255, 1);
        }
    }
`
const FooterTitle = styled.h5`
    margin-top: var(--space-l);
    margin-bottom: var(--space-m);
    text-transform: uppercase;
    color: var(--color-white);
    opacity: 0.6;
`
const SmallPrint = styled.p`
    opacity: 0.6;
`

const Footer = props => (
    <StyledFooter>
        <div>
            <FooterTitle>Ansprechpartner</FooterTitle>
            <p>
                Heiner Blaskewitz
                <br />
                Versicherungsfachmann (BWV)
                <br />
                Generalagentur der Mannheimer Versicherung AG
                <br />
                Bahnhofstraße 35
                <br />
                29614 Soltau
            </p>
        </div>
        <div>
            <FooterTitle>Kontakt</FooterTitle>
            <p>
                Tel: <a href="tel:+4951919313199">05191 931 31 99</a>
                <br />
                Mobil: <a href="tel:+401725113611">0172 511 3611</a>
                <br />
                Fax: 05191- 973 90 26
                <br />
                <a href="mailto:info@belmot-oldtimerversicherung.de">
                    info@belmot-oldtimerversicherung.de
                </a>
                <br />
                <a href="belmot-oldtimerversicherung.de">
                    belmot-oldtimerversicherung.de
                </a>
                <br />
            </p>
        </div>
        <div>
            <FooterTitle>Info</FooterTitle>
            <Link to="/impressum">Impressum</Link>
            <br />
            <Link to="/datenschutz">Datenschutz</Link>
            <br />
            <Link to="/versicherungsbedingungen">Versicherungsbedingungen</Link>
            <br />
            <SmallPrint>
                Belmot® ist eine eingetragene Marke <br />
                der Mannheimer Versicherung AG
            </SmallPrint>
        </div>
    </StyledFooter>
)
export default Footer
