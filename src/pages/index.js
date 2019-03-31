import React from 'react'
// import { Link } from 'gatsby'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'
// import Image from '../components/Image'
// import ImageContainer from '../components/ImageContainer'
// import Button from '../components/Button'
// import Icon from '../components/layout/Icon'
// import {ICONS} from '../theme/Icons'




class IndexPage extends React.Component {
  render(){
    return(
      <StandardLayout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section>
          <h1>Welcome to my Gatsby template.</h1>
          <p>This Gatsby Site is a work in progress starter template. It currently </p>
          <br />
          <ul>
            <li>has a navigation consisting of multiple components with responsive mobile nav and animation</li>
            <li>has a footer component</li>
            <li>has a button component</li>
            <li>has a SEO component</li>
            <li>uses styled components</li>
            <li>has a theme folder containing
              <ul>
                <li>a font-face style for font imports</li>
                <li>a varialbes file for all css variables</li>
                <li>an icons.js filte for all icons as svgs</li>
              </ul> 
            </li>
          </ul>
        </section>
      </StandardLayout>
    )
  }
}

export default IndexPage
