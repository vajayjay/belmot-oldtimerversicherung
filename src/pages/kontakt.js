import React from 'react'
import { Link } from 'gatsby'

import AlternativeLayout from '../components/AlternativeLayout'
import SEO from '../components/Seo'
import SupportSection from '../components/layout/SupportSection'



class IndexPage extends React.Component {
  render(){
    return(
      <AlternativeLayout>
        <SEO title="Kontakt" keywords={[`gatsby`, `application`, `react`]} />
        <SupportSection
            h1={<h1>Kontakt</h1>}
            p={<p>Sie erreichen mich Montags bis Freitags von 10-18 Uhr</p>}
        >
            <a href="mailto:info@belmot-oldtimerversicherung.de">info@belmot-oldtimerversicherung.de</a><br/>
            <a href="tel:+4951919313199">05191 931 31 99</a><br/>
            <Link to="/">Zurück zur Startseite</Link>
        </SupportSection>
      </AlternativeLayout>
    )
  }
}

export default IndexPage
