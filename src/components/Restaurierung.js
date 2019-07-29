import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
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

    /* @media (min-width: 100px) {
        padding: 1rem 0;
    } */

    & > div {
        padding: var(--space-l) var(--space-side);
        max-width: 650px;
        overflow: visible;
        @media ${device.desktop} {
            max-width: 900px;
        }
    }
    & p {
        margin-bottom: var(--space-m);
    }
    @media ${device.laptop} {
        text-align: left;
    }
`

const Schutzbrief = props => (
    <StyledSection>
        <div>
            <Img
                fluid={props.data.imageOne.childImageSharp.fluid}
                alt="Oldtimersammlung in einer Garage"
            />
        </div>
        <ContentContainer>
            <div>
                <h2>
                    Restaurierungs
                    <wbr />
                    versicherung
                </h2>
                <p>
                    Sorgen Sie dafür, dass Ihr Oldtimer bereits vor seinem
                    ersten großen Auftritt in sicheren Händen ist – mit der
                    speziellen Versicherung für die Phase der Restaurierung.
                </p>
            </div>
        </ContentContainer>
    </StyledSection>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(relativePath: { eq: "restaurierung.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <Schutzbrief data={data} {...props} />}
    />
)
