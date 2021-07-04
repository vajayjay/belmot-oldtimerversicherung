import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledError = styled(ErrorMessage)`
    color: var(--color-error);
`
const FormError = styled.p`
    color: var(--color-error);
    background: rgba(242, 62, 62, 0.1);
    padding: var(--space-m);
    border: 2px solid var(--color-error);
`

const StyledField = styled(Field)`
    border: ${(props) => props.border || ""}!important;
    border-radius: 15px;
`
const StyledH2 = styled.h2`
    font-size: 18px;
    margin: 40px 0 18px 0;
    @media ${device.tablet} {
        font-size: 24px;
    }
`
const Button = styled.button`
    display: inline-block;
    background: #2a72d3;
    background: var(--color-primary);
    border: none;
    color: var(--color-white);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    padding: 1rem 2rem;
    margin-bottom: var(--space-s);
    width: 100%;
    transform: translateY(0);
    transition: all var(--time-fast);

    :hover {
        color: var(--color-white);
        background: var(--color-primary-light);
        transform: translateY(-1px);
        transition: all var(--time-fast);
    }
    :active {
        background: var(--color-primary-dark);
        transform: translateY(1px);
    }
`

// Netlify Form bits
const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

// YUP Validation Form Schmea
const FormSchema = Yup.object().shape({
    // same shape as initial values in Formik
    anrede: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    vorname: Yup.string()
        .min(2, "Ihre Eingabe ist zu kurz")
        .max(50, "Too Long!")
        .required("Dieses Feld ist ein Pflichtfeld"),
    nachname: Yup.string()
        .min(2, "Ihre Eingabe ist zu kurz")
        .max(50, "Too Long!")
        .required("Dieses Feld ist ein Pflichtfeld"),
    geburtsdatum: Yup.string()
        .min(4, "Ihre Eingabe ist zu kurz")
        .required("Dieses Feld ist ein Pflichtfeld"),
    strasse: Yup.string()
        .min(3, "Ihre Eingabe ist zu kurz")
        .required("Dieses Feld ist ein Pflichtfeld"),
    hausnummer: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    plz: Yup.string()
        .min(4, "Ihre Eingabe ist zu kurz")
        .required("Dieses Feld ist ein Pflichtfeld"),
    ort: Yup.string()
        .min(2, "Ihre Eingabe ist zu kurz")
        .required("Dieses Feld ist ein Pflichtfeld"),
    email: Yup.string()
        .email("Ihre Eingabe ist keine vollständige E-Mail-Adresse")
        .required("Dieses Feld ist ein Pflichtfeld"),
    telefon: Yup.string(),
    mitglied: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    oldtimerclub: Yup.string(),
    sammlung: Yup.string(),
    kennzeichen: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    // .min(, "Ihre Eingabe ist zu kurz")
    // .required("Dieses Feld ist ein Pflichtfeld"),
    farbe: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    historisch: Yup.string(),
    saison: Yup.string(),
    "saison-start": Yup.string(),
    "saison-ende": Yup.string(),
    zugelassen: Yup.string(),
    fahrzeugart: Yup.mixed().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        // then: Yup.array().min(1, "Dieses Feld ist ein Pflichtfeld"),
    }),
    hersteller: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    modellname: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    baureihe: Yup.string(),
    karosserieform: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    spitzname: Yup.string(),
    erstzulassung: Yup.string()
        .min(4, "Ihre Eingabe ist zu kurz")
        .when("sammlung", {
            is: "nein",
            then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        }),
    verwendung: Yup.string()
        .min(4, "Ihre Eingabe ist zu kurz")
        .when("fahrzeugart", {
            is: "Traktor",
            then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        })
        .when("fahrzeugart", {
            is: "LKW",
            then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        })
        .when("fahrzeugart", {
            is: "Omnibus",
            then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        })
        .when("fahrzeugart", {
            is: "Wohnmobil",
            then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        })
        .when("fahrzeugart", {
            is: "Sonstige",
            then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        }),
    wert: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    fahrleistung: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    motorstaerke: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    gesamtkilometerleistung: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    fahrzeugzustand: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    originalzustand: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    umbauten: Yup.string(),
    oelfeuchte: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    "oelfeuchte-details": Yup.string(),
    abstellort: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    wertgutachten: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    // "wertgutachten-datum": Yup.string(),
    "wertgutachten-datum": Yup.string().when("wertgutachten", {
        is: (wertgutachten) => wertgutachten === "ja",
        then: Yup.string().when("sammlung", {
            is: "nein",
            then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
        }),
    }),
    alltagsfahrzeug: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    wohnumfeld: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string()
            .min(4, "Ihre Eingabe ist zu kurz")
            .required("Dieses Feld ist ein Pflichtfeld"),
    }),
    nutzer: Yup.string().when("sammlung", {
        is: "nein",
        then: Yup.string().required("Dieses Feld ist ein Pflichtfeld"),
    }),
    "geburtsdatum-juengster-fahrer": Yup.string(),
    versicherungsumfang: Yup.mixed().when("sammlung", {
        is: "nein",
        then: Yup.array().min(1, "Dieses Feld ist ein Pflichtfeld"),
    }),
    versicherungsbeginn: Yup.string(),
    fragen: Yup.string(),
    akzeptiert: Yup.bool()
        .test(
            "akzeptiert",
            "Bitte akzeptieren Sie die Nutzungsbedingungen",
            (value) => value === true
        )
        .required("Bitte akzeptieren Sie die Nutzungsbedingungen"),
})

