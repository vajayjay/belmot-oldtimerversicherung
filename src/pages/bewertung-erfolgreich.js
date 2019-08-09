import React from "react"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SectionCenteredFullHeight from "../components/layout/SectionCenteredFullHeight"

import SEO from "../components/Seo"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO title="Bewertung erfolgreich " index="noindex" />
                <SectionCenteredFullHeight>
                    <h1>Vielen Dank für Ihre Bewertung!</h1>
                    <p>
                        Wir überprüfen ihre Bewertung und werden sie in den
                        nächsten Tagen veröffentlichen.
                    </p>
                </SectionCenteredFullHeight>
            </StandardLayout>
        )
    }
}

export default IndexPage
