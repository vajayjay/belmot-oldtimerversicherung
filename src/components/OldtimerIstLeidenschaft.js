import React from "react"
import SectionBlueBackground from "../components/layout/SectionBlueBackground"
import styled from "styled-components"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"

const Features = {
    basic: [
        "Diebstahl",
        "Feuer- und Elementar",
        "Vandalismus",
        "Tierbiss-Schäden",
        "Kollision mit Tieren",
        "Unfall des Transportfahrzeugs",
    ],
    pro: [
        "Unfallschäden",
        "Motorschäden",
        "Getriebeschäden",
        "Bruchschäden",
        "Schäden durch Fehlbedienung (z. B. Verschalten)",
        "Schäden durch ausgelaufene Batteriesäure",
    ],
}
// const FeaturesBasic = [
//     "Diebstahl",
//     "Feuer- und Elementar",
//     "Vandalismus",
//     "Tierbiss-Schäden",
//     "Kollision mit Tieren",
//     "Unfall des Transportfahrzeugs",
// ]
// const FeaturesPro = [
//     "Diebstahl",
//     "Feuer- und Elementar",
//     "Vandalismus",
//     "Tierbiss-Schäden",
//     "Kollision mit Tieren",
//     "Unfall des Transportfahrzeugs",
//     "Unfallschäden",
//     "Motorschäden",
//     "Getriebeschäden",
//     "Bruchschäden",
//     "Schäden durch Fehlbedienung (z. B. Verschalten)",
//     "Schäden durch ausgelaufene Batteriesäure",
// ]

const StyledSection = styled.section`
    /* & > div {
        padding: 0 var(--space-side);
    } */
`
const Comparison = styled.div`
    width: 100%;
    background: var(--color-lighter);
    overflow: auto;
    padding: var(--space-m) var(--space-side);

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        margin-top: calc(-0.8 * var(--space-v));
        padding: 0 var(--space-side);
        background: linear-gradient(
            var(--color-primary) 41%,
            var(--color-lighter) 1%
        );
        & > div:first-of-type {
            margin-right: var(--space-m);
        }
    }
`

const StyledCard = styled.div`
    position: relative;
    background: white;
    box-shadow: 0px 4px 4px rgba(43, 117, 217, 0.1);
    font-size: 18px;
    margin-bottom: var(--space-l);
    @media ${device.tablet} {
        max-width: 350px;
    }

    & > div {
        padding: 24px;
    }
`
const CardHeader = styled.div`
    background: var(--color-primary);
    font-weight: 600;
    color: var(--color-white);
    @media ${device.tablet} {
        text-align: center;
        background: var(--color-lighter);
        color: var(--color-black);
    }
`

const ListItem = styled.li`
    list-style: none;
    margin-bottom: var(--space-m);
    display: grid;
    grid-template-columns: 36px auto;
`
const StyledIcon = styled.div`
    margin-top: -5px;
    margin-right: var(--space-s);
    & > svg {
        fill: ${props => (props.notAFeature ? "#f23e3e" : "#2a72d3")};
        max-width: 18px;
    }
    @media ${device.tablet} {
        margin-top: -2px;
        & > svg {
            max-width: 22px;
        }
    }
`

const OldtimerIstLeidenschaft = props => (
    <StyledSection>
        <SectionBlueBackground>
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
                umfassenden Grunddeckung oder wahlweise mit einer
                Allgefahren-Deckung mit Premium-Leistungen.
            </p>
            <span>Wählen Sie zwischen zwei Versicherungsvarianten:</span>
        </SectionBlueBackground>
        <Comparison>
            <StyledCard>
                <CardHeader>Grunddeckung</CardHeader>
                <div>
                    {Features.basic.map((basic, index) => {
                        return (
                            <ListItem key={index}>
                                <StyledIcon>
                                    <Icon icon={ICONS.CHECKMARK} />
                                </StyledIcon>
                                {basic}
                            </ListItem>
                        )
                    })}
                    {Features.pro.map((FeaturesPro, index) => {
                        return (
                            <ListItem key={index}>
                                <StyledIcon notAFeature="notAFeature">
                                    <Icon icon={ICONS.CLOSE} />
                                </StyledIcon>
                                {FeaturesPro}
                            </ListItem>
                        )
                    })}
                </div>
            </StyledCard>
            <StyledCard>
                <CardHeader>Allgefahrendeckung</CardHeader>
                <div>
                    {Features.basic
                        .concat(Features.pro)
                        .map((AllFeatures, index) => {
                            return (
                                <ListItem key={index}>
                                    <StyledIcon>
                                        <Icon icon={ICONS.CHECKMARK} />
                                    </StyledIcon>
                                    {AllFeatures}
                                </ListItem>
                            )
                        })}
                </div>
            </StyledCard>
        </Comparison>
    </StyledSection>
)

export default OldtimerIstLeidenschaft
