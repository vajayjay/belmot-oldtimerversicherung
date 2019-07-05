import React, { Children } from "react"
import styled from "styled-components"

const StyledContent = styled.section`
    width: 100%;
    background: var(--color-primary);
    padding: 10vh var(--space-side);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 694px;
    & > h2 {
        text-align: center;
        color: var(--color-white);
    }
    & > p {
        margin-bottom: var(--space-l);
        color: var(--color-white);
        text-align: center;
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
