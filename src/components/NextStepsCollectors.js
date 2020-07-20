import React from "react"
import styled from "styled-components"
import StepCard from "../components/StepCard"

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background: var(--color-lighter);
    padding: var(--space-v) var(--space-side);
    & > h2 {
        margin-bottom: var(--space-l);
        text-align: center;
    }
`

const ContentContainer = styled.div`
    max-width: 800px;
    margin: auto;

    /* Mark first step green as done  */
    & > div:first-child > div:first-child {
        background: var(--color-success);
    }
`

const NextSteps = props => (
    <StyledSection>
        <h2>Wie geht es weiter?</h2>
        <ContentContainer>
            <StepCard number="✓">
                <h3>Angebot angefordert</h3>
                <p>
                    Sie haben das Formular erfolgreich ausgefüllt und
                    abgesendet.
                </p>
            </StepCard>
            <StepCard number="2">
                <h3>Fahrzeug-Tabelle ausfüllen</h3>
                <p>
                    In Kürze erhalten Sie eine vorbereitete Exceltabelle, in die
                    Sie die Daten Ihrer Fahrzeuge eintragen können.
                </p>
            </StepCard>
            <StepCard number="3">
                <h3>Angebot per E-Mail erhalten</h3>
                <p>Dann erstelle ich ein individuelles Angebot für Sie.</p>
            </StepCard>
            <StepCard number="4">
                <h3>Angebot annehmen</h3>
                <p>
                    Angebot annehmen und schon bald ist Ihr Schätzchen gut
                    versichert.
                </p>
            </StepCard>
        </ContentContainer>
    </StyledSection>
)

export default NextSteps
