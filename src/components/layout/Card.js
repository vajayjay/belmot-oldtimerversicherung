import React from "react"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledCard = styled.div`
    background: var(--color-white);
    box-shadow: 0px 3px 15px rgba(58, 71, 143, 0.05);
    display: grid;
    /* padding: 30px 1vw 40px 1vw; */
    grid-template-columns: 120px auto;
    align-items: center;
    text-align: left;

    @media ${device.tablet} {
        padding: 30px 1vw 40px 1vw;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & span {
        font-size: var(--small);
        color: var(--color-dark);
        margin-top: 1rem;
        font-size: 16px;
    }
`

const Card = props => <StyledCard>{props.children}</StyledCard>

export default Card
