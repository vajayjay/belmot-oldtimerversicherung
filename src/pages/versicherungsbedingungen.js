import React from "react"
// import { Link } from 'gatsby'

import AlternativeLayout from "../components/pagelayouts/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from "../components/layout/SupportSection"
import Button from "../components/Button"

class IndexPage extends React.Component {
    render() {
        return (
            <AlternativeLayout>
                <SEO
                    title="FAQ"
                    keywords={[
                        `Belmot`,
                        `Oldtimerversicherung`,
                        `Versicherungsbedingungen`,
                    ]}
                    index="noindex"
                />
                <SupportSection
                    h1={
                        <h1>
                            Das <br />
                            Kleingedruckte
                        </h1>
                    }
                    p={
                        <p>
                            Keine Antwort gefunden?
                            <br />
                            Erreichen Sie mich unter:
                            <br />
                            info@belmot-oldtimerversicherung.de
                            <br />
                            05191- 931 31 99
                        </p>
                    }
                >
                    <h2>Versicherungsbedingungen</h2>
                    <p>
                        Die vorgeschriebenen Begleitinformationen werden immer
                        den aktuellen gesetzliche vorgeschriebenen Stand
                        angepasst. Damit die Informationen immer aktuell sind,
                        habe ich diese nicht hier hinterlegt, sondern stelle
                        einen Link auf die Seite der Mannheimer Versicherung zur
                        Verfügung. Insoweit ist immer Aktualität garantiert. Die
                        vollständigen Versicherungsbedingungen und
                        Begleitinformationen finden sich hier:
                    </p>
                    <a
                        href="https://service.mannheimer.de/webcode/start.do"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        https://service.mannheimer.de/webcode/start.do
                    </a>
                    <p>
                        Geben Sie dort den folgenden Code ein:
                        <br />
                        F02G 0000 0519
                    </p>
                    <br />
                    <Button primary="primary" link="/">
                        Zurück zur Startseite
                    </Button>
                </SupportSection>
            </AlternativeLayout>
        )
    }
}

export default IndexPage
