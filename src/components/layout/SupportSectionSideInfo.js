import React from 'react'
import styled from 'styled-components'

const StyledSupportSection = styled.section`
    padding: var(--space-side);
    display: flex;
    flex-basis:1 1 ;
    flex-wrap: wrap;
`

const SideInfo = styled.div`
    flex: 1 1 350px;
    margin-bottom: var(--space-l);
    display: grid;
    grid-template-columns: repeat(2,minmax(244px,1fr));
    @media (min-width: 1265px){
        display: inline-block;
        margin-right: var(--space-side);
    }

    & h1,h2,h3, p{
        color: white;
  }

  `
const MainContentBox = styled.div`
    flex: 10 1 700px;
    background: white;
    max-width: 900px;
    padding: var(--space-side);
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);

`


const SupportSection = (props) => (
    <StyledSupportSection>
        <SideInfo>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </SideInfo>
        <MainContentBox>{props.children}</MainContentBox>>
    </StyledSupportSection>
)

export default SupportSection