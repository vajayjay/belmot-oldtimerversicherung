import React from 'react'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import OfferComparison from '../components/OfferComparison'

class IndexPage extends React.Component {
  render(){
    return(
      <StandardLayout>
        <SEO title="Belmot Oldtimerversicherung" keywords={[`Belmot`, `Oldtimerversicherung`, `Youngtimer`, `Oldtimer`]} />
        <Hero/>
        <OfferComparison/>
      </StandardLayout>
    )
  }
}

export default IndexPage
