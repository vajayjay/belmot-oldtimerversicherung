import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import styled from "styled-components"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"
import NumberOfReviews from "../components/NumberOfReviews"

const StyledHero = styled.section`
    position: relative;
    /* height:calc(100vh - 60px); */
`
const StyledImg = styled(Img)`
    position: relative;
    height: 50vw;
    /* min-width: 100%; */

    @media ${device.tablet} {
        min-height: 500px;
        height: 80vh;
    }
`
/*Container for all text content*/
const HeadlineContainer = styled.div`
    background: var(--color-primary);
    overflow: hidden;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    & h1 {
        margin: 0;
    }
    & span {
        color: var(--color-primary);
    }
    /*White headline area*/
    & > div:first-of-type {
        padding: var(--space-m);
        background: var(--color-white);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    }
    /*Desktop styles*/
    @media ${device.tablet} {
        position: absolute;
        top: 20vh;
        max-width: 450px;
        margin-left: var(--space-side);
    }
    @media ${device.desktop} {
        max-width: 650px;
    }
`

/*Blue area with customer ratings*/
const RatingContainer = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    /* box-shadow: 0px 4px 14px  rgba(0, 0, 0, 0.25); */
    span {
        font-weight: 500;
        color: var(--color-white);
        @media ${device.desktop} {
            font-size: 1.2rem;
        }
    }
    /*stars and text container*/
    & > div {
        position: absolute;
        bottom: 0;
        width: calc(100% - 70px);
        height: 70px;
        padding: 0 var(--space-m);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        @media ${device.tablet} {
            width: 100%;
        }
    }

    & > a {
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-primary-dark);
        @media ${device.tablet} {
            display: none;
        }
    }
    & svg {
        fill: white;
        height: 30%;
    }
`

const Hero = props => (
    <StyledHero>
        <StyledImg
            fluid={props.data.imageOne.childImageSharp.fluid}
            alt="Description"
        />
        <HeadlineContainer>
            <div>
                <h1>
                    Versicherung für Ihren <span>Young-</span> und{" "}
                    <span>Oldtimer</span>
                </h1>
            </div>
            <RatingContainer>
                <div>
                    <span>
                        ★★★★★ <wbr />
                        von <NumberOfReviews /> zufriedenen Kunden
                    </span>
                </div>
                <a href="#scroll-anchor">
                    <Icon icon={ICONS.CHEVRON} />
                </a>
            </RatingContainer>
        </HeadlineContainer>
        {/* <LearnMore href="#scroll-anchor">
            <span>Mehr erfahren</span>
            <div>
                <Icon icon={ICONS.CHEVRON} />
            </div>
        </LearnMore> */}
    </StyledHero>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(relativePath: { eq: "Hero.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <Hero data={data} {...props} />}
    />
)
