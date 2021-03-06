import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SectionCentered from "../components/layout/SectionCentered"
import SEO from "../components/Seo"
import NextStepsCollectors from "../components/NextStepsCollectors"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO title="Online-Anfrage erfolgreich" index="noindex" />
                <SectionCentered gradient>
                    <h1>Vielen Dank für Ihre Anfrage!</h1>
                    <p>
                        Sie erhalten in kurzer Zeit eine E-Mail mit der
                        Bestätigung, dass Ihre Anfrage bei mir eingegangen ist.
                        Falls keine E-Mail bei Ihnen ankommt, überprüfen Sie
                        bitte Ihren Spamfilter. Falls auch dort keine E-Mail
                        vorhanden ist nehmen Sie bitte direkten Kontakt zu mir
                        auf:{" "}
                        <a href="mailto:info@belmot-oldtimerversicherung.de">
                            info@belmot-oldtimerversicherung.de
                        </a>
                    </p>
                </SectionCentered>
                <NextStepsCollectors />
            </StandardLayout>
        )
    }
}

export default IndexPage
