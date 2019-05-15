import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import AlternativeLayout from '../components/AlternativeLayout'
import SEO from '../components/Seo'
import SupportSection from '../components/layout/SupportSection'
import Icon from '../components/layout/Icon'
import {ICONS} from '../theme/Icons'

/*Animation for Learn more/scrolldown container*/
// const pulse = keyframes`
//   0% {transform: scale(1);}
//   20% {transform: scale(1.2);}
//   50% {transform: scale(1.1);}
//   80% {transform: scale(1.2);}
//   100% {transform: scale(1));}
// `

const ContactLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-black);
    font-weight:600;
    transform: scale(1);
    svg{
        transition: transform 200ms ease;

    }
    :hover svg{
        transform: scale(1.2);
        transition: transform 200ms ease infinite;

    }
`


const ContactIcon = styled.div`
    background: var(--color-primary);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;

    & > svg {
            fill: var(--color-white);
            max-width:24px;
        }
`

class IndexPage extends React.Component {
  render(){
    return(
      <AlternativeLayout>
        <SEO title="Kontakt" keywords={[`gatsby`, `application`, `react`]} />
        <SupportSection
            h1={<h1>Kontakt</h1>}
            p={<p>Sie erreichen mich<br/>Montags bis Freitags <br/>von 10-18 Uhr</p>}
        >
            <ContactLink href="mailto:info@belmot-oldtimerversicherung.de">
                <ContactIcon>
                    <Icon icon={ICONS.CHECKMARK} />
                </ContactIcon>
                info@belmot-oldtimerversicherung.de</ContactLink><br/>
            <ContactLink href="tel:+4951919313199">
                <ContactIcon>            
                    <Icon icon={ICONS.PHONE} />
                </ContactIcon>
                    05191 931 31 99
                </ContactLink><br/>
                {/* <Link to="/">Zurück zur Startseite</Link> */}
        </SupportSection>
      </AlternativeLayout>
    )
  }
}

export default IndexPage
