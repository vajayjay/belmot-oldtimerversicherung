import React from "react"
import styled from "styled-components"

const StyledSupportSection = styled.section`
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-basis: 1;
    flex-wrap: wrap;
    @media (min-width: 1195px) {
        padding-top: 100px;
    }
`

const SideInfo = styled.div`
    flex: 1 1 350px;
    margin: 20px var(--space-side) 30px;

    & h1,
    h2,
    h3,
    p,
    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    h1 {
        margin-top: 20px;
        margin-bottom: 20px;
        line-height: 1;
    }
    @media (min-width: 1195px) {
        h1 {
            font-size: 70px;
        }
    }
`
const MainContentBox = styled.div`
    flex: 10 1 700px;
    background: white;
    width: 100%;
    padding: var(--space-side);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    @media (min-width: 1195px) {
        max-width: 900px;
    }
`

const SupportSection = props => (
    <StyledSupportSection>
        <SideInfo>
            {props.h1}
            {props.p}
        </SideInfo>
        <MainContentBox>{props.children}</MainContentBox>
    </StyledSupportSection>
)

export default SupportSection
