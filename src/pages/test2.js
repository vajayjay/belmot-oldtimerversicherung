import React, { Component } from "react"

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}
class Anfrage extends Component {
    constructor(props) {
        super(props)
        this.state = { anrede: "", name: "", email: "", message: "" }
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "anfrage", ...this.state }),
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error))
        console.log(this.state)
        e.preventDefault()
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, message } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Anrede</legend>
                    <label>
                        <input
                            type="radio"
                            id="herr"
                            value="herr"
                            name="anrede"
                            defaultChecked
                            onChange={this.handleChange}
                        />
                        Herr
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="frau"
                            value="frau"
                            name="anrede"
                            onChange={this.handleChange}
                        />
                        Frau
                    </label>
                </fieldset>
                <p>
                    <label>
                        Your Name:{" "}
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Your Email:{" "}
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Message:{" "}
                        <textarea
                            name="message"
                            value={message}
                            onChange={this.handleChange}
                        />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        )
    }
}

export default Anfrage
