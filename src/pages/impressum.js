import React from "react"
// import { Link } from "gatsby"

import AlternativeLayout from "../components/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from '../components/layout/SupportSection'
import ImpressumCopy from '../../content/copy/ImpressumCopy'
import Button from '../components/Button'


const SecondPage = () => (
    <AlternativeLayout>
        <SEO title="Impressum" />
        <SupportSection
            h1={<h1>Impressum</h1>}
            p={<p>Keine Antwort gefunden?<br/>
                Erreichen Sie mich unter</p>}
        >
            <ImpressumCopy/>
            <br/>
            <Button link="/" primary>Zurück zur Startseite</Button>

        </SupportSection>
    </AlternativeLayout>
)

export default SecondPage
