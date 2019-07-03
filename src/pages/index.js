import React from "react"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import ScrollAnchor from "../components/ScrollAnchor"
import Benefit from "../components/Benefit"
import Fuhrpark from "../components/Fuhrpark"
import Restaurierung from "../components/Restaurierung"
import Schutzbrief from "../components/Schutzbrief"
import TypesOfCars from "../components/TypesOfCars"
import Features from "../components/Features"
import CTA from "../components/CTA"
import PreviewCustomerReviews from "../components/PreviewCustomerReviews"
import OldtimerIstLeidenschaft from "../components/OldtimerIstLeidenschaft"

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
                <CTA />
                <Hero />
                <ScrollAnchor />
                <TypesOfCars />
                <OldtimerIstLeidenschaft />
                <Features />
                <Benefit />
                <Fuhrpark />
                <Schutzbrief />
                <Restaurierung />
                <PreviewCustomerReviews />
            </StandardLayout>
        )
    }
}

export default IndexPage
