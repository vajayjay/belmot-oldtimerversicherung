import React from "react"
import styled from "styled-components"
import StepCard from "../components/StepCard"

// Define Data for cards
const CONTENT = [
    {
        heading: "Angebot anfordern",
        body:
            "Klicken Sie auf einen der Buttons und füllen Sie das folgende Formular auf dieser Website aus",
    },
    {
        heading: "Per E-Mail erhalten",
        body:
            "Kurz darauf sende ich Ihnen ein individuelles Angebot per E-Mail zu",
    },
    {
        heading: "Angebot annehmen",
        body:
            "Nehmen Sie das Angebot per E-Mail an und genießen Sie sofort den SINFONIMA® Allgefahrenschutz für Ihre Instrumente.",
    },
]

const StyledSection = styled.section`
    width: 100%;
    background: var(--color-lighter);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContentContainer = styled.div`
    padding: var(--space-l) 0;
    max-width: 100%;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr;
    margin: 0 var(--space-side) var(--space-v);

    @media (min-width: 769px) {
        grid-template-columns: repeat(${CONTENT.length}, 250px);
    }
    margin: 0 auto var(--space-v) auto;
`

const NextSteps = props => (
    <StyledSection>
        <h2>Wie geht es weiter</h2>
        <ContentContainer>
            {CONTENT.map((CONTENT, index) => {
                return (
                    <StepCard key={index} number={index + 1}>
                        <h3>{CONTENT.heading}</h3>
                        <span>{CONTENT.body}</span>
                    </StepCard>
                )
            })}
        </ContentContainer>
    </StyledSection>
)

export default NextSteps
