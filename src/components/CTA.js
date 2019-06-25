import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"

/*Animation for StyledCTA container*/
const bounce = keyframes`
  from {transform: translateX(0) rotate(-90deg);}
  to {transform: translateX(3px) rotate(-90deg);}
`

const StyledCTA = styled(Link)`
    @media (max-width: 768px) {
        display: none;
    }

    position: fixed;
    z-index: 10;
    bottom: 20%;
    right: 0;
    background: var(--color-white);
    color: var(--color-darker);

    font-weight: 500;
    text-decoration: none;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    font-size: 18px; /*This causes wrong left margin*/
    font-weight: 500;

    @media (max-width: 768px) {
        display: none;
    }

    & > span {
        margin: 0 40px;
    }
    /*Blue arrow container*/
    & > div {
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
        transition: background 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
    }
    :hover svg {
        animation: 300ms ${bounce} ease-in alternate infinite;
    }
    & > svg {
        fill: var(--color-primary);
    }
    :hover {
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.13);
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
