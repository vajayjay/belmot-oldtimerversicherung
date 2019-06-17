import React from "react"
import { StaticQuery, graphql } from "gatsby"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import { ICONS } from "../theme/Icons"
import Icon from "../components/layout/Icon"

import styled from "styled-components"
// import Hero from "../components/Hero"
// import ScrollAnchor from "../components/ScrollAnchor"
// import Benefit from "../components/Benefit"
// import CarPool from "../components/CarPool"
// import TypesOfCars from "../components/TypesOfCars"
// import Features from "../components/Features"

const IconOff = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        width: 50px;
        height: 50px;
        fill: var(--color-medium);
    }
`

const IconOn = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        width: 50px;
        height: 50px;
        fill: var(--color-primary);
    }
`

class Test extends React.Component {
    render() {
        for (let i = 0; i < 5; i++) {
            return (
                <IconOn>
                    <Icon icon={ICONS.STAR} />
                </IconOn>
            )
        }
        return <p>yeas</p>
    }
}

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
            <Test />

            <IconOff>
                <Icon icon={ICONS.STAR} off />
            </IconOff>
            <IconOn>
                <Icon icon={ICONS.STAR} on />
            </IconOn>
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
