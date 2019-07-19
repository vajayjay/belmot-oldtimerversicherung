import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SingleReview from "../components/SingleReview"
import Button from "../components/Button"

const StyledSection = styled.section`
    background: var(--color-lighter);
`
const StyledReviews = styled.div`
    padding: var(--space-v) var(--space-side);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h2 {
        display: block;
        text-align: center;
        margin-bottom: var(--space-m);
    }

    & > div {
        margin-bottom: var(--space-m);

        @media (min-width: 900px) {
            display: flex;
            justify-content: center;
            align-items: center;

            & > div:not(:last-child) {
                margin-right: 20px;
            }
        }

        /* column-count: 1;
        column-gap: 1em;
        overflow: auto;

        @media (min-width: 1200px) {
            column-count: 3;
        } */
    }
`

const PreviewCustomerReviews = props => (
    <StyledSection>
        <StyledReviews>
            <h2>Geschätzt und weiterempfohlen</h2>
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
            <Button primary="primary" link="/kundenmeinungen">
                Alle Bewertungen ansehen
            </Button>
        </StyledReviews>
    </StyledSection>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allReviewsYaml(sort: { fields: date, order: DESC }, limit: 3) {
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
        render={data => <PreviewCustomerReviews data={data} {...props} />}
    />
)
