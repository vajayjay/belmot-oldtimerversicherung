import React from "react"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SEO from "../components/Seo"
import Button from "../components/Button"

import SectionCenteredFullHeight from "../components/layout/SectionCenteredFullHeight"

const NotFoundPage = () => (
    <StandardLayout>
        <SEO title="404: Not found" />
        <SectionCenteredFullHeight>
            <h1>Diese Seite konnte leider nicht gefunden werden.</h1>
            <p>
                Bitte geben Sie mir bescheid, dass dieser Link nicht mehr
                funktioniert:
                <br />
                <a href="mailto:info@belmot-oldtimerversicherung.de?subject=Report%20404:%20Seite%20nicht%20gefunden&amp;body=Hallo%20Herr%20Blaskewitz%2C%20der%20folgender%20Link%20funktioniert%20leider%20nicht%20mehr%3A%20%3Chier%20LINK%20einsetzten%3E">
                    info@belmot-oldtimerversicherung.de
                </a>
            </p>
            <br />
            <Button primary link="/">
                Zur Startseite
            </Button>
        </SectionCenteredFullHeight>
    </StandardLayout>
)

export default NotFoundPage
