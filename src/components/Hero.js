import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import styled from 'styled-components'
import Icon from '../components/layout/Icon'
import {ICONS} from '../theme/Icons'

const StyledHero = styled.section`
  /* height: 100vh; */
`
const StyledImg = styled(Img)`
    position: relative;
    height: 40vh;
    /* left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%); */
    min-width: 100%;
    /* max-width: 110%; */
    /* min-height: 300px; */
`
const HeadlineContainer = styled.div`
  /* position: absolute; */
  bottom:0;
  background: var(--color-primary);
  & h1 {
    margin:0;
  }
  & span {
    color: var(--color-primary);
  }
  & > div:first-of-type {
    padding: var(--space-m);
    background: var(--color-white);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  }

`


const RatingContainer = styled.div`
  position: relative;
  width: 100%;
  height:70px;
  span {
  color: var(--color-white);
  }
  & > div {
    position: absolute;
    bottom: 0;
    width: calc(100% - 70px);
    height: 70px;
    padding: 0 var(--space-m);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
  }
  & svg {
    fill: white;
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
          <Icon icon={ICONS.CHECKMARK} />
        </Link>
        </RatingContainer>
      </HeadlineContainer>
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