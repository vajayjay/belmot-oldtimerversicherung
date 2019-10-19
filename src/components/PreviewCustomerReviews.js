import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SingleReview from "../components/SingleReview"
import Button from "../components/Button"
import { device } from "../theme/breakpoints"

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

        @media ${device.laptop} {
            display: flex;
            justify-content: center;
            align-items: center;

            & > div:not(:last-child) {
                margin-right: 20px;
            }
        }
    }
`

class PreviewCustomerReviews extends React.Component {
    // Component's constructor
    constructor(props) {
        // Required to call original constructor
        super(props)

        // Props are now accessible from here
        this.averageRating =
            props.data.allReviewsYaml.nodes
                .map(i => i.rating)
                .reduce((a, b) => a + b, 0) /
            props.data.allReviewsYaml.totalCount
    }
    s

    // This is called when ReactDOM.render is called on <Element />
    render() {
        // And from here
        return (
            <StyledSection>
                <StyledReviews>
                    <h2>Geschätzt und weiterempfohlen</h2>
                    <div>
                        {this.props.data.allReviewsYaml.edges.map(
                            (review, index) => {
                                return (
                                    <SingleReview
                                        key={index}
                                        rating={review.node.rating}
                                        name={review.node.name}
                                        date={review.node.date}
                                        review={review.node.review}
                                        averageRating={this.averageRating}
                                        reviewCount={review.totalCount}
                                    />
                                )
                            }
                        )}
                    </div>
                    <Button primary="primary" link="/kundenmeinungen">
                        Alle Bewertungen ansehen
                    </Button>
                </StyledReviews>
            </StyledSection>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allReviewsYaml(sort: { fields: date, order: DESC }, limit: 3) {
                    totalCount
                    nodes {
                        rating
                    }
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
