import React from 'react'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import ScrollAnchor from '../components/Scrollanchor'
import OfferComparison from '../components/OfferComparison'
import Benefit from '../components/Benefit'
import CarPool from '../components/CarPool';

class IndexPage extends React.Component {
  render(){
    return(
      <StandardLayout>
        <SEO title="Belmot Oldtimerversicherung" keywords={[`Belmot`, `Oldtimerversicherung`, `Youngtimer`, `Oldtimer`]} />
        <Hero/>
        <ScrollAnchor/>
        <OfferComparison/>
        <Benefit/>
        <CarPool/>
      </StandardLayout>
    )
  }
}

export default IndexPage
