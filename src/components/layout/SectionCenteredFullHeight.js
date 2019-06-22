import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    background: var(--color-lighter);
    padding: var(--space-side);
    & > div {
        max-width: 800px;
        margin: -10% auto 0;
    }
`

const SectionCenteredFullHeight = props => (
    <StyledSection>
        <div>{props.children}</div>
    </StyledSection>
)

export default SectionCenteredFullHeight
