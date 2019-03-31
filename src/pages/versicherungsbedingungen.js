import React from "react"
import { Link } from "gatsby"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <StandardLayout>
    <SEO title="Versicherungsbedingungen" />
    <h1>Versicherungsbedingungen</h1>
    <p>Fülltext</p>
    <Link to="/">Zurück zur Startseite</Link>
  </StandardLayout>
)

export default SecondPage
