import React from "react"
import { StaticQuery, graphql } from "gatsby"

const SelbsteinschaetzungPDF = props => (
    <a href={props.allFile.edges.node.publicURL}>
        Unbürokratisches Selbsteinschätzungs-Formular
    </a>
)

export default props => (
    <StaticQuery
        query={graphql`
            {
                allFile(
                    filter: {
                        relativePath: {
                            eq: "downloads/Selbsteinschaetzung.pdf"
                        }
                    }
                ) {
                    edges {
                        node {
                            publicURL
                        }
                    }
                }
            }
        `}
        render={data => <SelbsteinschaetzungPDF data={data} {...props} />}
    />
)
