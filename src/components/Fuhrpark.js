import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledFuhrpark = styled.section`
    display: flex;
    flex-wrap: wrap;

    & img {
        height: 100%;
        max-width: 100%;
    }
    & > div :first-of-type {
        flex: 2 1 500px;
        & > div {
            height: 100%;
        }
    }
`
const ContentContainer = styled.div`
    flex: 2 1 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (min-width: 100px) {
        padding: 1rem 0;
    }

    & > div {
        padding: var(--space-l) var(--space-side);
        max-width: 600px;
    }
    & p {
        margin-bottom: var(--space-m);
    }
    @media (min-width: 1000px) {
        text-align: left;
    }
`

const Fuhrpark = props => (
    <StyledFuhrpark>
        <div>
            <Img
                fluid={props.data.imageOne.childImageSharp.fluid}
                alt="Oldtimersammlung in einer Garage"
            />
        </div>
        <ContentContainer>
            <div>
                <h2>Fuhrparkversicherung</h2>
                <p>
                    Besonders attraktiv ist das Angebot einer
                    Fuhrparkversicherung für Sammler. Dabei wird der
                    Allgefahren-Beitrag nur für die Anzahl der maximal
                    gleichzeitig bewegten Fahrzeuge berechnet. Eine
                    Fuhrparkversicherung ist schon ab zwei Fahrzeugen möglich.
                </p>
                {/* <Button primary="primary" link="/anfrage">
                    Jetzt anfragen
                </Button> */}
            </div>
        </ContentContainer>
    </StyledFuhrpark>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(relativePath: { eq: "fuhrpark.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <Fuhrpark data={data} {...props} />}
    />
)
