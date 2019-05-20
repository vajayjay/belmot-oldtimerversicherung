import React from 'react'
import styled from 'styled-components'

const StyledSupportSection = styled.section`
    width: 100%;
    max-width: 1500px;
    margin: auto;
    /* padding: var(--space-side); */
    display: flex;
    flex-basis:1;
    flex-wrap: wrap;
`

const SideInfo = styled.div`
    flex: 1 1 350px;
    margin: var(--space-side) var(--space-m);
    display: grid; 
    align-items: flex-start;
    grid-template-columns: repeat(auto-fill, minmax(244px,1fr));
    h1{
        margin-top: 20px;
        margin-bottom: 0;
    }
    @media (min-width: 560px){
        margin-top: 20px;
        h1{
            margin-top: inherit;
            margin-bottom: inherit;
        }
    }
    @media (min-width: 1264px){
        h1{
            margin-top: 0;
        }
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
            {props.h1}
            {props.p}
        </SideInfo>
        <MainContentBox>
            {props.children}
        </MainContentBox>
    </StyledSupportSection>
)

export default SupportSection