import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ComponentWithImage = props => (
    <section>
        <div>
            <Img
                fluid={props.data.imageOne.childImageSharp.fluid}
                alt="Description"
            />
        </div>
    </section>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(
                    relativePath: { eq: "gatsby-astronaut-2.png" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <ComponentWithImage data={data} {...props} />}
    />
)
