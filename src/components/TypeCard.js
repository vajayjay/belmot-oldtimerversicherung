import React from "react"
import styled from "styled-components"
import Card from "../components/layout/Card"
import { device } from "../theme/breakpoints"

const Circle = styled.div`
    background: var(--color-lighter);
    min-height: 80px;
    width: 80px;
    margin: 20px;

    @media ${device.tablet} {
        min-height: 120px;
        width: 120px;
        margin-bottom: 28px;
    }

    @media ${device.desktop} {
        height: 200px;
        width: 200px;
    }
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px 0px 15px rgba(58, 71, 143, 0.05);
`
const StyledImage = styled.img`
    max-height: 24px;
    max-width: 50px;
    @media ${device.tablet} {
        max-height: 34px;
        max-width: 70px;
    }
    @media ${device.desktop} {
        max-height: 54px;
        max-width: 110px;
    }
`

const TypeCard = (props) => (
    <Card>
        <Circle>
            <StyledImage
                src={require(`../../content/images/${props.type}.svg`).default}
                alt={props.imgAlt}
            />
        </Circle>
        {props.children}
    </Card>
)

export default TypeCard
