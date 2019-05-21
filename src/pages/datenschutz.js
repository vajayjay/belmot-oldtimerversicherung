import React from "react"
// import { Link } from "gatsby"

import AlternativeLayout from "../components/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from "../components/layout/SupportSection"
import Button from "../components/Button"

const SecondPage = () => (
    <AlternativeLayout>
        <SEO title="Datenschutz" />
        <SupportSection
            h1={<h1>Datenschutz</h1>}
            p={<p>Ich behandle ihre Daten mit Vorsicht.</p>}
        >
            <Button link="/" primary>
                Zurück zur Startseite
            </Button>
        </SupportSection>
    </AlternativeLayout>
)

export default SecondPage
