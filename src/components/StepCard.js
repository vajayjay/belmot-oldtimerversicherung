import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    /* max-width: 500px; */
    background: var(--color-white);
    display: grid;
    grid-template-columns: 60px auto;
    margin-bottom: var(--space-s);
    align-items: center;
    text-align: left;
    box-shadow: 0px 0px 15px rgba(58, 71, 143, 0.05);
    & > div:last-of-type {
        padding: var(--space-m) var(--space-s) 8px;
    }

    @media (min-width: 768px) {
        /* display: flex;
        flex-direction: column; */
    }
`

const Circle = styled.div`
    background: var(--color-primary);
    height: 100%;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        /* border-radius: 100%;
        min-height: 120px;
        width: 120px;
        height: auto; */
    }

    & > span {
        font-size: 30px;
        font-weight: 700;
        color: var(--color-white);
        @media (min-width: 768px) {
            font-size: 40px;
        }
    }
`

const StepCard = props => (
    <StyledCard>
        <Circle>
            <span>{props.number}</span>
        </Circle>
        <div>{props.children}</div>
    </StyledCard>
)

export default StepCard
