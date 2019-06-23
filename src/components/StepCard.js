import React from "react"
import styled from "styled-components"

import Card from "../components/layout/Card"

const Circle = styled.div`
    background: var(--color-lighter);
    min-height: 120px;
    width: 120px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px 0px 15px rgba(58, 71, 143, 0.05);
    margin-bottom: 28px;

    & > span {
        font-size: 50px;
        font-weight: 700;
        color: var(--color-primary);
    }
`

const StepCard = props => (
    <Card>
        <Circle>
            <span>{props.number}</span>
        </Circle>
        {props.children}
    </Card>
)

export default StepCard
