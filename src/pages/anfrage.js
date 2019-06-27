import React from "react"
import { Link } from "gatsby"

import StandardLayout from "../components/pagelayouts/StandardLayout"
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
    & > p {
        margin-top: calc(-1 * var(--space-l));
        font-size: 16px;
    }
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
                        netlify-honeypot="bot-field"
                        data-netlify="true"
                    >
                        <input type="hidden" name="bot-field" />
                        {/* Important so netlify forms works with gatsby */}
                        <input type="hidden" name="form-name" value="contact" />
                        <h1>Online-Anfrage</h1>
                        <MobileDisclaimer>
                            Wir empehlen Ihnen das folgende Formular auf Grund
                            seiner Länge auf einem Desktop-Computer auszufüllen.
                        </MobileDisclaimer>
                        <StyledSectionH2>
                            Persönliche Informationen
                        </StyledSectionH2>
                        <fieldset>
                            <legend>Anrede</legend>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        name="anrede"
                                        value="Herr"
                                        defaultChecked
                                    />{" "}
                                    Herr
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        name="anrede"
                                        value="Frau"
                                    />{" "}
                                    Frau
                                </label>
                            </p>
                        </fieldset>
                        <TextInput
                            label="Vorname"
                            name="vorname"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Nachname"
                            name="nachname"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Geburtsdatum des Fahrzeughalters"
                            name="Geburtsdatum"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Straße und Hausnummer"
                            name="Strasse-&-Hausnummer"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Postleitzahl"
                            name="postleitzahl"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Ort"
                            name="ort"
                            type="text"
                            required
                        />
                        <TextInput
                            label="Email"
                            name="email"
                            type="email"
                            required
                        />
                        <fieldset>
                            <legend>
                                Sind Sie Mitglied in einem Oldtimerclub?
                            </legend>
                            <label>
                                <input
                                    type="radio"
                                    name="oldtimerclub"
                                    defaultChecked
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="oldtimerclub"
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                        </fieldset>
                        <TextInput
                            label="Name des Oldtimerclubs"
                            name="oldtimerclub-name"
                            type="text"
                        />
                        <br />
                        <StyledSectionH2>
                            Fahrzeug-Informationen
                        </StyledSectionH2>
                        <fieldset>
                            <legend>Fahrzeugart *</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="fahrzeugart"
                                    defaultChecked
                                    value="PKW"
                                />
                                <span>PKW</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="fahrzeugart"
                                    value="Motorrad"
                                />
                                <span>Motorrad</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="fahrzeugart"
                                    value="Traktor"
                                />
                                <span>Traktor</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="fahrzeugart"
                                    value="Andere"
                                />
                                <span>Andere</span>
                            </label>
                        </fieldset>
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
                        <br />
                        <fieldset>
                            <legend>Kennzeichen</legend>
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
                        </fieldset>
                        <TextInput label="Von" type="text" name="Von" />
                        <TextInput label="Bis" type="text" name="Bis" />
                        <fieldset>
                            <legend>Historisches Kennzeichen</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="historisches-kennzeichen"
                                    defaultChecked
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="historisches-kennzeichen"
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                        </fieldset>
                        <TextInput
                            label="Hersteller *"
                            type="text"
                            name="Hersteller"
                            required
                        />
                        <TextInput
                            label="Typ *"
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
                            label="Versicherungssumme (Wiederbeschaffungswert) in € *"
                            type="text"
                            name="Versicherungssumme in €"
                            required
                        />
                        <label>
                            <legend>Jährliche Fahrleistung *</legend>
                            <select name="Fahrleistung[]" required>
                                <option value="bis 1.000 km">
                                    bis 1.000 km
                                </option>
                                <option value="bis 2.000 km">
                                    bis 2.000 km
                                </option>
                                <option value="bis 3.000 km">
                                    bis 3.000 km
                                </option>
                                <option value="bis 4.000 km">
                                    bis 4.000 km
                                </option>
                                <option value="bis 5.000 km">
                                    bis 5.000 km
                                </option>
                                <option value="bis 6.000 km">
                                    bis 6.000 km
                                </option>
                                <option value="bis 7.000 km">
                                    bis 7.000 km
                                </option>
                                <option value="bis 8.000 km">
                                    bis 8.000 km
                                </option>
                                <option value="bis 9.000 km">
                                    bis 9.000 km
                                </option>
                            </select>
                        </label>
                        <p>
                            Bitte beachten Sie, dass die angegebene
                            Kilometerleistung Auswirkungen auf die
                            Beitragsberechnung hat. Geben Sie also bitte im
                            Rahmen des Möglichen eine realistische und nicht
                            vorsichtig zu hoch angesetzte Kilometerleistung an.
                            Über 9.000 km pro Jahr hinausgehende
                            Kilometerleistungen sind nicht versicherbar.
                        </p>
                        <br />
                        <TextInput
                            label="Motorsträke in KW"
                            type="text"
                            name="Motorsträke in KW"
                        />
                        <label>
                            <legend>Fahrzeugzustand *</legend>
                            <select name="Fahrzeugzustand[]" required>
                                <option value="Makellos – Note 1">
                                    Makellos – Note 1
                                </option>
                                <option value="Sehr gut – Note 1 - 2">
                                    Sehr gut – Note 1 - 2
                                </option>
                                <option value="Gut – Note 2">
                                    Gut – Note 2
                                </option>
                                <option value="Befriedigend – Note 2 - 3">
                                    Befriedigend – Note 2 - 3
                                </option>
                                <option value="Gebraucht – Note 3">
                                    Gebraucht – Note 3
                                </option>
                                <option value="Ausreichend – Note 3 - 4">
                                    Ausreichend – Note 3 - 4
                                </option>
                                <option value="Verbraucht – Note 4">
                                    Verbraucht – Note 4
                                </option>
                                <option value="Mangelhaft – Note 4 - 5">
                                    Mangelhaft – Note 4 - 5
                                </option>
                                <option value="Restaurierungsbedürftig - Notte 5">
                                    Restaurierungsbedürftig - Note 5
                                </option>
                            </select>
                        </label>
                        <fieldset>
                            <legend>
                                Das KFZ befindet sich weitgehend im
                                Originalzustand ohne Umbauten (z.B. anderer
                                Motor, Tieferlegung, Tuning etc.) *
                            </legend>
                            <label>
                                <input
                                    type="radio"
                                    name="originalzustand"
                                    defaultChecked
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="originalzustand"
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                        </fieldset>
                        <TextInput
                            label="Wenn nein, welche Umauten?"
                            type="text"
                            name="Umbauten"
                        />
                        <fieldset>
                            <legend>
                                Der letzte TÜV-Bericht enthält Hinweise auf
                                Ölfeuchte an Motor und/oder Getriebe *
                            </legend>
                            <label>
                                <input
                                    type="radio"
                                    name="oelfeuchte"
                                    value="Nein"
                                    defaultChecked
                                    required
                                />
                                <span>Nein</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="oelfeuchte"
                                    value="Ja"
                                    required
                                />
                                <span>Ja</span>
                            </label>
                        </fieldset>
                        <TextInput
                            label="Wenn ja, bitte erläutern"
                            type="text"
                            name="Erläuterung zur Ölfeuchte"
                        />
                        <label>
                            <legend>Überwiegender Abstellort *</legend>
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
                        <fieldset>
                            <legend>Es gibt ein Wertgutachten *</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="wergutachten"
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="wergutachten"
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                        </fieldset>
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
                            <Link to="/downloads/Selbsteinschaetzung.pdf">
                                hier
                            </Link>
                            .
                            <br />
                            Hinweis: Alternativ ist eine Versicherung zum Markt-
                            oder Wiederaufbauwert möglich. Falls dies gewünscht
                            ist, geben Sie mir bitte einen Hinweis.
                            Erläuterungen zu den verschiedenen
                            Versicherungswerten finden Sie in diesem Infoblatt
                        </p>
                        <br />
                        <br />

                        <fieldset>
                            <legend>Erst-/Alltagsfahrzeug vorhanden? *</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="erstfahrzeug-vorhanden"
                                    value="Ja"
                                />
                                <span>Ja</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="erstfahrzeug-vorhanden"
                                    value="Nein"
                                />
                                <span>Nein</span>
                            </label>
                        </fieldset>
                        <fieldset>
                            <legend>Wohnumfeld *</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="wohnumfeld"
                                    value="Einfamilienhaus"
                                />
                                <span>Einfamilienhaus</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="wohnumfeld"
                                    value="Eigentumswohnung"
                                />
                                <span>Eigentumswohnung</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="wohnumfeld"
                                    value="Kein Wohneigentum"
                                />
                                <span>Kein Wohneigentum</span>
                            </label>
                        </fieldset>
                        <label>
                            <span>Nutzer des KFZ *</span>
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
                            label="Geburtsdatum des jüngsten Fahrers *"
                            type="text"
                            name="Geburtsdatum des jüngsten Fahrers"
                            required
                        />
                        <fieldset>
                            <legend>Gewünschter Versicherungsumfang *</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="versicherungsumfang"
                                    value="Grunddeckung"
                                />
                                <span>Grunddeckung</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="versicherungsumfang"
                                    value="Allgefahrendeckung"
                                />
                                <span>Allgefahrendeckung</span>
                            </label>
                        </fieldset>
                        <p>
                            Hinweis: Erläuterungen zu den verschiedenen
                            Versicherungsformen finden Sie hier
                        </p>
                        <br />

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
                                rows="5"
                            />
                        </label>
                        <fieldset id="terms">
                            <label>
                                <input
                                    type="checkbox"
                                    required
                                    name="Terms and conditions"
                                />
                                <span>
                                    Ich akzeptiere die Übertragung und
                                    Speicherung meiner Daten zum Zwecke des
                                    angebotenen Services.
                                </span>
                            </label>
                        </fieldset>
                        <input type="submit" value="Absenden" />
                    </StyledForm>
                </StyledSection>
            </StandardLayout>
        )
    }
}

export default IndexPage
