import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import styled from "styled-components"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"
import NumberOfReviews from "../components/NumberOfReviews"

const StyledHero = styled.section`
    position: relative;
    margin-top: 60px;
    max-height: calc(95vh - 60px);
    display: flex;
    flex-direction: column;
`
const StyledImg = styled(Img)`
    height: 80vh;

    @media ${device.tablet} {
        min-height: 500px;
        height: 80vh;
    }
`
/*Container for all text content*/
const TextContainer = styled.div`
    position: relative;

    /*Desktop styles*/
    @media ${device.tablet} {
        position: absolute;
        max-width: 480px;
        top: 25%;
        margin-left: 10%;
    }
    /* @media ${device.desktop} {
        max-width: 650px;
    } */
`
const HeadlineContainer = styled.div`
    position: relative;
    padding: var(--space-m);
    background: var(--color-white);
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    z-index: 1;
    & h1 {
        margin: 0;
    }
    & span {
        color: var(--color-primary);
    }
    @media ${device.tablet} {
        padding: var(--space-l) var(--space-l);
    }
`

/*Blue area with customer ratings*/
const RatingContainer = styled.div`
    display: flex;
    position: relative;
    fill: yellow;

    & > a {
        color: white;
        color: var(--color-white);
        text-decoration: none;
        padding: var(--space-m);
        width: 100%;
        font-weight: 500;
        background: var(--color-primary);
        transition: all 100ms linear;
        :hover {
            background: var(--color-primary-light);
            transition: all 100ms linear;
        }
        /* customer rating stars */
        & > span:first-of-type {
            color: yellow;
            color: var(--color-warning);
        }
    }

    @media ${device.tablet} {
        height: 50px;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
        z-index: 2;
        margin-left: -24px;
        margin-bottom: -24px;
        width: fit-content;
        & > a {
            padding: var(--space-s) var(--space-m);
        }
    }
`

const CTA = styled(Link)`
    display: flex;
    position: relative;
    width: 100%;
    background: var(--color-primary);
    transition: all 100ms linear;
    text-decoration: none;
    :hover {
        background: var(--color-primary-light);
        transition: all 100ms linear;
    }

    & > a {
    }

    & > span {
        color: white;
        color: var(--color-white);
        padding: var(--space-m);
        font-weight: 500;
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        background: var(--color-primary-dark);
        height: 100%;
        width: 60px;
    }
    & svg {
        fill: white;
        height: 30%;
        transform: rotate(-90deg);
    }
    @media ${device.tablet} {
        height: 50px;
        position: relative;
        float: right;
        right: 0px;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
        z-index: 1;
        margin-right: -24px;
        margin-top: -24px;
        width: fit-content;
        & > span {
            padding: var(--space-s) var(--space-m);
            margin-right: 60px;
        }
        & > div {
            /* display: none; */
            background: var(--color-primary-light);
        }
        & svg {
            fill: white;
            height: 40%;
            transform: rotate(-90deg);
        }
    }
`
// 3D flag/ribbon corners
const CornerTop = styled.div`
    display: none;
    @media ${device.tablet} {
        display: block;
        background: var(--color-primary-dark);
        /* transform: rotate(45deg); */
        height: 24px;
        width: 24px;
        position: absolute;
        top: 50px;
        left: -24px;
        background: linear-gradient(
            to top right,
            transparent 17px,
            var(--color-primary-dark) 17px
        );
        /* background: red; */
        /* z-index: 5; */
    }
`
const CornerBottom = styled.div`
    display: none;
    @media ${device.tablet} {
        display: block;
        background: var(--color-primary-dark);
        height: 24px;
        width: 24px;
        position: absolute;
        bottom: 50px;
        right: -24px;
        background: linear-gradient(
            to bottom left,
            transparent 17px,
            var(--color-primary-dark) 17px
        );
        /* background: red; */
        /* z-index: 5; */
    }
`

const Hero = props => (
    <StyledHero>
        <StyledImg
            fluid={props.data.imageOne.childImageSharp.fluid}
            alt="Description"
        />
        <TextContainer>
            <RatingContainer>
                <a href="#kundenmeinungen">
                    <span>★★★★★</span> von <NumberOfReviews /> zufriedenen
                    Kunden
                </a>
            </RatingContainer>
            <CornerTop />
            <HeadlineContainer>
                <h1>
                    Versicherung für Ihren <span>Young-</span> und{" "}
                    <span>Oldtimer</span>
                </h1>
            </HeadlineContainer>
            <CTA to="/anfrage">
                <span>Jetzt online anfragen</span>
                <div>
                    <Icon icon={ICONS.CHEVRON} />
                </div>
            </CTA>
            <CornerBottom />
        </TextContainer>
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
