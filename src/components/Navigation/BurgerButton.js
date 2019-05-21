import React from "react"
import styled from "styled-components"

const BurgerContainer = styled.div`
    position: relative;
    display: inline-block;
    height: 50px;
    width: 50px;
    cursor: pointer;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`

const Burger = styled.div`
    width: 18px;
    height: 8px;
    position: relative;
    display: block;
    margin: -4px auto 0;
    top: 50%;
    & > div {
        width: 100%;
        height: 2px;
        display: block;
        position: relative;
        background: var(--color-black);
        transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
        transition-delay: 0s;
    }
`

const TopBar = styled.div`
    transform: ${props =>
        props.showMobileMenu
            ? "translateY(4px) rotate(45deg)"
            : "translateY(0px) rotate(0deg)"};
    -webkit-transform: ${props =>
        props.showMobileMenu
            ? "translateY(4px) rotate(45deg)"
            : "translateY(0px) rotate(0deg)"};
`
const BottomBar = styled.div`
    transform: ${props =>
        props.showMobileMenu
            ? "translateY(2px) rotate(-45deg)"
            : "translateY(6px) rotate(0deg)"};
    -webkit-transform: ${props =>
        props.showMobileMenu
            ? " translateY(2px) rotate(-45deg)"
            : "translateY(6px) rotate(0deg)"};
`

const BurgerButton = props => (
    <BurgerContainer onClick={props.click}>
        <Burger>
            <TopBar showMobileMenu={props.showMobileMenu} />
            <BottomBar showMobileMenu={props.showMobileMenu} />
        </Burger>
    </BurgerContainer>
)
export default BurgerButton
