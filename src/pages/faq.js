import React from 'react'
// import { Link } from 'gatsby'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'





class IndexPage extends React.Component {
  render(){
    return(
      <StandardLayout>
        <SEO title="FAQ" keywords={[`gatsby`, `application`, `react`]} />
        <section>
          <h1>FAQ</h1>
        </section>
      </StandardLayout>
    )
  }
}

export default IndexPage
