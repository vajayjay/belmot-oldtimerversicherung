import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import { ICONS } from "../theme/Icons"
import Icon from "../components/layout/Icon"

const StyledSection = styled.section`
    background: var(--color-lighter);
`
const StyledReviews = styled.div`
    padding: var(--space-side);

    & > h1 {
        display: block;
    }

    & > div {
        display: block;
        column-count: 1;
        column-gap: 1em;
        overflow: auto;

        @media (min-width: 500px) {
            column-count: 2;
        }
        @media (min-width: 1200px) {
            column-count: 3;
        }
    }
`
const SingleReview = styled.div`
    background: var(--color-white);
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0px 1px 8px rgba(42, 114, 212, 0.1);
    break-inside: avoid;

    display: inline-block;
    margin: 0 0 1em 0;
    width: 100%;

    & > p:first-of-type {
        color: var(--color-black);
        & > span {
            color: var(--color-dark);
        }
    }
`
const Review = styled.p``

// const IconOff = styled.div`
//     display: inline-block;
//     vertical-align: middle;
//     & > svg {
//         width: 50px;
//         height: 50px;
//         fill: var(--color-medium);
//     }
// `

const IconOn = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        width: 20px;
        height: 20px;
        fill: var(--color-primary);
        @media (min-width: 769px) {
            width: 30px;
            height: 30px;
        }
    }
`

const Stars = ({ n }) => {
    let stars = []
    for (let i = 0; i < n; ++i) {
        stars.push(
            <IconOn key={i}>
                <Icon icon={ICONS.STAR} on />
            </IconOn>
        )
    }

    return <div>{stars}</div>
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
        <StyledSection>
            <StyledReviews>
                <h1>Das sagen unsere Kunden</h1>
                <div>
                    {props.data.allReviewsYaml.edges.map((review, index) => {
                        return (
                            <SingleReview key={index}>
                                <Stars n={review.node.rating} />
                                <p>
                                    {review.node.name} <span>am</span>{" "}
                                    {review.node.date}
                                </p>
                                <Review>{review.node.review}</Review>
                            </SingleReview>
                        )
                    })}
                </div>
            </StyledReviews>
        </StyledSection>
    </StandardLayout>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allReviewsYaml(sort: { fields: date, order: DESC }) {
                    edges {
                        node {
                            name
                            review
                            date(formatString: "D. MMMM YYYY", locale: "de-DE")
                            id
                            rating
                        }
                    }
                }
            }
        `}
        render={data => <CarPool data={data} {...props} />}
    />
)
