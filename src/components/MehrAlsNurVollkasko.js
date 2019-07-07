import React from "react"
import styled from "styled-components"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"

const StyledIcon = styled.div`
    margin-top: -5px;
    margin-right: var(--space-s);
    & > svg {
        fill: var(--color-primary);
        max-width: 18px;
    }
    @media (min-width: 798px) {
        margin-top: -2px;
        & > svg {
            fill: var(--color-primary);
            max-width: 22px;
        }
    }
`

const StyledContent = styled.section`
    padding: var(--space-v) 0;
    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        & > h2 {
            grid-column: 1/3;
            text-align: center;
        }
    }
    & > h2 {
        padding: 0 var(--space-side) var(--space-m);
    }
    & > div {
        padding: 0 var(--space-side);
    }
    hyphens: auto;
    @media (min-width: 600px) {
        hyphens: none;
    }
`

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 24px;
    margin-bottom: var(--space-l);

    & > li {
        display: grid;
        grid-template-columns: 36px auto;
    }
`
const MehrAlsNurVollkasko = () => (
    <StyledContent>
        <h2>Mehr als nur Vollkasko </h2>
        <div>
            <h3>Das BELMOT Highlight: die Allgefahren-Deckung</h3>
            <p>
                Es muss nicht immer ein Unfall sein. Das hat sich Ihr Oldtimer
                nach all den Jahren verdient: eine Versicherung, die weit mehr
                leistet als eine herkömmliche Vollkasko-Deckung. Mit der
                BELMOT-Oldtimerversicherung haben Sie eine Allgefahren-Deckung,
                die Sie nahezu gegen alle Gefahren absichert – sie greift auch
                bei Schäden, die nicht durch einen Unfall verursacht wurden:
            </p>
            <div>
                <List>
                    <li>
                        <StyledIcon>
                            <Icon icon={ICONS.CHECKMARK} />
                        </StyledIcon>
                        Motorschaden
                    </li>
                    <li>
                        <StyledIcon>
                            <Icon icon={ICONS.CHECKMARK} />
                        </StyledIcon>
                        Bruchschaden
                    </li>
                    <li>
                        <StyledIcon>
                            <Icon icon={ICONS.CHECKMARK} />
                        </StyledIcon>
                        Getriebeschaden
                    </li>
                    <li>
                        <StyledIcon>
                            <Icon icon={ICONS.CHECKMARK} />
                        </StyledIcon>
                        Bremsschaden
                    </li>

                    <li>
                        <StyledIcon>
                            <Icon icon={ICONS.CHECKMARK} />
                        </StyledIcon>
                        Fehlbedienung
                    </li>
                    <li>
                        <StyledIcon>
                            <Icon icon={ICONS.CHECKMARK} />
                        </StyledIcon>
                        Schäden durch ausgelaufene Batterie
                    </li>
                </List>
            </div>
        </div>
        <div>
            <h3>100 Prozent Klartext</h3>
            <p>
                Damit Sie Klarheit haben, benennt BELMOT nicht die versicherten
                Gefahren, sondern ausschließlich solche, die nicht versichert
                sind. Dazu gehören beispielsweise Schäden aufgrund - thermischer
                Probleme, z. B. Fahren ohne genügend Kühlwasser - des
                gewöhnlichen Alterungsprozesses oder Verschleiß.
            </p>
        </div>
    </StyledContent>
)

export default MehrAlsNurVollkasko
