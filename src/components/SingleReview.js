import React from "react"
import styled from "styled-components"
import { ICONS } from "../theme/Icons"
import Icon from "../components/layout/Icon"
import { device } from "../theme/breakpoints"

const StyledReview = styled.div`
    background: var(--color-white);
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0px 1px 8px rgba(42, 114, 212, 0.1);
    break-inside: avoid;

    display: inline-block;
    margin: 0 0 1em 0;
    width: 100%;
    flex: 0 1 400px;
    @media ${device.desktop} {
        flex: 0 1 600px;
    }

    & > p:first-of-type {
        color: var(--color-black);
        & > span {
            color: var(--color-dark);
        }
    }
`
const Review = styled.p``

// const IconOff = styled.div`
//     display: inline-block;
//     vertical-align: middle;
//     & > svg {
//         width: 50px;
//         height: 50px;
//         fill: var(--color-medium);
//     }
// `

const IconOn = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        width: 20px;
        height: 20px;
        fill: var(--color-warning);
        @media ${device.tablet} {
            width: 30px;
            height: 30px;
        }
    }
`

const Stars = ({ n }) => {
    let stars = []
    for (let i = 0; i < n; ++i) {
        stars.push(
            <IconOn key={i}>
                <Icon icon={ICONS.STAR} on />
            </IconOn>
        )
    }

    return <div>{stars}</div>
}

const SingleReview = props => (
    <StyledReview
        key={props.index}
        itemProp="review"
        itemScope
        itemType="http://schema.org/Review"
    >
        <span
            itemProp="itemReviewed"
            itemScope
            itemType="https://schema.org/Product"
            hidden
        >
            <span itemProp="name">Belmot Oldtimerversicherung</span>
            <span itemProp="brand">Mannheimer Versicherung AG</span>
            <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/AggregateOffer"
            >
                ab <span itemProp="lowPrice">95.20</span> €
                <meta itemProp="priceCurrency" content="EUR" />
                <span itemProp="availability">OnlineOnly</span>
                <span itemProp="offerCount">1</span>
            </div>
        </span>

        <div
            itemProp="reviewRating"
            itemScope
            itemType="http://schema.org/Rating"
            hidden
        >
            <span itemProp="ratingValue">{props.rating}</span>
            <span itemProp="reviewCount">{props.reviewCount}</span>
            <span itemProp="bestRating">5</span>
            <span itemProp="worstRating">1</span>
        </div>
        <Stars n={props.rating} />
        <p>
            <span
                itemProp="author"
                itemScope
                itemType="http://schema.org/Person"
            >
                <span itemProp="name">{props.name}</span>
            </span>{" "}
            am{" "}
            <span itemProp="datePublished">
                <time dateTime={props.date}>{props.date}</time>
            </span>
        </p>
        <Review itemProp="reviewBody">{props.review}</Review>
    </StyledReview>
)

export default SingleReview
