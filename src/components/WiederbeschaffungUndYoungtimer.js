import React from "react"
import styled from "styled-components"

const StyledContent = styled.section`
    display: grid;

    & > div:first-of-type {
        order: 2;
    }

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;

        & > div:first-of-type {
            order: 0;
        }
    }
    & > div {
        padding: var(--space-v) var(--space-side);
    }

    & > div:last-of-type {
        background: var(--color-lighter);
    }
    hyphens: auto;
    @media (min-width: 600px) {
        hyphens: none;
    }
`
const WiederbeschaffungUndYoungtimer = () => (
    <StyledContent>
        <div>
            <h2>Thema Wiederbeschaffungswert</h2>
            <p>
                Insider wissen: Nur eine Versicherung zum Wiederbeschaffungswert
                deckt die anfallenden Mehrkosten für eine kurzfristige
                Beschaffung ab. Während die meisten deutschen
                Oldtimer-Versicherer nur den rund 25 Prozent niedrigeren
                Marktwert zugrunde legen, kann Ihr Schmuckstück bei BELMOT auch
                zum höheren Wiederbeschaffungswert versichert werden. Das ist
                die Summe, die Sie im Falle eines Verlusts für die kurzfristige
                Beschaffung eines gleichartigen und gleichwertigen
                Ersatzfahrzeugs aufwenden müssen. Sie haben ein einzigartiges,
                wiederaufgebautes Fahrzeug – dann können wir auch den
                Wiederaufbauwert versichern.
            </p>
        </div>
        <div>
            <h2>Youngtimer sind willkommen</h2>
            <p>
                BELMOT ist eine Oldtimer-Versicherung, die sich mehr an Ihrer
                Leidenschaft orientiert als an Zulassungsdaten. Gern schauen wir
                uns auch Fahrzeuge jüngeren Alters an. Entspricht Ihr Fahrzeug
                den Kriterien eines gut erhaltenen Sammlerstücks, versichern wir
                es auch mit späterem Zulassungsdatum. BELMOT ist ebenfalls
                interessant für Oldtimer-Clubs, Restauratoren, Museen,
                Sammlungen sowie Oldtimer-Händler und -Werkstätten.
            </p>
        </div>
    </StyledContent>
)

export default WiederbeschaffungUndYoungtimer
