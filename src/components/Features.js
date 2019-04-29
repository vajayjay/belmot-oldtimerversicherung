import React from 'react'
// import accordionStyles from '../components/accordion.module.styles'
import styled from 'styled-components'
import Icon from '../components/layout/Icon'
import {ICONS} from '../theme/Icons'

const StyledFetaures = styled.section`
    @media (min-width: 798px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    & > div {
        padding: var(--space-side);
    }
    & > div:first-of-type{
        background: var(--color-lighter);
    }
    hyphens: auto;
    @media(min-width: 600px) {
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
    @media (min-width: 798px){
        margin-top: -2px;
        & > svg {
            fill: var(--color-primary);
            max-width: 22px;
        }
    }

`

const FeaturesBasic = [
    '20% Vorsorgeversicherung bei Wertsteigerungen, wenn das Wertgutachten im Versicherungsfall nicht älter als zwei Jahre ist',
    'Bei Glasbruchschäden nur 150 Euro Selbstbehalt – unabhängig vom vertraglich festgelegten generellen Selbstbehalt',
    'Keine Rückstufung im Schadensfall',
    'Versicherungsschutz bei Kollision mit Tieren aller Art',
    'Leistungen bei Tierbissschäden inklusive Folgeschäden',
    'Schutz bei stationären Risiken, z. B. für Sammlungen',
    'Diebstahlversicherung'
]
const FeaturesPro = [
    'Motorschaden',
    'Bruchschaden',
    'Getriebeschaden',
    'Bremsschaden',
    'Schäden durch ausgelaufene Batterie',
    'Fehlbedienung'
]
// const Accordion = props => (
const Features = () => (
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
        </div>
        <div>
            <h2>Allgefahrendeckung</h2>
            <p>die Belmot Premium-Variante, mit der eine herkömmliche Vollkaskoversicherung nicht mithalten kann:</p>
            <ul>
                <SpecialListItem>
                    <StyledIcon>
                        <Icon icon={ICONS.CHECKMARK} />
                    </StyledIcon>
                    Enthält alle Leistungen der Grunddeckung
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
            
export default Features