import React from "react"
import { Link } from "gatsby"

import AlternativeLayout from "../components/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from '../components/layout/SupportSection'

const SecondPage = () => (
  <AlternativeLayout>
    <SEO title="Datenschutz" />
    <SupportSection
      h1={<h1>Datenschutz</h1>}
      p={<p>Keine Antwort gefunden?<br/>
        Erreichen Sie mich unter</p>}
      >
        <Link to="/">Zurück zur Startseite</Link>
    </SupportSection>
  </AlternativeLayout>
)

export default SecondPage
