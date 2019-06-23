import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    background: var(--color-white);
    box-shadow: 0px 3px 15px rgba(58, 71, 143, 0.05);
    text-align: center;
    padding: 30px 1vw 40px 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
        font-size: var(--small);
        color: var(--color-dark);
        margin-top: 1rem;
        font-size: 14px;
    }
`

const Card = props => <StyledCard>{props.children}</StyledCard>

export default Card
