import React from "react"
import { Link } from "gatsby"

import AlternativeLayout from "../components/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from '../components/layout/SupportSection'
import ImpressumCopy from '../../content/copy/ImpressumCopy'

const SecondPage = () => (
  <AlternativeLayout>
    <SEO title="Impressum" />
    <SupportSection
      h1={<h1>Impressum</h1>}
      p={<p>Keine Antwort gefunden?<br/>
        Erreichen Sie mich unter</p>}
      >
        <ImpressumCopy/>
        <Link to="/">Zurück zur Startseite</Link>
    </SupportSection>
  </AlternativeLayout>
)

export default SecondPage
