import React from "react"
import styled from "styled-components"
import Card from "../components/layout/Card"
import { device } from "../theme/breakpoints"

const Circle = styled.div`
    background: var(--color-lighter);
    min-height: 120px;
    width: 120px;
    @media ${device.desktop} {
        height: 200px;
        width: 200px;
    }
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px 0px 15px rgba(58, 71, 143, 0.05);
    margin-bottom: 28px;
`
const StyledImage = styled.img`
    max-height: 34px;
    @media ${device.desktop} {
        max-height: 54px;
    }
`

const TypeCard = props => (
    <Card>
        <Circle>
            <StyledImage
                src={require(`../../content/images/${props.type}.svg`)}
                alt={props.imgAlt}
            />
        </Circle>
        {props.children}
    </Card>
)

export default TypeCard
