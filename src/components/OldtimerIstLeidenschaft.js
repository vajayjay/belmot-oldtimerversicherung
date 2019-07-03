import React from "react"

import styled from "styled-components"
// import Icon from "../components/layout/Icon"
// import { ICONS } from "../theme/Icons"
// import Button from "../components/Button"

const StyledContent = styled.section`
    width: 100%;
    background: var(--color-primary);
    padding: 10vh var(--space-side);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 694px;
    & > h2 {
        text-align: center;
        color: var(--color-white);
    }
    & > p {
        margin-bottom: var(--space-l);
        color: var(--color-white);
        text-align: center;
    }
    & > span {
        color: var(--color-white);
        font-weight: 500;
    }
`

// const StyledIcon = styled.div`
//     width: 54px;
//     height: 54px;
//     background: var(--color-primary);
//     box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
//     border-radius: 33px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: var(--space-m);
//     & > svg {
//         fill: var(--color-primary);
//     }
// `

const OldtimerIstLeidenschaft = props => (
    <StyledContent>
        <ContentContainer>
            {/* <StyledIcon>
                <Icon icon={ICONS.CHECKMARK} />
            </StyledIcon> */}
            <h2>Ihr Oldtimer ist Ihre Leidenschaft?</h2>
            <p>
                Ob Käfer, Spider oder Pagode - Ihr Oldtimer bedeutet Ihnen etwas
                ganz Besonderes. Und deshalb haben wir eine Versicherung
                konzipiert, die so tickt wie Sie: BELMOT, die
                Oldtimer-Versicherung, die all die Dinge umfasst, die Ihnen als
                Oldtimer-Liebhaber wichtig sind. Der kleine, aber feine
                Unterschied: Während andere Oldtimer-Versicherungen oft
                herkömmliche Teil- und Vollkaskoversicherungen im Sortiment
                führen, begeistert BELMOT die Oldtimer-Spezialisten mit einer
                umfassenderen Grunddeckung oder wahlweise mit einer
                Allgefahren-Deckung mit Premium-Leistungen.
            </p>
            <span>Wählen Sie zwischen zwei Versicherungsvarianten:</span>
        </ContentContainer>
    </StyledContent>
)

export default OldtimerIstLeidenschaft
