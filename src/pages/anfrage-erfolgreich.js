import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SectionCentered from "../components/layout/SectionCentered"
import SEO from "../components/Seo"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Online-Anfrage"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <SectionCentered gradient background="red">
                    <h1>Vielen Dank für Ihre Anfrage</h1>
                    <p>
                        Sie sollten in kurzer Zeit eine E-Mail{" "}
                        <b>mit einer Zusammenfassung ihrer Informationen</b>{" "}
                        erhalten. Falls jedoch keine E-Mail bei Ihnen ankommt,
                        überprüfen Sie bitte Ihren Spamfilter. Falls auch dort
                        keine E-Mail vorhanden ist nehmen Sie bitte direkten
                        Kontakt zu mir auf:{" "}
                        <a href="mailto:info@instrumentenversicherung.online">
                            info@instrumentenversicherung.online
                        </a>
                    </p>
                </SectionCentered>
                <SectionCentered>
                    <h2>Wie geht es weiter?</h2>
                    <div>
                        <h3>Angebot anfordern</h3>
                        <p>
                            Klicken Sie auf einen der Buttons und füllen Sie das
                            folgende Formular auf dieser Website aus
                        </p>
                    </div>
                    <div>
                        <h3>Per E-Mail erhalten</h3>
                        <p>
                            Kurz darauf sende ich Ihnen ein individuelles
                            Angebot per E-Mail zu
                        </p>
                    </div>
                    <div>
                        <h3>Angebot annehmen</h3>
                        <p>
                            Nehmen Sie das Angebot per E-Mail an und genießen
                            Sie sofort den SINFONIMA® Allgefahrenschutz für Ihre
                            Instrumente.{" "}
                        </p>
                    </div>
                </SectionCentered>
            </StandardLayout>
        )
    }
}

export default IndexPage
