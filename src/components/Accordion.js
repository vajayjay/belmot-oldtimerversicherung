import React from "react"
import AccordionSection from "../components/AccordionSection"
import FAQ from "../../content/copy/Faq"

class Accordion extends React.Component {
    state = {
        currentIndex: -1,
    }
    handleChange = i => {
        this.setState({
            currentIndex: i,
        })
    }
    render() {
        const { handleChange } = this
        const { currentIndex } = this.state
        return (
            <div>
                {FAQ.map(function(e, i) {
                    return (
                        <AccordionSection
                            question={e.question}
                            answer={e.answer}
                            handleChange={handleChange}
                            key={i}
                            index={i}
                            currentIndex={currentIndex}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Accordion
