import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Button from '../components/Button'

const StyledCarPool = styled.section`
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    /* height: 60vh;
    min-height:500px;
    max-height:800px; */
      &  img{
        height: 100%;
      }
    & > div :first-of-type{
        position: relative;
        /* display: flex; */
        /* align-items: center;
        justify-content: center;
        min-height: 400px; 
        overflow: hidden; */
        /* object-fit: cover; */

        & img {
            /* position: absolute;
            left: 50%; 
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            min-width: 100%;
            max-width: 110%;
            min-height: 300px;  */
        }
    }
`
const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > div{
        padding: var(--space-l) var(--space-side);
        max-width: 600px;
    }
    & p{
        margin-bottom: var(--space-m);
    }

`

const CarPool = (props) => (
    <StyledCarPool>
        <div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Oldtimersammlung in einer Garage"/>
        </div>
        <ContentContainer>
            <div>
                <h2>Fuhrparkversicherung</h2>
                <p>Besonders attraktiv ist das Angebot einer Fuhrparkversicherung für Sammler. Dabei wird der All-Risk-Beitrag nur für die Anzahl der maximal gleichzeitig bewegten Fahrzeuge berechnet. Eine Fuhrparkversicherung ist schon ab zwei Fahrzeugen möglich.</p>
                <Button primary>Jetzt anfragen</Button>
            </div>
        </ContentContainer>
    </StyledCarPool>
)


export default props => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "Car-pool.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  render={data => <CarPool data={data} {...props} />}
/>
)