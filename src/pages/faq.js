import React from "react"
import AlternativeLayout from "../components/AlternativeLayout"
import SEO from "../components/Seo"
import SupportSection from "../components/layout/SupportSection"
import FAQ from "../../content/copy/Faq"
import "../theme/accordion.css"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from "react-accessible-accordion"

class IndexPage extends React.Component {
    render() {
        return (
            <AlternativeLayout>
                <SEO
                    title="FAQ"
                    keywords={[
                        `Belmot`,
                        `Oldtimerversicherung`,
                        `Fragen`,
                        `Antworten`,
                    ]}
                />
                <SupportSection
                    h1={
                        <h1>
                            Haben Sie <br />
                            Fragen?
                        </h1>
                    }
                    p={
                        <p>
                            Keine Antwort gefunden?
                            <br />
                            Erreichen Sie mich unter:
                            <br />
                            info@belmot-oldtimerversicherung.de
                            <br />
                            05191- 931 31 99
                        </p>
                    }
                >
                    <Accordion allowZeroExpanded={true}>
                        {FAQ.map(function(e, i) {
                            return (
                                <AccordionItem key={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {e.question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: e.answer,
                                            }}
                                        />
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </SupportSection>
            </AlternativeLayout>
        )
    }
}

export default IndexPage
