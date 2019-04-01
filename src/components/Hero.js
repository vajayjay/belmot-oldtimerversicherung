import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import styled, {keyframes} from 'styled-components'
import Icon from '../components/layout/Icon'
import {ICONS} from '../theme/Icons'

const StyledHero = styled.section`
  position: relative;
`
const StyledImg = styled(Img)`
  position: relative;
  height: 40vh;
  min-width: 100%;

  @media (min-width: 769px){
    min-height: 500px;
    height: 80vh;
  }
`
/*Container for all text content*/
const HeadlineContainer = styled.div`
  background: var(--color-primary);
  overflow: hidden;
  box-shadow: 0px 4px 14px  rgba(0, 0, 0, 0.25);
  & h1 {
    margin:0;
  }
  & span {
    color: var(--color-primary);
  }
  /*White headline area*/
  & > div:first-of-type {
    padding: var(--space-m);
    background: var(--color-white);
    box-shadow: 0px 4px 14px  rgba(0, 0, 0, 0.25);
  }
  /*Desktop styles*/
  @media (min-width: 769px){
    position: absolute;
    top: 20vh;
    max-width: 450px;
    margin-left: var(--space-m);
  }

`

/*Blue area with customer ratings*/
const RatingContainer = styled.div`
  position: relative;
  width: 100%;
  height:70px;
  /* box-shadow: 0px 4px 14px  rgba(0, 0, 0, 0.25); */
  span {
  color: var(--color-white);
  }
  /*stars and text container*/
  & > div {
    position: absolute;
    bottom: 0;
    width: calc(100% - 70px);
    height: 70px;
    padding: 0 var(--space-m);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (min-width: 769px){
      width: 100%;

    }
  }

  & > a {
    position: absolute;
    top: 0;
    right:0;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-primary-dark);
    @media (min-width: 769px){
      display: none;
    }
  }
  & svg {
    fill: white;
    height: 30%;
  }
`
/*Animation for Learn more/scrolldown container*/
const bounce = keyframes`
  from {transform: translateY(0);}
  to {transform: translateY(3px);}
`

/*Lern more/scrolldown container on desktop*/
const LernMore = styled(Link)`
  @media (max-width: 768px) {
    display: none;
  }

  position: absolute;
  bottom: 0;
  margin-left: var(--space-m);
  /* left:var(--space-l); */
  background: var(--color-white);
  text-decoration: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px; /*This causes wrong left margin*/
  font-weight: 500;
  color: var(--color-darker);

 & > span{
  margin: 0 40px;
 }
/*Blue arrow container*/
 & > div{
   height: 80px;
   width: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: var(--color-primary);
   transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

   & > svg {
     fill: white;
     height: 30%;
   }
 }
 :hover div{
    background: var(--color-primary-dark);
    transition: background 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
   }
  :hover svg {
    animation: 300ms ${bounce} ease-in alternate infinite;
  }
`


const Hero = (props) => (
  <StyledHero>
      <StyledImg fluid={props.data.imageOne.childImageSharp.fluid} alt="Description"/>
      <HeadlineContainer>
        <div>
          <h1>Versicherung für deinen <span>Young-</span> und <span>Oldtimer</span></h1>
        </div>
        <RatingContainer>
        <div>
          <span>★★★★★ <wbr/>von 461 zufriedenen Kunden</span>
        </div>
        <Link to='#'>
          <Icon icon={ICONS.CHEVRON} />
        </Link>
        </RatingContainer>
      </HeadlineContainer>
      <LernMore to='#'>
        <span>Mehr erfahren</span>
        <div><Icon icon={ICONS.CHEVRON} /></div>
      </LernMore>
  </StyledHero>
)


export default props => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "Hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  render={data => <Hero data={data} {...props} />}
/>
)