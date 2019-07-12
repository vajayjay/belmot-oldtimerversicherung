import React from "react"
// import { Link } from "gatsby"
// import StandardLayout from "../components/pagelayouts/StandardLayout"
// import styled from "styled-components"
// import "../theme/forms.css"
// import "../theme/form-conditions.css"
// import SEO from "../components/Seo"
// import TextInput from "../components/TextInput"
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "Please write an essay about your favorite DOM element.",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // handleChange(event) {
    //     this.setState({ value: event.target.value.toUpperCase() })
    // }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm
