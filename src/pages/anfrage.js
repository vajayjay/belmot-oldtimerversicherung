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
// const StyledForm = styled.form`
//     padding: var(--space-l) var(--space-side);
//     max-width: 680px;
//     margin: auto;
// `

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
                    <h1>Online-Anfrage</h1>
                    <MobileDisclaimer>
                        Wir empehlen Ihnen das folgende Formular auf Grund
                        seiner Länge auf einem Desktop-Computer auszufüllen.
                    </MobileDisclaimer>
                    <StyledSectionH2>Persönliche Informationen</StyledSectionH2>
                    <form
                        name="contact"
                        method="post"
                        action="/anfrage-erfolgreich"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="bot-field" />
                        {/* Important so netlify forms works with gatsby */}
                        <input type="hidden" name="form-name" value="contact" />
                        <p>gatsby input</p>
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="6"
                                required
                            />
                        </div>
                        <ul className="actions">
                            <li>
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="special"
                                />
                            </li>
                            <li>
                                <input type="reset" value="Clear" />
                            </li>
                        </ul>
                    </form>
                    {/* <StyledForm
                        name="test"
                        method="POST"
                        netlify-honeypot="bot-field"
                        data-netlify="true"
                    >
                        <input type="hidden" name="bot-field" />

                        <fieldset>
                            <legend>Can you attend?</legend>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="Attending"
                                    />{" "}
                                    Yes
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="Not Attending"
                                    />{" "}
                                    No
                                </label>
                            </p>
                        </fieldset>
                        <button type="submit">Absenden</button>
                    </StyledForm> */}
                </StyledSection>
            </StandardLayout>
        )
    }
}

export default IndexPage
