import React from "react"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import ScrollAnchor from "../components/ScrollAnchor"
import DarumBelmot from "../components/DarumBelmot"
import Benefit from "../components/Benefit"
import Fuhrpark from "../components/Fuhrpark"
import Restaurierung from "../components/Restaurierung"
import Schutzbrief from "../components/Schutzbrief"
import TypesOfCars from "../components/TypesOfCars"
// import Vergleich from "../components/Vergleich"
// import CTA from "../components/CTA"
import PreviewCustomerReviews from "../components/PreviewCustomerReviews"
import OldtimerIstLeidenschaft from "../components/OldtimerIstLeidenschaft"
import Saisonal from "../components/Saisonal"
import WiederbeschaffungUndYoungtimer from "../components/WiederbeschaffungUndYoungtimer"
import MehrAlsNurVollkasko from "../components/MehrAlsNurVollkasko"
import LeidenschaftIstBeruf from "../components/LeidenschaftIstBeruf"
import CookieNotice from "../components/CookieNotice"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Belmot Oldtimerversicherung"
                    keywords={[
                        `Belmot`,
                        `Oldtimerversicherung`,
                        `Youngtimer`,
                        `Oldtimer`,
                    ]}
                />
                {/* <CTA /> */}
                <CookieNotice />
                <Hero />
                <ScrollAnchor id="darum-belmot" />
                <DarumBelmot />
                <TypesOfCars />
                <ScrollAnchor id="vergleich" />
                <OldtimerIstLeidenschaft />
                {/* <Vergleich /> */}
                <Benefit />
                <Fuhrpark />
                <Schutzbrief />
                <Restaurierung />
                <WiederbeschaffungUndYoungtimer />
                <Saisonal />
                <MehrAlsNurVollkasko />
                <ScrollAnchor id="kundenmeinungen" />
                <PreviewCustomerReviews />
                <LeidenschaftIstBeruf />
            </StandardLayout>
        )
    }
}

export default IndexPage
