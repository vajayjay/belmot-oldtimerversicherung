import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"

/*Animation for StyledCTA container*/
const bounce = keyframes`
  from {transform: translateX(0) rotate(-90deg);}
  to {transform: translateX(3px) rotate(-90deg);}
`

const StyledCTA = styled(Link)`
    @media ${device.tablet} {
        display: none;
    }

    position: fixed;
    z-index: 10;
    bottom: 0;
    right: 0;
    color: var(--color-darker);
    background-color: rgba(255, 255, 255, 1);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.7);
    }

    font-weight: 500;
    text-decoration: none;
    box-shadow: 0px 0px 16px rgba(20, 50, 105, 0.1);
    display: flex;
    align-items: center;
    font-size: 18px; /*This causes wrong left margin*/
    font-weight: 500;

    @media ${device.tablet} {
        display: none;
    }

    & > span {
        margin: 0 40px;
    }
    /*Blue arrow container*/
    & > div:last-of-type {
        height: 80px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-primary);
        transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

        & > svg {
            transform: rotate(-90deg);
            fill: white;
            height: 30%;
        }
    }
    :hover div {
        background: var(--color-primary-dark);
        transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
        box-shadow: 0px 0px 16px rgba(20, 50, 105, 0.2);
    }
    svg {
        animation: 300ms ${bounce} ease-in alternate infinite;
        fill: var(--color-primary);
    }

    :hover {
        box-shadow: 0px 0px 16px rgba(20, 50, 105, 0.13);
    }
`

const CTA = props => (
    <StyledCTA to="/anfrage/">
        <span>Jetzt anfragen</span>
        <div>
            <Icon icon={ICONS.CHEVRON} />
        </div>
    </StyledCTA>
)

export default CTA
