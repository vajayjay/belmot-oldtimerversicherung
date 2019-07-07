import React from "react"
import styled from "styled-components"

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
    & > div:last-of-type {
        /* background: var(--color-lighter); */
    }
    hyphens: auto;
    @media (min-width: 600px) {
        hyphens: none;
    }
`

const LeidenschaftIstBeruf = () => (
    <StyledContent>
        <h2>Ihre Leidenschaft ist Ihr Beruf</h2>
        <div>
            <h3>
                BELMOT für Oldtimer-Händler – mehr Kompetenz für Sie Erweitern
                Sie
            </h3>
            <p>
                Ihre Kompetenz als Händler und bieten Sie Ihren Kunden die
                passende Oldtimer-Versicherung zum Traumwagen: BELMOT mit der
                herausragenden Allgefahren-Deckung. Damit ist beispielsweise
                auch ein Motorschaden abgedeckt – das erspart im Schadensfall
                Diskussionen zur Frage, wer zahlt. Und: BELMOT versichert zum
                Wiederbeschaffungswert, nicht zum niedrigeren Marktwert! Mit der
                optionalen Reparaturkostenversicherung punkten Sie ebenfalls bei
                Ihren Kunden: Wer sich dafür entscheidet, zahlt nur noch 50
                Prozent der Kosten. Aber auch Sie als Händler können BELMOT für
                sich nutzen: Sichern Sie so die Fahrzeuge ab, die bei Ihnen zum
                Verkauf stehen.
            </p>
            <h3>BELMOT für Oldtimer-Museen – rundum eine sichere Sache</h3>
            <p>
                Planen Sie den Bau oder Umbau eines Museums für Automobile? Oder
                mangelt es an Sicherheitsmaßnahmen in den vier Wänden rund um
                die Legenden der Landstraßen? Gemeinsam mit Ihnen entwickeln wir
                individuelle Konzepte zur Absicherung Ihrer Ausstellungsstücke.
                Dazu gehören auch die Brandschutzoptimierung sowie Einbau oder
                Modernisierung von Einbruchmeldeanlagen in bestehenden oder
                neuen Räumlichkeiten. Gern begleiten Sie unsere Experten durch
                die Bauabschnitte Ihres Neubaus.
            </p>
        </div>
        <div>
            <h3>Die BELMOT Konzepte für Händler, Restauratoren und Museen</h3>
            <p>
                Zugegeben, die meisten BELMOT-Kunden haben ihren eigenen
                Oldtimer zum Privatvergnügen. Zugleich aber steigt die Nachfrage
                nach einem umfassenden Versicherungsschutz auch von Sammler- und
                Händlerseite. Dafür haben wir die passenden Konzepte.
            </p>
            <h3>BELMOT für Restauratoren – in jeder Phase abgesichert</h3>
            <p>
                Vom Karosseriebauer über den Sattler bis zum Lackierer – der
                Wert der Ihnen anvertrauten Oldtimer wächst von Station zu
                Station. Aber ist das Fahrzeug auch während des gesamten
                Prozesses angemessen versichert? Oftmals sind die Fahrzeuge über
                Jahrzehnte abgemeldet und es besteht kein Versicherungsschutz
                mehr. Mit BELMOT gehen Sie auf Nummer sicher: Damit ist der
                Bestand in Ihrer Werk- statt während der Restaurierung
                ausreichend geschützt. Oder Sie empfehlen BELMOT Ihren Kunden –
                ein wertvoller Tipp für alle Oldtimer-Liebhaber, die ihr
                Schmuckstück auch schon während der Aufbereitung gut abgesichert
                wissen möchten.
            </p>
        </div>
    </StyledContent>
)

export default LeidenschaftIstBeruf
