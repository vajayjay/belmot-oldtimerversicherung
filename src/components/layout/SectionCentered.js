import React from "react"
import styled from "styled-components"

const theme = {
    main: "red",
}
const StyledSection = styled.section`
    width: 100%;
    padding: var(--space-side);
    background: red;
    background: ${props =>
        props.gradient
            ? "linear-gradient(180deg, #F2F5FB 0%, rgba(255, 255, 255, 0) 100%);"
            : "var(--color-lighter)"};

    & > div {
        max-width: 800px;
        margin: calc(var(--space-v) - 5%) auto var(--space-v);
    }
`

const SectionCentered = props => (
    <StyledSection gradient={props.gradient}>
        <div>{props.children}</div>
    </StyledSection>
)

export default SectionCentered
