import React from "react"
// import accordionStyles from '../components/accordion.module.styles'
import styled from "styled-components"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"

const StyledFetaures = styled.section`
    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    & > div {
        padding: var(--space-side);
    }
    & > div:first-of-type {
        background: var(--color-lighter);
    }
    hyphens: auto;
    @media ${device.tablet} {
        hyphens: none;
    }
`
const SpecialListItem = styled.li`
    list-style: none;
    display: grid;
    grid-template-columns: 36px auto;
    margin: 0 -1rem var(--space-m) -1rem;
    background: var(--color-lighter);
    padding: 1rem;
    font-weight: 500;
    color: var(--color-darker);
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
        fill: var(--color-primary);
        max-width: 18px;
    }
    @media ${device.tablet} {
        margin-top: -2px;
        & > svg {
            fill: var(--color-primary);
            max-width: 22px;
        }
    }
`

const FeaturesBasic = [
    "Diebstahl",
    "Feuer- und Elementar",
    "Vandalismus",
    "Tierbiss-Schäden",
    "Kollision mit Tieren",
    "Unfall des Transportfahrzeugs",
    "und vieles mehr",
]
const FeaturesPro = [
    "Unfallschäden",
    "Motorschäden",
    "Getriebeschäden",
    "Bruchschäden",
    "Schäden durch Fehlbedienung (z. B. Verschalten)",
    "Schäden durch ausgelaufene Batteriesäure",
]
// const Accordion = props => (
const Vergleich = () => (
    <StyledFetaures>
        <div>
            <h2>Grunddeckung</h2>
            <p>Umfangreicher Schutz mit weit mehr als Teilkaskoleistungen:</p>
            <ul>
                {FeaturesBasic.map((FeaturesBasic, index) => {
                    return (
                        <ListItem key={index}>
                            <StyledIcon>
                                <Icon icon={ICONS.CHECKMARK} />
                            </StyledIcon>
                            {FeaturesBasic}
                        </ListItem>
                    )
                })}
            </ul>
            <p>
                Inklusive: 30 % Vorsorgeversicherung für Wertsteigerungen, wenn
                das Wertgutachten im Schadenfall nicht älter als zwei Jahre ist
            </p>
        </div>
        <div>
            <h2>Allgefahrendeckung</h2>
            <p>
                die Belmot Premium-Variante, mit der eine herkömmliche
                Vollkaskoversicherung nicht mithalten kann:
            </p>
            <ul>
                <SpecialListItem>
                    <StyledIcon>
                        <Icon icon={ICONS.CHECKMARK} />
                    </StyledIcon>
                    enthält alle Leistungen der Grunddeckung und entschädigt
                    darüber hinaus
                </SpecialListItem>
                {FeaturesPro.map((FeaturesPro, index) => {
                    return (
                        <ListItem key={index}>
                            <StyledIcon>
                                <Icon icon={ICONS.CHECKMARK} />
                            </StyledIcon>
                            {FeaturesPro}
                        </ListItem>
                    )
                })}
            </ul>
        </div>
    </StyledFetaures>
)

export default Vergleich
