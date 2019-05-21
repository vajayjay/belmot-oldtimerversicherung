import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
import styled from "styled-components"
import "../theme/forms.css"

import SEO from "../components/Seo"
import TextInput from "../components/TextInput"

const StyledSection = styled.section`
    background: var(--color-lighter);
`
const StyledForm = styled.form`
    padding: var(--space-l) var(--space-side);
    max-width: 480px;
    margin: auto;
`

const StyledSectionH2 = styled.h2`
    font-size: 18px;
    margin: 40px 0 18px 0;
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
                        name="contact"
                        method="post"
                        action="/success"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <h1>Online-Anfrage</h1>
                        <br />
                        <StyledSectionH2>
                            Persönliche Informationen
                        </StyledSectionH2>
                        <label>
                            <span>Anrede</span>
                            <label>
                                <input
                                    label="Anrede"
                                    type="radio"
                                    name="anrede"
                                    defaultChecked
                                />
                                <span>Herr</span>
                            </label>
                            <label>
                                <input
                                    label="Anrede"
                                    type="radio"
                                    name="anrede"
                                />
                                <span>Frau</span>
                            </label>
                        </label>
                        <TextInput label="Vorname" type="text" required />
                        <TextInput label="Nachname" type="text" />
                        <TextInput label="Email" type="email" required />
                        <TextInput
                            label="Geburtsdatum des Fahrzeughalters"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Straße und Hausnummer"
                            type="text"
                            required
                        />
                        <TextInput label="Postleitzahl" type="text" required />
                        <TextInput label="Ort" type="text" required />
                        <label>
                            <span>
                                Sind Sie Mitglied in einem Oldtimerclub?
                            </span>
                            <label>
                                <input
                                    type="radio"
                                    name="Oldtimerclub"
                                    defaultChecked
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input type="radio" name="Oldtimerclub" />
                                <span>Ja</span>
                            </label>
                        </label>

                        <TextInput label="Name des Oldtimerclubs" type="text" />
                        <StyledSectionH2>
                            Fahrzeug-Informationen
                        </StyledSectionH2>
                        <label>
                            <span>Fahrzeugart</span>
                            <label>
                                <input type="checkbox" name="typeofcar" />
                                <span>PKW</span>
                            </label>
                            <label>
                                <input type="checkbox" name="typeofcar" />
                                <span>Motorrad</span>
                            </label>
                            <label>
                                <input type="checkbox" name="typeofcar" />
                                <span>Traktor</span>
                            </label>
                            <label>
                                <input type="checkbox" name="typeofcar" />
                                <span>Andere</span>
                            </label>
                        </label>
                        <TextInput label="KFZ-Kennzeichen" type="text" />
                        <label>
                            <span>Fahrzeugart</span>
                            <label>
                                <input
                                    type="radio"
                                    name="seasonplate"
                                    defaultChecked
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input type="radio" name="seasonplate" />
                                <span>Ja</span>
                            </label>
                        </label>

                        <label id="terms">
                            <label>
                                <input type="checkbox" required />
                                <span>
                                    Ich akzeptiere die Übertragung und
                                    Speicherung meiner Daten zum Zwecke des
                                    angebotenen Services.
                                </span>
                            </label>
                        </label>
                        <input type="submit" value="Abschicken" />
                    </StyledForm>
                </StyledSection>
            </StandardLayout>
        )
    }
}

export default IndexPage
