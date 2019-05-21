import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"

const StyledOfferComparison = styled.section`
    background: var(--color-lighter);
    padding: var(--space-l) var(--space-side);

    & > div {
        max-width: 800px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 5%;
    }
`
const StyledButton = styled(Link)`
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-primary);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-white);
    padding: 13px;
    transition: background 200ms ease-in-out;
    & svg {
        margin-top: 1px;
        margin-left: 4px;
        fill: white;
        transform: rotate(-90deg);
        height: 12px;
        width: 12px;
        transition: transform 200ms ease-in-out;
    }
`

/*Container styles*/
const OfferContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background: var(--color-white);
    box-shadow: 0px 1px 8px rgba(42, 114, 212, 0.1);
    transition: all 200ms ease-in-out;
    margin-bottom: var(--space-l);

    & > div {
        padding: 24px 18px 18px 18px;
    }
    &:hover {
        box-shadow: 0px 1px 15px rgba(42, 114, 212, 0.2);
        transform: translateY(-2px);
        transition: all 200ms ease-in-out;
    }
    &:hover ${StyledButton} {
        background: var(--color-primary-dark);
        transition: background 200ms ease-in-out;
    }
    &:hover ${StyledButton} {
        & svg {
            transform: rotate(-90deg) translateY(2px);
            transition: transform 200ms ease-in-out;
        }
    }
`

const OfferComparison = props => (
    <StyledOfferComparison>
        <div>
            <OfferContainer>
                <div>
                    <h2>Grunddeckung</h2>
                    <p>
                        Umfangreicher Schutz mit weit mehr als
                        Teilkaskoleistungen
                    </p>
                </div>
                <StyledButton to="#">Mehr erfahren</StyledButton>
            </OfferContainer>
            <OfferContainer>
                <div>
                    <h2>Allgefahrendeckung</h2>
                    <p>
                        Die Belmot Premium-Variante, mit der eine herkömmliche
                        Vollkaskoversicherung nicht mithalten kann.
                    </p>
                </div>
                <StyledButton to="#">
                    Mehr erfahren
                    <Icon icon={ICONS.CHEVRON} />
                </StyledButton>
            </OfferContainer>
        </div>
    </StyledOfferComparison>
)

export default OfferComparison
