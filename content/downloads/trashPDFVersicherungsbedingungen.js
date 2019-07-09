import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PDFVersicherungsbedingungen = () => {
    const data = useStaticQuery(graphql`
        {
            allFile(
                filter: {
                    relativePath: {
                        eq: "downloads/Infoblatt-Versicherungswerte.pdf"
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
    `)
    return (
        <a
            href={data.allFile.edges.node.publicURL}
            target="_blank"
            rel="noopener noreferrer"
        >
            hier
        </a>
    )
}
export default PDFVersicherungsbedingungen
