import React, { Component } from "react"

class Anfrage extends Component {
    state = {
        anrede: null,
        vorname: null,
        nachname: null,
        geburtsdatum: null,
    }
    handleChange = e => {
        // console.log(e.target.id, e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
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
                    <label htmlFor="vorname">
                        Vorname:
                        <input
                            type="text"
                            name="vorname"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="nachname">
                        Nachname:
                        <input
                            type="text"
                            name="nachname"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="geburtsdatum">
                        Geburtsdatum des Fahrzeughalter
                        <input
                            type="text"
                            name="geburtsdatum"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="geburtsdatum">
                        Geburtsdatum des Fahrzeughalter
                        <input
                            type="text"
                            name="geburtsdatum"
                            onChange={this.handleChange}
                        />
                    </label>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Anfrage
