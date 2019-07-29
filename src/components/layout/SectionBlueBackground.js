import React from "react"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledContent = styled.section`
    width: 100%;
    background: var(--color-primary);
    padding: var(--space-v) var(--space-side);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 694px;
    text-align: left;

    @media ${device.tablet} {
        text-align: center;
    }
    & > h2 {
        color: var(--color-white);
    }
    & > p {
        margin-bottom: var(--space-l);
        color: var(--color-white);
    }
    & > span {
        color: var(--color-white);
        font-weight: 500;
    }
`

const SectionBlueBackground = props => (
    <StyledContent>
        <ContentContainer>{props.children}</ContentContainer>
    </StyledContent>
)

export default SectionBlueBackground
