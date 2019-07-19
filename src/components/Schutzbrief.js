import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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
        @media (min-width: 1000px) {
            order: 2;
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
                <h2>Schutzbrief</h2>
                <p>
                    Jeder Oldtimer ist auch immer ein bisschen Diva. Mal streikt
                    die Batterie, mal der Anlasser. Oder die Benzinpumpe versagt
                    ihren Dienst. Und das meist kurz vor der geplanten Tour. Mit
                    dem BELMOT Schutzbrief sind Sie auf alle Allüren bestens
                    vorbereitet, z.B. mit der Pannen- und Unfallhilfe am
                    Schadenort oder dem Transport nach Fahrzeugausfall.
                </p>
                {/* <Button primary="primary" link="/anfrage">
                    Jetzt anfragen
                </Button> */}
            </div>
        </ContentContainer>
    </StyledSection>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(relativePath: { eq: "schutzbrief.jpg" }) {
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
