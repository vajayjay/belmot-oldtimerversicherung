import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
// import styled from 'styled-components'

import SEO from "../components/Seo"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Online-Anfrage"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <h1>Vielen Dank für Ihre Anfrage</h1>
            </StandardLayout>
        )
    }
}

export default IndexPage
