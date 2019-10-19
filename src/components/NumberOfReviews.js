import React from "react"
import { StaticQuery, graphql } from "gatsby"

var NumberOfReviews = props => (
    <span>{props.data.allReviewsYaml.totalCount}</span>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allReviewsYaml(sort: { fields: date, order: DESC }) {
                    totalCount
                    nodes {
                        rating
                    }
                }
            }
        `}
        render={data => <NumberOfReviews data={data} {...props} />}
    />
)
