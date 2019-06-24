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
    <StyledFooter itemScope itemType="http://schema.org/Organization">
        <div>
            <FooterTitle>Ansprechpartner</FooterTitle>
            <p>
                <div
                    itemProp="member"
                    itemScope
                    itemType="http://schema.org/Person"
                >
                    <span itemProp="name">Heiner Blaskewitz</span>
                </div>
                <div
                    itemProp="member"
                    itemScope
                    itemType="http://schema.org/OrganizationRole"
                >
                    <span itemProp="roleName">Versicherungsfachmann (BWV)</span>
                </div>
                Generalagentur der Mannheimer Versicherung AG
                <br />
                <div
                    itemProp="address"
                    itemScope
                    itemType="http://schema.org/PostalAddress"
                >
                    <span itemProp="streetAddress">Bahnhofstraße 35</span>
                    <br />
                    <span itemProp="postalCode">29614</span>{" "}
                    <span itemProp="addressLocality">Soltau</span>
                </div>
            </p>
        </div>
        <div>
            <FooterTitle>Kontakt</FooterTitle>
            <p>
                Tel:{" "}
                <a href="tel:+4951919313199">
                    <span itemProp="telephone">05191 931 31 99</span>
                </a>
                <br />
                Mobil:{" "}
                <a href="tel:+401725113611">
                    <span itemProp="telephone">0172 511 3611</span>
                </a>
                <br />
                Fax: <span itemProp="faxNumber">05191 - 973 90 26</span>
                <br />
                <a href="mailto:info@belmot-oldtimerversicherung.de">
                    <span itemProp="email">
                        info@belmot-oldtimerversicherung.de
                    </span>
                </a>
                <br />
                <a href="belmot-oldtimerversicherung.de">
                    <span itemProp="url">belmot-oldtimerversicherung.de</span>
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
