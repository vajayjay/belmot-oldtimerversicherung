import React from "react"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import CustomerRatingForm from "../components/CustomerRatingForm"

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
                <CustomerRatingForm />
            </StandardLayout>
        )
    }
}

export default IndexPage
