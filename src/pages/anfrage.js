import React from "react"
// import { Link } from "gatsby"
import StandardLayout from "../components/pagelayouts/StandardLayout"
import AnfrageFormular from "../components/AnfrageFormular"
import styled from "styled-components"
import "../theme/forms.css"
import { device } from "../theme/breakpoints"

import SEO from "../components/Seo"

const StyledSection = styled.section`
    background: var(--color-lighter);
`
const StyledForm = styled.div`
    padding: var(--space-l) var(--space-side);
    max-width: 680px;
    margin: auto;
    & > p {
        margin-top: calc(-1 * var(--space-l));
        font-size: 16px;
    }
`

const MobileDisclaimer = styled.p`
    padding-top: var(--space-l);

    @media ${device.tablet} {
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
                    index="noindex"
                />
                <StyledSection>
                    <StyledForm>
                        {" "}
                        <MobileDisclaimer>
                            Wir empehlen Ihnen das folgende Formular auf Grund
                            seiner Länge auf einem Desktop-Computer auszufüllen.
                        </MobileDisclaimer>
                        <AnfrageFormular />
                    </StyledForm>
                </StyledSection>
            </StandardLayout>
        )
    }
}

export default IndexPage
