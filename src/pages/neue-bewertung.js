import React from "react"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SEO from "../components/Seo"
import CustomerRatingForm from "../components/CustomerRatingForm"
import styled from "styled-components"

const StyledSection = styled.section`
    background: var(--color-lighter);
    padding: var(--space-m);
`
const StyledContent = styled.section`
    max-width: 600px;
    margin: var(--space-l) auto;
`

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Belmot Oldtimerversicherung"
                    keywords={[
                        `Belmot`,
                        `Oldtimerversicherung`,
                        `Youngtimer`,
                        `Oldtimer`,
                        `Bewerten`,
                    ]}
                    index="noindex"
                />
                <StyledSection>
                    <StyledContent>
                        <CustomerRatingForm />
                    </StyledContent>
                </StyledSection>
            </StandardLayout>
        )
    }
}

export default IndexPage
