import React from "react"
// import ReactDOM from 'react-dom';

// import accordionStyles from '../components/accordion.module.styles'
// import styled from 'styled-components'
import AccordionSection from "../components/AccordionSection"

const qa = [
    {
        question: "Was ist der Wiederbeschaffungswert?",
        answer:
            "Die Versicherungsbedingungen und sonstigen Begleitinformationen finden Sie hier",
    },
    {
        question: "Was versteht man unter dem Begriff Marktwert?",
        answer:
            "Die Versicherungsbedingungen und sonstigen Begleitinformationen  Sie hier",
    },
    {
        question:
            "Was ist eine Selbsteinschätzung bei der Oldtimerversicherung?",
        answer: "Die Versicherungsbedingungen und sonstigen  finden Sie hier",
    },
    {
        question: "Welcher Wert ist der richtige?",
        answer:
            "Die Versicherungsbedingungen und sonstigen Begleitinformationen finden Sie hier",
    },
]
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
                {qa.map(function(e, i) {
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
