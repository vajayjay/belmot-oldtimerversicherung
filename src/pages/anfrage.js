import React from "react"
import { Link } from "gatsby"

import StandardLayout from "../components/StandardLayout"
import styled from "styled-components"
import "../theme/forms.css"

import SEO from "../components/Seo"
import TextInput from "../components/TextInput"

const StyledSection = styled.section`
    background: var(--color-lighter);
`
const StyledForm = styled.form`
    padding: var(--space-l) var(--space-side);
    max-width: 680px;
    margin: auto;
`

const StyledSectionH2 = styled.h2`
    font-size: 18px;
    margin: 40px 0 18px 0;
`
const MobileDisclaimer = styled.p`
    /* padding: var(--space-l) var(--space-side); */
    @media (min-width: 500px) {
        display: none;
    }
`

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Online-Anfrage"
                    keywords={[
                        `Oldtimerversicherung Anfrage`,
                        `individuelle Anfrage`,
                    ]}
                />
                <StyledSection>
                    <StyledForm
                        name="contact"
                        method="POST"
                        action="/anfrage-erfolgreich"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <h1>Online-Anfrage</h1>
                        <MobileDisclaimer>
                            Wir empehlen Ihnen das folgende Formular auf Grund
                            seiner Länge auf einem Desktop-Computer auszufüllen.
                        </MobileDisclaimer>
                        <StyledSectionH2>
                            Persönliche Informationen
                        </StyledSectionH2>
                        <label>
                            <span>Anrede</span>
                            <label>
                                <input
                                    label="Anrede"
                                    type="radio"
                                    name="anrede"
                                    value="Herr"
                                    defaultChecked
                                />
                                <span>Herr</span>
                            </label>
                            <label>
                                <input
                                    label="Anrede"
                                    type="radio"
                                    name="anrede"
                                    value="Frau"
                                />
                                <span>Frau</span>
                            </label>
                        </label>
                        <TextInput label="Vorname" type="text" required />
                        <TextInput label="Nachname" type="text" required />
                        <TextInput
                            label="Geburtsdatum des Fahrzeughalters"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Straße und Hausnummer"
                            type="text"
                            required
                        />
                        <TextInput label="Postleitzahl" type="text" required />
                        <TextInput label="Ort" type="text" required />
                        <TextInput label="Email" type="email" required />
                        <label>
                            <span>
                                Sind Sie Mitglied in einem Oldtimerclub?
                            </span>
                            <label>
                                <input
                                    type="radio"
                                    name="Oldtimerclub"
                                    defaultChecked
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Oldtimerclub"
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                        </label>
                        <TextInput label="Name des Oldtimerclubs" type="text" />
                        <br />
                        <StyledSectionH2>
                            Fahrzeug-Informationen
                        </StyledSectionH2>
                        <label>
                            <span>Fahrzeugart*</span>
                            <label>
                                <input
                                    type="checkbox"
                                    name="Fahrzeugart"
                                    defaultChecked
                                    value="PKW"
                                />
                                <span>PKW</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="Fahrzeugart"
                                    value="Motorrad"
                                />
                                <span>Motorrad</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="Fahrzeugart"
                                    value="Traktor"
                                />
                                <span>Traktor</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="Fahrzeugart"
                                    value="Andere"
                                />
                                <span>Andere</span>
                            </label>
                        </label>
                        <TextInput
                            label="KFZ-Kennzeichen"
                            type="text"
                            name="KFZ-Kennzeichen"
                        />
                        <p>
                            Hinweis: Wohnmobile und zu Campingzwecken genutzte
                            Fahrzeuge können leider nicht über Belmot versichert
                            werden.
                        </p>
                        <label>
                            <span>Kennzeichen</span>
                            <label>
                                <input
                                    type="radio"
                                    name="Saisonkennzeichen"
                                    value="Rot"
                                />
                                <span>Rot</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Saisonkennzeichen"
                                    value="Schwarz"
                                />
                                <span>Schwarz</span>
                            </label>
                        </label>
                        <TextInput label="Von" type="text" name="Von" />
                        <TextInput label="Bis" type="text" name="Bis" />
                        <label>
                            <span>Historisches Kennzeichen</span>
                            <label>
                                <input
                                    type="radio"
                                    name="Historisches Kennzeichen"
                                    defaultChecked
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Historisches Kennzeichen"
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                        </label>
                        <TextInput
                            label="Hersteller*"
                            type="text"
                            name="Hersteller"
                            required
                        />
                        <TextInput
                            label="Typ*"
                            type="text"
                            name="Typ"
                            required
                        />
                        <TextInput
                            label="Erstzulassung*"
                            type="text"
                            name="Erstzulassung"
                            required
                        />
                        <TextInput
                            label="Versicherungssumme (Wiederbeschaffungswert) in €*"
                            type="text"
                            name="Versicherungssumme in €"
                            required
                        />
                        <TextInput
                            label="Jährliche Fahrleistung in km*"
                            type="text"
                            name="Jährliche Fahrleistung in km"
                            required
                        />
                        <p>
                            Bitte beachten Sie, dass die angegebene
                            Kilometerleistung Auswirkungen auf die
                            Beitragsberechnung hat. Geben Sie also bitte im
                            Rahmen des Möglichen eine realistische und nicht
                            vorsichtig zu hoch angesetzte Kilometerleistung an.
                        </p>
                        <TextInput
                            label="Motorsträke in KW"
                            type="text"
                            name="Motorsträke in KW"
                        />
                        <label>
                            <span>Fahrzeugzustand*</span>
                            <label>
                                <input
                                    type="radio"
                                    name="Fahrzeugzustand"
                                    value="Makellos – Note 1"
                                    required
                                />
                                <span>Makellos – Note 1</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Fahrzeugzustand"
                                    value="Sehr gut – Note 1 - 2"
                                    required
                                />
                                <span>Sehr gut – Note 1 - 2</span>
                            </label>
                            {/* Weitere Zustände fehlen */}
                        </label>
                        <label>
                            <span>
                                Das KFZ befindet sich weitgehend im
                                Originalzustand ohne Umbauten (z. B. anderer
                                Motor, Tieferlegung, Tuning etc.) *
                            </span>
                            <label>
                                <input
                                    type="radio"
                                    name="Originalzustand-ja"
                                    defaultChecked
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Originalzustand-nein"
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                        </label>
                        <TextInput
                            label="Wenn nein, welche Umauten?"
                            type="text"
                            name="Umbauten"
                        />
                        <label>
                            <span>
                                Der letzte TÜV-Bericht enthält Hinweise auf
                                Ölfeuchte an Motor und/oder Getriebe*
                            </span>
                            <label>
                                <input
                                    type="radio"
                                    name="Ölfeuchte"
                                    value="Nein"
                                    defaultChecked
                                    required
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Ölfeuchte"
                                    value="Ja"
                                    required
                                />
                                <span>Ja</span>
                            </label>
                        </label>
                        <TextInput
                            label="Wenn ja, bitte erläutern"
                            type="text"
                            name="Erläuterung zur Ölfeuchte"
                        />
                        <label>
                            <span>Überwiegender Abstellort*</span>
                            <select name="Abstellort[]" required>
                                <option value="eigenes Grundstück">
                                    eigenes Grundstück
                                </option>
                                <option value="Carport">Carport</option>
                                <option value="Einzelgarage">
                                    Einzelgarage
                                </option>
                                <option value="Tiefgarage nicht öffentlich">
                                    Tiefgarage nicht öffentlich
                                </option>
                                <option value="Tiefgarage öffentlich">
                                    Tiefgarage öffentlich
                                </option>
                                <option value="Tiefgarage Parkbox">
                                    Tiefgarage Parkbox
                                </option>
                                <option value="Halle">Halle</option>
                            </select>
                        </label>
                        <label>
                            <span>Es gibt ein Wertgutachten*</span>
                            <label>
                                <input
                                    type="radio"
                                    name="Wergutachten"
                                    value="Ja"
                                    required
                                />
                                <span>Ja</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Wergutachten"
                                    value="Nein"
                                    required
                                />
                                <span>Nein</span>
                            </label>
                        </label>
                        <TextInput
                            label="Wenn ja, Datum des Gutachtens"
                            type="text"
                            name="Datum des Gutachtens"
                        />
                        <p>
                            Wenn es kein Wertgutachten gibt und der Fahrzeugwert
                            unter 12.500 € liegt, genügt eine
                            Selbsteinschätzung. Die Informationen dazu finden
                            Sie <Link to="faq">hier</Link>. Und das
                            Selbsteinschätzungsformular finden Sie{" "}
                            <Link to="#">hier</Link>.
                        </p>
                        <p>
                            Hinweis: Alternativ ist eine Versicherung zum Markt-
                            oder Wiederaufbauwert möglich. Falls dies gewünscht
                            ist, geben Sie mir bitte einen Hinweis.
                            Erläuterungen zu den verschiedenen
                            Versicherungswerten finden Sie in diesem Infoblatt
                        </p>
                        <label>
                            <span>Erst-/Alltagsfahrzeug vorhanden?*</span>
                            <label>
                                <input
                                    type="radio"
                                    name="Erstfahrzeug vorhanden?"
                                    value="Ja"
                                    required
                                />
                                <span>Ja</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Erstfahrzeug vorhanden?"
                                    value="Nein"
                                    required
                                />
                                <span>Nein</span>
                            </label>
                        </label>
                        <label>
                            <span>Wohnumfeld*</span>
                            <label>
                                <input
                                    type="radio"
                                    name="Wohnumfeld"
                                    value="Einfamilienhaus"
                                    required
                                />
                                <span>Einfamilienhaus</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Wohnumfeld"
                                    value="Eigentumswohnung"
                                    required
                                />
                                <span>Eigentumswohnung</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Wohnumfeld"
                                    value="Kein Wohneigentum"
                                    required
                                />
                                <span>Kein Wohneigentum</span>
                            </label>
                        </label>
                        <label>
                            <span>Nutzer des KFZ*</span>
                            <select name="Nutzer[]" required>
                                <option value="Nur Sie selbst">
                                    Nur Sie selbst
                                </option>
                                <option value="Sie und Partner">
                                    Sie und Partner
                                </option>
                                <option value="Sie, Partner und Kinder">
                                    Sie, Partner und Kinder
                                </option>
                                <option value="Auch andere">Auch andere</option>
                            </select>
                        </label>
                        <TextInput
                            label="Geburtsdatum des jüngsten Fahrers*"
                            type="text"
                            name="Geburtsdatum des jüngsten Fahrers"
                            required
                        />
                        <label>
                            <span>Gewünschter Versicherungsumfang:*</span>
                            <label>
                                <input
                                    type="checkbox"
                                    name="Versicherungsumfang"
                                    value="Grunddeckung"
                                />
                                <span>Grunddeckung</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="Versicherungsumfang"
                                    value="Allgefahrendeckung"
                                />
                                <span>Allgefahrendeckung</span>
                            </label>
                        </label>
                        <p>
                            Hinweis: Erläuterungen zu den verschiedenen
                            Versicherungsformen finden Sie hier
                        </p>

                        <TextInput
                            label="Unverbindlich geplanter Versicherungsbeginn"
                            type="text"
                            name="Geplanter Versicherungsbeginn"
                        />
                        <label>
                            <span>Ergänzende Angaben / Fragen</span>
                            <textarea
                                name="Ergänzende Angaben"
                                id=""
                                cols="30"
                                rows="10"
                            />
                        </label>
                        <label id="terms">
                            <label>
                                <input type="checkbox" required />
                                <span>
                                    Ich akzeptiere die Übertragung und
                                    Speicherung meiner Daten zum Zwecke des
                                    angebotenen Services.
                                </span>
                            </label>
                        </label>
                        <input type="submit" value="Abschicken" />
                    </StyledForm>
                </StyledSection>
            </StandardLayout>
        )
    }
}

export default IndexPage
