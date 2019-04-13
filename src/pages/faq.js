import React from 'react'
// import { Link } from 'gatsby'


import AlternativeLayout from '../components/AlternativeLayout'
import SEO from '../components/Seo'
import styled from 'styled-components'
import  Accordion from '../components/Accordion'
// import Collapse from '@kunukn/react-collapse';



// const Accordion = styled.button`
//   background-color: #eee;
//   color: #444;
//   cursor: pointer;
//   padding: 18px;
//   width: 100%;
//   text-align: left;
//   border: none;
//   outline: none;
//   transition: 0.4s;
// `
// const AccordionPanel = styled.div `
//   padding: 0 18px;
//   background-color: white;
//   display: none;
//   overflow: hidden;
// `
const SupportSection = styled.section`
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

class IndexPage extends React.Component {
   
  render(){
    return(
      <AlternativeLayout>
        <SEO title="FAQ" keywords={[`Belmot`, `Oldtimerversicherung`, `Fragen`]} />
        <SupportSection>
            <SideInfo>
                <h1>Haben Sie <br />Fragen?</h1>
                <p>Keine Antwort gefunden?<br/>
                    Erreichen Sie mich unter:<br/>
                    info@belmot-oldtimerversicherung.de<br/>
                    05191- 931 31 99</p>
            </SideInfo>
            <MainContentBox>
                <Accordion />             
            </MainContentBox>

        </SupportSection>
      </AlternativeLayout>
    )
  }
}

export default IndexPage
