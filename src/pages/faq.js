import React from "react"
import AlternativeLayout from "../components/pagelayouts/AlternativeLayout"
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
                    h1={<h1>Sie haben Fragen?</h1>}
                    p={
                        <p>
                            Keine Antwort gefunden?
                            <br />
                            Erreichen Sie mich unter:
                            <br />
                            <a href="mailto:info@belmot-oldtimerversicherung.de">
                                info@belmot-oldtimerversicherung.de
                            </a>
                            <br />
                            <a href="tel:+4951919313199">05191 - 931 31 99</a>
                        </p>
                    }
                >
                    <Accordion
                        allowZeroExpanded={true}
                        itemScope
                        itemType="https://schema.org/FAQPage"
                    >
                        {FAQ.map(function(e, i) {
                            return (
                                <AccordionItem
                                    key={i}
                                    itemScope
                                    itemProp="mainEntity"
                                    itemType="http://schema.org/Question"
                                >
                                    <AccordionItemHeading itemProp="name">
                                        <AccordionItemButton>
                                            {e.question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel
                                        itemScope
                                        itemProp="acceptedAnswer"
                                        itemType="http://schema.org/Answer"
                                    >
                                        <p
                                            itemProp="text"
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
