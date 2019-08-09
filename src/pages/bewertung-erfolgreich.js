import React from "react"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SectionCenteredFullHeight from "../components/layout/SectionCenteredFullHeight"
import styled from "styled-components"
import SEO from "../components/Seo"
import { device } from "../theme/breakpoints"

const StyledImage = styled.img`
    width: 100px;
    margin-bottom: var(--space-m);
    @media ${device.desktop} {
        position: relative;
        width: 200px;
    }
`

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO title="Bewertung erfolgreich " index="noindex" />
                <SectionCenteredFullHeight>
                    <StyledImage
                        src={require(`../../content/images/success.svg`)}
                        alt="Icon mit Konfetti"
                    />
                    <h1>Vielen Dank für Ihre Bewertung!</h1>
                    <p>
                        Wir überprüfen ihre Bewertung und werden sie in den
                        nächsten Tagen veröffentlichen.
                    </p>
                </SectionCenteredFullHeight>
            </StandardLayout>
        )
    }
}

export default IndexPage
