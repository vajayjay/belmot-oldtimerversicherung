import React from 'react'

import styled from 'styled-components'
import Icon from '../components/layout/Icon'
import {ICONS} from '../theme/Icons'
import Button from '../components/Button'


const StyledBenefit = styled.section`
    width: 100%;
    background: var(--color-darker);
    padding: var(--space-l) var(--space-side);
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    max-width: 694px;
    & > h2,
    & > p{
        color: var(--color-white);
        text-align: center;
    }
    & > p{
        margin-bottom: var(--space-l);
    }
`

const StyledIcon = styled.div`
    width: 54px;
    height: 54px;
    background: var(--color-white);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
    border-radius: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--space-m);
    & > svg {
        fill: var(--color-primary);
    }
`




const Benefit = (props) => (
    <StyledBenefit>
        <ContentContainer>
        <StyledIcon>
            <Icon icon={ICONS.CHECKMARK} />
        </StyledIcon>
        <h2>Online-Angebot</h2>
        <p>Nutzen Sie das Online-Anfrageformular, um schnell und bequem Ihr persönliches Angebot zur Oldtimer-Versicherung anzufordern. Ihr Angebot kommt innerhalb 24 Stunden.</p>
        <Button>Jetzt anfragen</Button>
        </ContentContainer>
    </StyledBenefit>
)


export default Benefit