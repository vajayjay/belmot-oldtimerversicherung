import React from 'react'
// import { Link } from 'gatsby'

import StandardLayout from '../components/StandardLayout'
import styled from 'styled-components'

import SEO from '../components/Seo'
import TextInput from '../components/TextInput'

const StyledForm = styled.form`
  padding: var(--space-l) var(--space-side);
  max-width: 600px;
  margin: auto;
  background: var(--color-lighter);
`



class IndexPage extends React.Component {
  render(){
    return(
      <StandardLayout>
        <SEO title="Online-Anfrage" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Online-Anfrage</h1>
        <StyledForm
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <label>
                <span>Anrede</span>
                <input label="Anrede" type="radio" name="anrede" defaultChecked></input>
                Herr
                <input label="Anrede" type="radio" name="anrede" ></input>
                Frau
            </label>
            <TextInput label="Vorname" type="text" required>
            </TextInput>
            <TextInput label="Nachname" type="text" >
            </TextInput>
            <TextInput label="Email" type="email" required>
            </TextInput>
            <TextInput label="Geburtsdatum des Fahrzeughalters" type="text" required>
            </TextInput>
            <TextInput label="Straße und Hausnummer" type="text" required>
            </TextInput>
            <TextInput label="Postleitzahl" type="text" required>
            </TextInput>
            <TextInput label="Ort" type="text" required>
            </TextInput>
            <label>
                <span>Sind Sie Mitglied in einem Oldtimerclub?</span>
                <input type="radio" name="Oldtimerclub" defaultChecked></input>
                Nein
                <input type="radio" name="Oldtimerclub" ></input>
                Ja
            </label>

            <TextInput label="Name des Oldtimerclubs" type="text">
            </TextInput>



          <input type="submit" value="Abschicken"></input>
        </StyledForm>
      </StandardLayout>
    )
  }
}

export default IndexPage
