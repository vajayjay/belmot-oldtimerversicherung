import React from 'react'
import styled from 'styled-components'
// import Pkw from '../../content/images/pkw.svg'
// import ImageSource from `../../content/images/${this.props.type}.svg` 


const StyledTypeCard = styled.div`
    background: var(--color-white);
    box-shadow: 0px 3px 15px rgba(58, 71, 143, 0.05);
    text-align: center;
    padding: 30px 1vw 40px 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* max-height: 250px; */
    /* min-width: 180px;
    max-width: 180px; */
    /* margin-right: 20px; */
    /* word-wrap: wrap;
    white-space: normal; */
    /* @media (min-width: 769px) {
        min-width: 230px;
        max-width: 230px;
    } */

    &> span {
        font-size: var(--small);
        color: var(--color-dark);
        margin-top: 1rem;
        font-size:14px;
    }
`
const Circle = styled.div`
    background: var(--color-lighter);
    min-height: 120px;
    width: 120px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px 0px 15px rgba(58, 71, 143, 0.05);
    margin-bottom: 28px;
`
const StyledImage = styled.img`
    max-height: 34px;
`


const TypeCard = (props) => (
    <StyledTypeCard>
        <Circle>
            <StyledImage src={require(`../../content/images/${props.type}.svg`)} alt="PKW Oldtimer Icon"/>
        </Circle>
        { props.children }
    </StyledTypeCard>
)


export default TypeCard