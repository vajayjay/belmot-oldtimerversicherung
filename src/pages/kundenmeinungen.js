import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SEO from "../components/Seo"
import SingleReview from "../components/SingleReview"
import { device } from "../theme/breakpoints"

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

        @media ${device.tablet} {
            column-count: 2;
        }
        @media (min-width: 1200px) {
            column-count: 3;
        }
    }
`

const CarPool = (props) => (
    <StandardLayout>
        <SEO
            title="Belmot Oldtimerversicherung"
            keywords={[
                `Belmot`,
                `Oldtimerversicherung`,
                `Youngtimer`,
                `Oldtimer`,
                `Kundenmeinungen`,
                `Bewertungen`,
                `Review`,
            ]}
        />
        <StyledSection>
            <StyledReviews>
                <h1>Das sagen unsere Kunden</h1>
                <div>
                    {props.data.allReviewsYaml.edges.map((review, index) => {
                        return (
                            <SingleReview
                                key={index}
                                rating={review.node.rating}
                                name={review.node.name}
                                date={review.node.date}
                                review={review.node.review}
                            />
                        )
                    })}
                </div>
            </StyledReviews>
        </StyledSection>
    </StandardLayout>
)

//  const Named = () => {}

const reviewQuery = (props) => (
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
        render={(data) => <CarPool data={data} {...props} />}
    />
)
export default reviewQuery
