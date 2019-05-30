import React from "react"

// import styled from "styled-components"
// import Icon from "../components/layout/Icon"
// import { ICONS } from "../theme/Icons"
// import Button from "../components/Button"

const CustomerRatingForm = props => (
    <div>
        <p>ttest</p>
        <form
            method="POST"
            action="https://dev.staticman.net/v3/entry/github/vajayjay/oldtimer-versicherung/master/reviews"
        >
            <label>
                Your name
                <input type="text" id="movie-form[name]" name="fields[name]" />
            </label>
            <button>Absenden</button>
        </form>
    </div>
)

export default CustomerRatingForm
