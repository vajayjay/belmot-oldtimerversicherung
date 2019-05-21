import React from "react"
import styled from "styled-components"

const StyledSection = styled.ul`
    list-style: none;
    list-style-position: inside;
    border-bottom: 2px solid var(--color-light);
    padding: 12px 0;
    /* margin-bottom: 0; */

    /* padding-bottom:25px; */

    /* Giving every Lisitem other than the first a top padding */
    &:not(:first-of-type) p {
        /* padding:  25px 0; */
    }
`
const Question = styled.li`
    font-weight: 700;
    color: var(--color-darker);
    padding: 12px 0;
    cursor: pointer;
    :before {
    }
`
const Answer = styled.li`
    color: var(--color-medium);
    transform: ${props =>
        props.currentIndex === props.index
            ? "translateY(0px)"
            : "translateY(-100px)"};
    transition: transform 200ms ease-in;
    transition-delay: 2s;
`

function AccordionSection(props) {
    return (
        <StyledSection>
            <Question onClick={() => props.handleChange(props.index)}>
                {props.question}
            </Question>
            {props.currentIndex === props.index && (
                <Answer>{props.answer}</Answer>
            )}
        </StyledSection>
    )
}

export default AccordionSection
