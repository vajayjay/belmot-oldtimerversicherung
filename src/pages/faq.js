import React from 'react'
// import { Link } from 'gatsby'

import AlternativeLayout from '../components/AlternativeLayout'
import SEO from '../components/Seo'
import SupportSection from '../components/layout/SupportSection'
import  Accordion from '../components/Accordion'


class IndexPage extends React.Component {
   
  render(){
    return(
      <AlternativeLayout>
        <SEO title="FAQ" keywords={[`Belmot`, `Oldtimerversicherung`, `Fragen`, `Antworten`]} />
        <SupportSection
          h1={<h1>Haben Sie <br/>Fragen?</h1>}
          p={<p>Keine Antwort gefunden?<br/>
                    Erreichen Sie mich unter:<br/>
                    info@belmot-oldtimerversicherung.de<br/>
                    05191- 931 31 99</p>}
          >
            <Accordion />             
        </SupportSection>
      </AlternativeLayout>
    )
  }
}

export default IndexPage
