import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SectionCenteredFullHeight from "../components/layout/SectionCenteredFullHeight"
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
                <SectionCenteredFullHeight>
                    <h1>Vielen Dank für Ihre Bewertung!</h1>
                    <p>
                        Wir überprüfen Sie und werden Sie in den nächsten Tagen
                        veröffentlichen.
                    </p>
                </SectionCenteredFullHeight>
            </StandardLayout>
        )
    }
}

export default IndexPage
