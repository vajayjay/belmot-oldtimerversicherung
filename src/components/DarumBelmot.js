import React from "react"
import styled from "styled-components"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"

const StyledContent = styled.section`
    padding: var(--space-v) var(--space-side);
    @media (min-width: 798px) {
        & > ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    hyphens: auto;
    @media (min-width: 600px) {
        hyphens: none;
    }
`

const Intro = styled.div`
    max-width: 820px;
    margin: auto;
    @media (min-width: 798px) {
        text-align: center;
        margin-bottom: var(--space-v);
    }
`
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

const ListItem = styled.li`
    display: grid;
    grid-template-columns: 36px auto;
    max-width: 640px;
`
const MehrAlsNurVollkasko = () => (
    <StyledContent>
        <Intro>
            <h2>Darum BELMOT® – Die Vorteile auf einen Blick</h2>
            <p>
                Individuallösungen statt Versicherungen von der Stange – das ist
                unsere Philosophie. BELMOT erfüllt diesen Anspruch. Freuen Sie
                sich auf viele weitere Kilometer mit Ihrem Schmuckstück und auf
                diese Vorteile:
            </p>
        </Intro>
        <ul>
            <ListItem>
                <StyledIcon>
                    <Icon icon={ICONS.CHECKMARK} />
                </StyledIcon>
                <div>
                    <h3>Allgefahren-Deckung möglich</h3>
                    <p>
                        Ihr Oldtimer ist gegen nahezu alle Risiken abgesichert.
                        Auch bei Schäden, die nicht durch einen Unfall
                        entstehen, wie Motor-, Bruch- oder Getriebeschäden.
                    </p>
                </div>
            </ListItem>
            <ListItem>
                <StyledIcon>
                    <Icon icon={ICONS.CHECKMARK} />
                </StyledIcon>
                <div>
                    <h3>Versicherung zum Wiederbeschaffungswert möglich</h3>
                    <p>
                        BELMOT versichert auf Wunsch den Wiederbeschaffungswert,
                        also die Summe, die Sie im Schadensfall für die
                        kurzfristige Beschaffung eines gleichartigen und
                        gleichwertigen Ersatzfahrzeugs aufwenden müssen.
                    </p>
                </div>
            </ListItem>
            <ListItem>
                <StyledIcon>
                    <Icon icon={ICONS.CHECKMARK} />
                </StyledIcon>
                <div>
                    <h3>Keine Beitragserhöhung im Schadensfall</h3>
                    <p>
                        Im Falle einer Schadensmeldung haben Sie keine
                        Rückstufung zu erwarten – Ihr Beitrag bleibt
                        unverändert.
                    </p>
                </div>
            </ListItem>
            <ListItem>
                <StyledIcon>
                    <Icon icon={ICONS.CHECKMARK} />
                </StyledIcon>
                <div>
                    <h3>150 Euro Selbstbehalt bei Glasbruchschäden</h3>
                    <p>
                        Unabhängig vom vertraglich festgelegten generellen
                        Selbstbehalt zahlen Sie bei Glasbruchschäden nur 150
                        Euro.
                    </p>
                </div>
            </ListItem>
        </ul>
    </StyledContent>
)

export default MehrAlsNurVollkasko
