import React from "react"
// import { Link } from "gatsby"

import StandardLayout from "../components/StandardLayout"
import styled from "styled-components"
import "../theme/forms.css"

import SEO from "../components/Seo"
// import TextInput from "../components/TextInput"

const StyledSection = styled.section`
    background: var(--color-lighter);
`
const StyledForm = styled.form`
    padding: var(--space-l) var(--space-side);
    max-width: 680px;
    margin: auto;
`

const StyledSectionH2 = styled.h2`
    font-size: 18px;
    margin: 40px 0 18px 0;
`
const MobileDisclaimer = styled.p`
    /* padding: var(--space-l) var(--space-side); */
    @media (min-width: 500px) {
        display: none;
    }
`

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Online-Anfrage"
                    keywords={[
                        `Oldtimerversicherung Anfrage`,
                        `individuelle Anfrage`,
                    ]}
                />
                <StyledSection>
                    <StyledForm
                        name="test"
                        method="POST"
                        action="/anfrage-erfolgreich"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="bot-field" />
                        <h1>Online-Anfrage</h1>
                        <MobileDisclaimer>
                            Wir empehlen Ihnen das folgende Formular auf Grund
                            seiner Länge auf einem Desktop-Computer auszufüllen.
                        </MobileDisclaimer>
                        <StyledSectionH2>
                            Persönliche Informationen
                        </StyledSectionH2>
                        <fieldset>
                            <legend>
                                <span>Anrede</span>
                                <label>
                                    <input
                                        type="radio"
                                        name="anrede"
                                        value="Herr"
                                    />
                                    <span>Herr</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="anrede"
                                        value="Frau"
                                    />
                                    <span>Frau</span>
                                </label>
                            </legend>
                        </fieldset>
                        {/* <TextInput
                            label="Vorname"
                            name="vorname"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Nachname"
                            name="nachname"
                            type="text"
                            required
                        />

                        <label>
                            <span>Ergänzende Angaben / Fragen</span>
                            <textarea
                                name="Ergänzende Angaben"
                                id=""
                                cols="30"
                                rows="5"
                            />
                        </label>
                        <label id="terms">
                            <label>
                                <input
                                    type="checkbox"
                                    // required
                                    name="Terms and conditions"
                                />
                                <span>
                                    Ich akzeptiere die Übertragung und
                                    Speicherung meiner Daten zum Zwecke des
                                    angebotenen Services.
                                </span>
                            </label>
                        </label> */}
                        <input type="submit" value="Abschicken" />
                    </StyledForm>
                </StyledSection>
            </StandardLayout>
        )
    }
}

export default IndexPage