// if (FormSchema.wertgutachten === "ja") {
//     console.log("yes")
//     FormSchema["wertgutachten-datum"] = Yup.string().required(
//         "Dieses Feld ist ein Pflichtfeld"
//     )
// }

function Checkbox(props) {
    return (
        <Field name={props.name}>
            {({ field, form }) => (
                <label>
                    <input
                        type="checkbox"
                        {...props}
                        checked={field.value.includes(props.value)}
                        onChange={() => {
                            if (field.value.includes(props.value)) {
                                const nextValue = field.value.filter(
                                    (value) => value !== props.value
                                )
                                form.setFieldValue(props.name, nextValue)
                            } else {
                                const nextValue = field.value.concat(
                                    props.value
                                )
                                form.setFieldValue(props.name, nextValue)
                            }
                        }}
                    />
                    {props.value}
                </label>
            )}
        </Field>
    )
}

const AnfrageFormular = () => (
    <div>
        <h1>Online-Anfrage</h1>
        <Formik
            initialValues={{
                "bot-field": "",
                "form-name": "anfrage",
                anrede: "Herr",
                vorname: "",
                nachname: "",
                geburtsdatum: "",
                strasse: "",
                hausnummer: "",
                plz: "",
                ort: "",
                email: "",
                telefon: "",
                mitglied: "",
                oldtimerclub: "",
                sammlung: "nein",
                kennzeichen: "",
                farbe: "",
                historisch: "",
                saison: "",
                "saison-start": "",
                "saison-ende": "",
                zugelassen: "nein",
                fahrzeugart: "",
                verwendung: "",
                hersteller: "",
                modellname: "",
                baureihe: "",
                karosserieform: "",
                spitzname: "",
                erstzulassung: "",
                wert: "",
                fahrleistung: "",
                motorstaerke: "",
                gesamtkilometerleistung: "",
                fahrzeugzustand: "",
                originalzustand: "ja",
                umbauten: "",
                oelfeuchte: "nein",
                "oelfeuchte-details": "",
                abstellort: "",
                wertgutachten: "nein",
                "wertgutachten-datum": "",
                alltagsfahrzeug: "",
                wohnumfeld: "",
                nutzer: "",
                "geburtsdatum-juengster-fahrer": "",
                versicherungsumfang: [],
                versicherungsbeginn: "",
                fragen: "",
                akzeptiert: false,
            }}
            validationSchema={FormSchema}
            onSubmit={(values) => {
                fetch(
                    "https://hook.integromat.com/fpxpeuvk4mjtdxmqifluia6yx8tsjssy",
                    {
                        method: "POST",
                        redirect: "follow",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: encode({
                            "form-name": "anfrage",
                            ...values,
                        }),
                    }
                )
                    .then((response) => {
                        // If response is ok
                        if (response.ok) {
                            // redirect to schaden-gemeldet page and remove
                            values.sammlung === "nein"
                                ? (window.location.href =
                                      "/anfrage-erfolgreich/")
                                : (window.location.href =
                                      "/anfrage-erfolgreich-sammlung/")
                        }
                    })
                    // If there is an error log it to console and reidrect to fehler page
                    .catch((error) => {
                        console.error("Error: ", error)
                        window.location.href = "/fehler/"
                    })
            }}
        >
            {({
                errors,
                touched,
                values,
                handleSubmit,
                isValid,
                submitCount,
            }) => (
                <Form onSubmit={handleSubmit}>
                    <Field type="hidden" name="bot-field" />
                    <Field type="hidden" name="form-name" />
                    <fieldset>
                        <legend>Anrede *</legend>
                        <label>
                            <Field
                                value="Herr"
                                type="radio"
                                name="anrede"
                                defaultChecked
                            />
                            Herr
                        </label>
                        <label>
                            <Field value="Frau" type="radio" name="anrede" />
                            Frau
                        </label>
                        <StyledError name="anrede" component="div" />
                    </fieldset>
                    <label>
                        <span>Vorname *</span>
                        <StyledField
                            type="text"
                            name="vorname"
                            border={
                                errors.vorname &&
                                touched.vorname &&
                                "3px solid red"
                            }
                        />
                        <StyledError name="vorname" component="div" />
                    </label>
                    <label>
                        <span>Nachname *</span>
                        <StyledField
                            type="text"
                            name="nachname"
                            border={
                                errors.nachname &&
                                touched.nachname &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="nachname" component="div" />
                    </label>
                    <label>
                        <span>Geburtsdatum *</span>
                        <StyledField
                            type="text"
                            name="geburtsdatum"
                            border={
                                errors.geburtsdatum &&
                                touched.geburtsdatum &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="geburtsdatum" component="div" />
                    </label>
                    <label>
                        <span>Straße *</span>
                        <StyledField
                            type="text"
                            name="strasse"
                            border={
                                errors.strasse &&
                                touched.strasse &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="strasse" component="div" />
                    </label>
                    <label>
                        <span>Hausnummer *</span>
                        <StyledField
                            type="text"
                            name="hausnummer"
                            border={
                                errors.hausnummer &&
                                touched.hausnummer &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="hausnummer" component="div" />
                    </label>
                    <label>
                        <span>Postleitzahl *</span>
                        <StyledField
                            type="text"
                            name="plz"
                            border={
                                errors.plz &&
                                touched.plz &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="plz" component="div" />
                    </label>
                    <label>
                        <span>Ort *</span>
                        <StyledField
                            type="text"
                            name="ort"
                            border={
                                errors.ort &&
                                touched.ort &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="ort" component="div" />
                    </label>
                    <label>
                        <span>E-Mail *</span>
                        <StyledField
                            name="email"
                            type="email"
                            border={
                                errors.email &&
                                touched.email &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="email" component="div" />
                    </label>
                    <label>
                        <span>Telefonnummer für evtl. Rückfragen</span>
                        <StyledField
                            name="telefon"
                            type="text"
                            border={
                                errors.telefon &&
                                touched.telefon &&
                                "3px solid var(--color-error)"
                            }
                        />
                        <StyledError name="telefon" component="div" />
                    </label>
                    <fieldset>
                        <legend>Mitglied in einem Oldtimerclub? *</legend>
                        <label>
                            <Field value="nein" type="radio" name="mitglied" />
                            Nein
                        </label>
                        <label>
                            <Field value="ja" type="radio" name="mitglied" />
                            Ja
                        </label>
                        <StyledError name="mitglied" component="div" />
                    </fieldset>
                    {values.mitglied === "ja" && (
                        <label>
                            <span>Name des Oldtimerclubs *</span>
                            <Field name="oldtimerclub" type="text" />
                            <StyledError name="oldtimerclub" component="div" />
                        </label>
                    )}
                    <br />
                    <fieldset>
                        <legend>
                            Wie viele Fahrzeuge möchten Sie versichern? *
                        </legend>
                        <label>
                            <Field value="nein" type="radio" name="sammlung" />
                            Eins
                        </label>
                        <label>
                            <Field value="ja" type="radio" name="sammlung" />
                            Zwei oder mehr
                        </label>
                        <StyledError name="sammlung" component="div" />
                    </fieldset>
                    <br />
                    {values.sammlung === "nein" && (
                        <div>
                            <StyledH2>Kennzeichen</StyledH2>
                            <label>
                                <span>
                                    KFZ-Kennzeichen oder Kennzeichen des
                                    Zulassungsbezirks *
                                </span>
                                <StyledField
                                    type="text"
                                    name="kennzeichen"
                                    border={
                                        errors.kennzeichen &&
                                        touched.kennzeichen &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError
                                    name="kennzeichen"
                                    component="div"
                                />
                            </label>
                            <fieldset>
                                <legend>Kennzeichen *</legend>
                                <label>
                                    <Field
                                        value="rot"
                                        type="radio"
                                        name="farbe"
                                    />
                                    Rot
                                </label>
                                <label>
                                    <Field
                                        value="schwarz"
                                        type="radio"
                                        name="farbe"
                                    />
                                    Schwarz
                                </label>
                                <StyledError name="farbe" component="div" />
                            </fieldset>
                            {values.farbe === "schwarz" && (
                                <div>
                                    <fieldset>
                                        <legend>
                                            Historisches Kennzeichen
                                        </legend>
                                        <label>
                                            <Field
                                                value="nein"
                                                type="radio"
                                                name="historisch"
                                            />
                                            Nein
                                        </label>
                                        <label>
                                            <Field
                                                value="ja"
                                                type="radio"
                                                name="historisch"
                                            />
                                            Ja
                                        </label>
                                        <StyledError
                                            name="historisch"
                                            component="div"
                                        />
                                    </fieldset>
                                    <fieldset>
                                        <legend>Saison-Kennzeichen</legend>
                                        <label>
                                            <Field
                                                value="nein"
                                                type="radio"
                                                name="saison"
                                            />
                                            Nein
                                        </label>
                                        <label>
                                            <Field
                                                value="ja"
                                                type="radio"
                                                name="saison"
                                            />
                                            Ja
                                        </label>
                                        <StyledError
                                            name="saison"
                                            component="div"
                                        />
                                    </fieldset>
                                    {values.saison === "ja" && (
                                        <div>
                                            <label>
                                                Von
                                                <Field
                                                    type="text"
                                                    name="saison-start"
                                                />
                                                <StyledError
                                                    name="saison-start"
                                                    component="div"
                                                />
                                            </label>
                                            <label>
                                                Bis
                                                <Field
                                                    type="text"
                                                    name="saison-ende"
                                                />
                                                <StyledError
                                                    name="saison-ende"
                                                    component="div"
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
                            )}
                            <br />
                            <StyledH2>Zulassung</StyledH2>
                            <fieldset>
                                <legend>
                                    Ist das KFZ bereits auf Sie zugelassen? *
                                </legend>
                                <label>
                                    <Field
                                        value="ja"
                                        type="radio"
                                        name="zugelassen"
                                    />
                                    Ja
                                </label>
                                <label>
                                    <Field
                                        value="nein"
                                        type="radio"
                                        name="zugelassen"
                                        defaultChecked
                                    />
                                    Nein
                                </label>
                                <StyledError
                                    name="zugelassen"
                                    component="div"
                                />
                            </fieldset>
                            <br />
                            <StyledH2>Fahrzeug-Informationen</StyledH2>
                            <fieldset>
                                <legend>Fahrzeugart *</legend>
                                <label>
                                    <Field
                                        value="PKW"
                                        type="radio"
                                        name="fahrzeugart"
                                        defaultChecked
                                    />
                                    PKW
                                </label>
                                <label>
                                    <Field
                                        value="Motorrad"
                                        type="radio"
                                        name="fahrzeugart"
                                    />
                                    Motorrad
                                </label>
                                <label>
                                    <Field
                                        value="Traktor"
                                        type="radio"
                                        name="fahrzeugart"
                                    />
                                    Traktor (ohne Nutzung zum ursprünglichen
                                    Zweck)
                                </label>
                                <label>
                                    <Field
                                        value="LKW"
                                        type="radio"
                                        name="fahrzeugart"
                                    />
                                    LKW (ohne Nutzung zum ursprünglichen Zweck)
                                </label>
                                <label>
                                    <Field
                                        value="Omnibus"
                                        type="radio"
                                        name="fahrzeugart"
                                    />
                                    Omnibus (ohne Nutzung zum ursprünglichen
                                    Zweck)
                                </label>
                                <label>
                                    <Field
                                        value="Wohnmobil"
                                        type="radio"
                                        name="fahrzeugart"
                                    />
                                    Wohnmobil (ohne Nutzung zum ursprünglichen
                                    Zweck)
                                </label>
                                <label>
                                    <Field
                                        value="Sonstige"
                                        type="radio"
                                        name="fahrzeugart"
                                    />
                                    Sonstige
                                </label>
                                <StyledError
                                    name="fahrzeugart"
                                    component="div"
                                />
                            </fieldset>
                            <br />
                            {(values.fahrzeugart === "Traktor" ||
                                values.fahrzeugart === "LKW" ||
                                values.fahrzeugart === "Omnibus" ||
                                values.fahrzeugart === "Wohnmobil" ||
                                values.fahrzeugart === "Sonstige") && (
                                <label>
                                    <span>
                                        Kurze Beschreibung der geplanten
                                        Verwendung / Einsatzzwecke *
                                    </span>
                                    <Field
                                        component="textarea"
                                        name="verwendung"
                                    />
                                    <StyledError
                                        name="verwendung"
                                        component="div"
                                    />
                                </label>
                            )}
                            <br />
                            <label>
                                <span>Hersteller *</span>
                                <StyledField
                                    type="text"
                                    name="hersteller"
                                    border={
                                        errors.hersteller &&
                                        touched.hersteller &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError
                                    name="hersteller"
                                    component="div"
                                />
                            </label>
                            <label>
                                <span>Modellname *</span>
                                <StyledField
                                    type="text"
                                    name="modellname"
                                    border={
                                        errors.modellname &&
                                        touched.modellname &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError
                                    name="modellname"
                                    component="div"
                                />
                            </label>
                            <label>
                                <span>Baureihe </span>
                                <StyledField
                                    type="text"
                                    name="baureihe"
                                    border={
                                        errors.baureihe &&
                                        touched.baureihe &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError name="baureihe" component="div" />
                            </label>
                            <label>
                                <span>Karosserieform *</span>
                                <Field component="select" name="karosserieform">
                                    <option value="">Bitte auswählen</option>
                                    <option value="limousine">Limousine</option>
                                    <option value="kombi">Kombi</option>
                                    <option value="coupe">Coupé</option>
                                    <option value="cabrio">Cabrio</option>
                                    <option value="bus">Bus</option>
                                    <option value="sonstige">Sonstige</option>
                                </Field>
                                <StyledError
                                    name="karosserieform"
                                    component="div"
                                />
                            </label>
                            <label>
                                <span>Motorsträke in kW *</span>
                                <StyledField
                                    type="text"
                                    name="motorstaerke"
                                    border={
                                        errors.motorstaerke &&
                                        touched.motorstaerke &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError
                                    name="motorstaerke"
                                    component="div"
                                />
                            </label>
                            <label>
                                <span>Spitzname (wenn bekannt)</span>
                                <StyledField
                                    type="text"
                                    name="spitzname"
                                    border={
                                        errors.spitzname &&
                                        touched.spitzname &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError name="spitzname" component="div" />
                            </label>
                            <label>
                                <span>Erstzulassung *</span>
                                <StyledField
                                    type="text"
                                    name="erstzulassung"
                                    border={
                                        errors.erstzulassung &&
                                        touched.erstzulassung &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError
                                    name="erstzulassung"
                                    component="div"
                                />
                            </label>
                            <label>
                                <span>
                                    Versicherungssumme (Wiederbeschaffungswert)
                                    in € *
                                </span>
                                <StyledField
                                    type="text"
                                    name="wert"
                                    border={
                                        errors.wert &&
                                        touched.wert &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError name="wert" component="div" />
                            </label>
                            <p>
                                Alternativ ist eine Versicherung zum Markt- oder
                                Wiederaufbauwert möglich. Falls dies gewünscht
                                ist, geben Sie mir bitte einen Hinweis.
                                Erläuterungen zu den verschiedenen
                                Versicherungswerten finden Sie in{" "}
                                <a
                                    href="../Infoblatt-Versicherungswerte.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    diesem Infoblatt
                                </a>
                            </p>
                            <br />
                            <label>
                                <span>Jährliche Fahrleistung *</span>
                                <Field component="select" name="fahrleistung">
                                    <option value="">Bitte auswählen</option>
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
                                </Field>
                                <StyledError
                                    name="fahrleistung"
                                    component="div"
                                />
                            </label>
                            <p>
                                Über 9.000 km pro Jahr hinausgehende
                                Kilometerleistungen sind nicht versicherbar.
                            </p>
                            <br />

                            <label>
                                <span>
                                    Aktuelle Gesamtkilometerleistung des
                                    Fahrzeugs in km*
                                </span>
                                <StyledField
                                    type="text"
                                    name="gesamtkilometerleistung"
                                    border={
                                        errors.gesamtkilometerleistung &&
                                        touched.gesamtkilometerleistung &&
                                        "3px solid var(--color-error)"
                                    }
                                />
                                <StyledError
                                    name="gesamtkilometerleistung"
                                    component="div"
                                />
                            </label>
                            <label>
                                <span>Fahrzeugzustand *</span>
                                <Field
                                    component="select"
                                    name="fahrzeugzustand"
                                >
                                    <option value="">Bitte auswählen</option>
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
                                </Field>
                                <StyledError
                                    name="fahrzeugzustand"
                                    component="div"
                                />
                            </label>
                            <fieldset>
                                <legend>
                                    Das KFZ befindet sich weitgehend im
                                    Originalzustand ohne Umbauten (z.B. anderer
                                    Motor, Tieferlegung, Tuning etc.) *
                                </legend>
                                <label>
                                    <Field
                                        value="ja"
                                        type="radio"
                                        name="originalzustand"
                                        defaultChecked
                                    />
                                    Ja
                                </label>
                                <label>
                                    <Field
                                        value="nein"
                                        type="radio"
                                        name="originalzustand"
                                    />
                                    Nein
                                </label>
                                <StyledError
                                    name="originalzustand"
                                    component="div"
                                />
                            </fieldset>
                            {values.originalzustand === "nein" && (
                                <label>
                                    <span>
                                        Welche Umbauten hat das Fahrzeug? *
                                    </span>
                                    <StyledField type="text" name="umbauten" />
                                    <StyledError
                                        name="umbauten"
                                        component="div"
                                    />
                                </label>
                            )}
                            <fieldset>
                                <legend>
                                    Der letzte TÜV-Bericht enthält Hinweise auf
                                    Ölfeuchte an Motor und/oder Getriebe *
                                </legend>
                                <label>
                                    <Field
                                        value="nein"
                                        type="radio"
                                        name="oelfeuchte"
                                        defaultChecked
                                    />
                                    Nein
                                </label>
                                <label>
                                    <Field
                                        value="ja"
                                        type="radio"
                                        name="oelfeuchte"
                                    />
                                    Ja
                                </label>
                                <StyledError
                                    name="oelfeuchte"
                                    component="div"
                                />
                            </fieldset>
                            {values.oelfeuchte === "ja" && (
                                <label>
                                    <span>Wenn ja, bitte erläutern</span>
                                    <StyledField
                                        type="text"
                                        name="oelfeuchte-details"
                                    />
                                    <StyledError
                                        name="oelfeuchte-details"
                                        component="div"
                                    />
                                </label>
                            )}
                            <label>
                                <span>Überwiegender Abstellort *</span>
                                <Field component="select" name="abstellort">
                                    <option value="">Bitte auswählen</option>
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
                                </Field>
                                <StyledError
                                    name="abstellort"
                                    component="div"
                                />
                            </label>
                            <fieldset>
                                <legend>Es gibt ein Wertgutachten *</legend>
                                <label>
                                    <Field
                                        value="nein"
                                        type="radio"
                                        name="wertgutachten"
                                        defaultChecked
                                    />
                                    Nein
                                </label>
                                <label>
                                    <Field
                                        value="ja"
                                        type="radio"
                                        name="wertgutachten"
                                    />
                                    Ja
                                </label>
                                <StyledError
                                    name="wertgutachten"
                                    component="div"
                                />
                            </fieldset>
                            {values.wertgutachten === "ja" && (
                                <label>
                                    <span>Datum des Gutachtens *</span>
                                    <Field
                                        type="text"
                                        name="wertgutachten-datum"
                                        placeholder="TT.MM.JJJJ"
                                    />
                                    <StyledError
                                        name="wertgutachten-datum"
                                        component="div"
                                    />
                                </label>
                            )}
                            <p>
                                Wenn es kein Wertgutachten gibt und der
                                Fahrzeugwert unter 12.500 € liegt, genügt eine
                                Selbsteinschätzung. Die Informationen dazu
                                finden Sie <Link to="/faq">hier</Link>. Und das
                                Selbsteinschätzungsformular finden Sie{" "}
                                <a
                                    href="../Selbsteinschaetzung.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    hier
                                </a>
                                .
                            </p>
                            <br />
                            <fieldset>
                                <legend>
                                    Erst-/Alltagsfahrzeug vorhanden? *
                                </legend>
                                <label>
                                    <Field
                                        value="ja"
                                        type="radio"
                                        name="alltagsfahrzeug"
                                    />
                                    Ja
                                </label>
                                <label>
                                    <Field
                                        value="nein"
                                        type="radio"
                                        name="alltagsfahrzeug"
                                    />
                                    Nein
                                </label>
                                <StyledError
                                    name="alltagsfahrzeug"
                                    component="div"
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Wohnumfeld *</legend>
                                <label>
                                    <Field
                                        value="einfamilienhaus"
                                        type="radio"
                                        name="wohnumfeld"
                                    />
                                    Einfamilienhaus
                                </label>
                                <label>
                                    <Field
                                        value="eigentumswohnung"
                                        type="radio"
                                        name="wohnumfeld"
                                    />
                                    Eigentumswohnung
                                </label>
                                <label>
                                    <Field
                                        value="Kein Wohneigentum"
                                        type="radio"
                                        name="wohnumfeld"
                                    />
                                    Kein Wohneigentum
                                </label>
                                <StyledError
                                    name="wohnumfeld"
                                    component="div"
                                />
                            </fieldset>
                            <label>
                                <span>Nutzer des KFZ *</span>
                                <Field component="select" name="nutzer">
                                    <option value="">Bitte auswählen</option>
                                    <option value="Nur Sie selbst">
                                        Nur Sie selbst
                                    </option>
                                    <option value="Sie und Partner">
                                        Sie und Partner
                                    </option>
                                    <option value="Sie, Partner und Kinder">
                                        Sie, Partner und Kinder
                                    </option>
                                    <option value="Auch andere">
                                        Auch andere
                                    </option>
                                </Field>
                                <StyledError name="nutzer" component="div" />
                            </label>
                            {values.nutzer !== "Nur Sie selbst" &&
                                values.nutzer !== "" && (
                                    <label>
                                        <span>
                                            Geburtsdatum des jüngsten Fahrers *
                                        </span>
                                        <Field
                                            type="text"
                                            name="geburtsdatum-juengster-fahrer"
                                        />
                                        <StyledError
                                            name="geburtsdatum-juengster-fahrer"
                                            component="div"
                                        />
                                    </label>
                                )}
                            <fieldset>
                                <legend>
                                    Gewünschter Versicherungsumfang *
                                </legend>
                                <Checkbox
                                    value="Grunddeckung"
                                    name="versicherungsumfang"
                                />
                                <Checkbox
                                    value="Allgefahrendeckung"
                                    name="versicherungsumfang"
                                />
                                <StyledError
                                    name="versicherungsumfang"
                                    component="div"
                                />
                            </fieldset>
                            <p>
                                Erläuterungen zu den verschiedenen
                                Versicherungsformen finden Sie{" "}
                                <a
                                    href="../Vergleich-Allrisk-zu-Grunddeckung.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    hier
                                </a>
                            </p>
                            <br />
                        </div>
                    )}
                    <label>
                        <span>Unverbindlich geplanter Versicherungsbeginn</span>
                        <Field type="text" name="versicherungsbeginn" />
                        <StyledError
                            name="versicherungsbeginn"
                            component="div"
                        />
                    </label>
                    <label>
                        <span>Ergänzende Angaben / Fragen</span>
                        <Field component="textarea" name="fragen" />
                        <StyledError name="fragen" component="div" />
                    </label>
                    <fieldset>
                        <label>
                            <Field type="checkbox" name="akzeptiert" />
                            <span className="terms-and-conditions">
                                Ich akzeptiere die Übertragung und Speicherung
                                meiner Daten zum Zwecke des angebotenen
                                Services.{" "}
                                <Link to="/datenschutz">Mehr erfahren</Link>
                                <StyledError
                                    name="akzeptiert"
                                    component="div"
                                />
                            </span>
                        </label>
                    </fieldset>
                    <Button type="submit">Absenden</Button>

                    {isValid === false && submitCount > 0 && (
                        <FormError>
                            Einige Pflichtfelder sind noch nicht ausgefüllt.
                            Bitte vergewissern Sie sich, dass alle oben rot
                            markierten Felder vollständig ausgefüllt sind.
                        </FormError>
                    )}
                </Form>
            )}
        </Formik>
    </div>
)

export default AnfrageFormular
