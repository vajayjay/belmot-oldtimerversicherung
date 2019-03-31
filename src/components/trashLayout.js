import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import '../theme/font-face.css'
import '../theme/variables.css'
import '../theme/styles.css'
// import Header from "./Header"

const App = styled.div`
  height:100%;
` 

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <App>
          <main>{children}</main>
          <footer>
            {new Date().getFullYear()}, Built with
            {` `}
          </footer>
        </App>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
