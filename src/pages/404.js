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

            <Button primary link="/">
                Zurück zur Startseite
            </Button>
        </SectionCenteredFullHeight>
    </StandardLayout>
)

export default NotFoundPage
