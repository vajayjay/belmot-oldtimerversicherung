import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SectionCentered from "../components/layout/SectionCentered"
import SEO from "../components/Seo"
import NextSteps from "../components/NextSteps"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO title="Online-Anfrage fehlgeschlagen" index="noindex" />
                <SectionCentered gradient>
                    <h1>Leider ist Fehler aufgetreten!</h1>
                    <p>
                        Das Formular konnte nicht übermittelt werden. Bitte
                        wenden Sie sich per E-Mail an mich:{" "}
                        <a href="mailto:info@belmot-oldtimerversicherung.de">
                            info@belmot-oldtimerversicherung.de
                        </a>
                    </p>
                </SectionCentered>
                {/* <NextSteps /> */}
            </StandardLayout>
        )
    }
}

export default IndexPage
