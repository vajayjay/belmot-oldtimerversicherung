import React from "react"
import styled from "styled-components"
import AlternativeLayout from "../components/pagelayouts/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from "../components/layout/SupportSection"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"

const ContactLink = styled.a`
    display: grid;
    grid-template-columns: 60px 1fr;
    align-items: center;
    text-decoration: none;
    color: var(--color-black);
    font-weight: 500;
    transform: scale(1);
    background: var(--color-lighter);
    & > span {
        margin: 20px;
    }
    svg {
        transition: transform 200ms ease;
    }
    :hover svg {
        transform: scale(1.2);
        transition: transform 200ms ease infinite;
    }
`

const ContactIcon = styled.div`
    background: #2a72d3;
    background: var(--color-primary);
    min-width: 60px;
    min-height: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 24px; */

    & > svg {
        fill: var(--color-white);
        max-width: 48px;
    }
`

class IndexPage extends React.Component {
    render() {
        return (
            <AlternativeLayout>
                <SEO
                    title="Kontakt"
                    keywords={[
                        `Belmot`,
                        `Oldtimerversicherung`,
                        `Kontakt`,
                        `Heiner Blaskewitz`,
                    ]}
                />
                <SupportSection
                    h1={<h1>Kontakt</h1>}
                    p={
                        <p>
                            Ich freue mich auf Ihren Anruf und melde mich auf
                            Ihre E-Mail schnellstmöglich zurück.
                        </p>
                    }
                >
                    <ContactLink href="mailto:info@belmot-oldtimerversicherung.de">
                        <ContactIcon>
                            <Icon icon={ICONS.MAIL} />
                        </ContactIcon>
                        <span>info@belmot-oldtimerversicherung.de</span>
                    </ContactLink>
                    <br />
                    <ContactLink href="tel:+4951919313199">
                        <ContactIcon>
                            <Icon icon={ICONS.PHONE} />
                        </ContactIcon>
                        <span>+49(0)5191 931 31 99</span>
                    </ContactLink>
                    <br />

                    <ContactLink href="https://goo.gl/maps/kZyLwB73tmaPec219">
                        <ContactIcon>
                            <Icon icon={ICONS.LOCATION} />
                        </ContactIcon>
                        <span>
                            Bahnhofstraße 35 <br />
                            29614 Soltau
                        </span>
                    </ContactLink>
                    <br />
                </SupportSection>
            </AlternativeLayout>
        )
    }
}

export default IndexPage
