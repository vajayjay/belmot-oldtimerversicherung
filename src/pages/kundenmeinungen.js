import React from "react"
import { StaticQuery, graphql } from "gatsby"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
// import Hero from "../components/Hero"
// import ScrollAnchor from "../components/ScrollAnchor"
// import Benefit from "../components/Benefit"
// import CarPool from "../components/CarPool"
// import TypesOfCars from "../components/TypesOfCars"
// import Features from "../components/Features"

const CarPool = props => (
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
        <div>
            <p>{props.data.reviewsYaml.name}</p>
            <p>{props.data.reviewsYaml.date}</p>
            <p>{props.data.reviewsYaml.review}</p>
            <p>{props.data.reviewsYaml.rating}</p>
        </div>
    </StandardLayout>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                reviewsYaml {
                    name
                    review
                    date(formatString: "D. MMMM YYYY", locale: "de-DE")
                    id
                    rating
                }
            }
        `}
        render={data => <CarPool data={data} {...props} />}
    />
)
