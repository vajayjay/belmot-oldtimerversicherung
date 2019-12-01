import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SingleReview from "../components/SingleReview"
import Button from "../components/Button"
// import { device } from "../theme/breakpoints"
import NumberOfReviews from "../components/NumberOfReviews"

const StyledSection = styled.section`
    background: var(--color-lighter);
    position: relative;
    display: block;
    padding: var(--space-v) var(--space-side);
`
const StyledSummary = styled.div`
    max-width: 900px;
    margin: auto;
    text-align: center;
    margin-bottom: var(--space-side);

    & > span:first-of-type {
        color: var(--color-warning);
        font-size: 30px;
    }
    & > p {
        margin-bottom: 0;
    }
`
const StyledReviews = styled.div`
    max-width: 900px;
    margin: auto;
    margin-bottom: var(--space-side);

    & > h2 {
        display: block;
        text-align: center;
        margin-bottom: var(--space-m);
    }
`
const StyledButton = styled.div`
    margin: auto;
    position: relative;
    text-align: center;
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
                <StyledSummary>
                    <h2>Geschätzt und weiterempfohlen</h2>
                    <p>
                        <NumberOfReviews /> Kundenbewertungen mit
                    </p>
                    <span>★★★★★</span>
                </StyledSummary>

                <StyledReviews>
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
                </StyledReviews>
                <StyledButton>
                    <Button primary="primary" link="/kundenmeinungen">
                        Alle Bewertungen ansehen
                    </Button>
                </StyledButton>
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
