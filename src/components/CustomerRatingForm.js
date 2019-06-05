import React from "react"
// import "../theme/forms.css"
import { ICONS } from "../theme/Icons"
import Icon from "../components/layout/Icon"

import styled from "styled-components"

// import Button from "../components/Button"

const StarRating = styled.fieldset`
    /* display: flex; */
    border: none;
    & > label {
        display: inline;
    }
`
const IconOff = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        fill: var(--color-medium);
    }
`

const IconOn = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        fill: var(--color-primary);
    }
`

const RatingRadio = styled.input`
    display: none;

    /* Hide off-icon */
    + label ${IconOff} {
        display: none;
    }
    /* Hide on-icon */
    :checked ~ label ${IconOn} {
        display: none;
    }
    :checked ~ label ${IconOff} {
        display: inline-block;
    }
`

const CustomerRatingForm = props => (
    <div>
        <h2>Vielen Dank für Ihr Vertrauen.</h2>
        <p>Wir freuen uns über eine positive Bewertung von Ihnen.</p>
        <form
            method="POST"
            action="https://dev.staticman.net/v3/entry/github/vajayjay/belmot-oldtimerversicherung/master/comments"
        >
            <label>
                <span>Ihr Name</span>
                <input type="text" id="form[name]" name="fields[name]" />
            </label>

            <label>
                <span>Ihre Rezension</span>
                <textarea id="form[name]" name="fields[review]" />
            </label>
            <StarRating>
                <span>Rating:</span>
                <label htmlFor="customer-rating[star-1]">
                    <IconOn>
                        <Icon icon={ICONS.STAR} />
                    </IconOn>
                </label>
                <RatingRadio
                    type="radio"
                    value="1"
                    name="fields[rating]"
                    id="customer-rating[star-1]"
                />
                <label htmlFor="customer-rating[star-2]">
                    <IconOff>
                        <Icon icon={ICONS.STAR} off />
                    </IconOff>
                    <IconOn>
                        <Icon icon={ICONS.STAR} on />
                    </IconOn>
                </label>
                <RatingRadio
                    type="radio"
                    value="2"
                    name="fields[rating]"
                    id="customer-rating[star-2]"
                />
                <label htmlFor="customer-rating[star-3]">
                    <IconOff>
                        <Icon icon={ICONS.STAR} off />
                    </IconOff>
                    <IconOn>
                        <Icon icon={ICONS.STAR} on />
                    </IconOn>
                </label>
                <RatingRadio
                    type="radio"
                    value="3"
                    name="fields[rating]"
                    id="customer-rating[star-3]"
                />
                <label htmlFor="customer-rating[star-4]">
                    <IconOff>
                        <Icon icon={ICONS.STAR} off />
                    </IconOff>
                    <IconOn>
                        <Icon icon={ICONS.STAR} on />
                    </IconOn>
                </label>
                <RatingRadio
                    type="radio"
                    value="4"
                    name="fields[rating]"
                    id="customer-rating[star-4]"
                />
                <label htmlFor="customer-rating[star-5]">
                    <IconOff>
                        <Icon icon={ICONS.STAR} off />
                    </IconOff>
                    <IconOn>
                        <Icon icon={ICONS.STAR} on />
                    </IconOn>
                </label>
                <RatingRadio
                    type="radio"
                    value="5"
                    name="fields[rating]"
                    id="customer-rating[star-5]"
                />
            </StarRating>
            <button>Absenden</button>
        </form>
    </div>
)

export default CustomerRatingForm
