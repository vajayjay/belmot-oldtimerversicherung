import React from 'react'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'


class IndexPage extends React.Component {
  render(){
    return(
      <StandardLayout>
        <SEO title="Belmot Oldtimerversicherung" keywords={[`Belmot`, `Oldtimerversicherung`, `Youngtimer`, `Oldtimer`]} />
        <Hero/>
      </StandardLayout>
    )
  }
}

export default IndexPage
