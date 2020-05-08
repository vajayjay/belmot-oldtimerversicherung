import React from "react"
// import { Link } from "gatsby"

import AlternativeLayout from "../components/pagelayouts/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from "../components/layout/SupportSection"
import Button from "../components/Button"
import DatenschutzCopy from "../../content/copy/DatenschutzCopy"

const SecondPage = () => (
    <AlternativeLayout>
        <SEO title="Datenschutz" index="noindex" />
        <SupportSection
            h1={<h1>Datenschutz</h1>}
            // p={<p>Ich behandle Ihre Daten mit Vorsicht.</p>}
        >
            <DatenschutzCopy />
            <br />
            <Button link="/" primary="primary">
                Zurück zur Startseite
            </Button>
        </SupportSection>
    </AlternativeLayout>
)

export default SecondPage
