import React from "react"
// import "../theme/forms.css"
import { ICONS } from "../theme/Icons"
import Icon from "../components/layout/Icon"

import styled from "styled-components"

const StarRating = styled.fieldset`
    display: block;
    margin-bottom: var(--space-m);
    border: none;
    & > label {
        display: inline;
    }
`
const IconOff = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        width: 50px;
        height: 50px;
        fill: var(--color-medium);
    }
`

const IconOn = styled.div`
    display: inline-block;
    vertical-align: middle;
    & > svg {
        width: 50px;
        height: 50px;
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

const StyledButton = styled.button`
    margin-top: var(--space-m);
    display: inline-block;
    background: ${props =>
        props.primary ? "var(--color-primary)" : "var(--color-white)"};
    border: 2px solid
        ${props =>
            props.primary ? "var(--color-primary)" : "var(--color-white)"};
    color: ${props =>
        props.primary ? "var(--color-white)" : "var(--color-black)"};

    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    user-select: none;
    cursor: pointer;

    padding: 1rem 2rem;
    margin-bottom: var(--space-s);

    width: 100%;
    transform: translateY(0);
    transition: all var(--time-fast);

    @media (min-width: 500px) {
        width: ${props => (props.fullwidth ? "100%" : "auto")};
    }

    :hover {
        color: ${props =>
            props.primary ? "var(--color-white)" : "var(--color-black)"};
        background: ${props =>
            props.primary
                ? "var(--color-primary-light)"
                : "var(--color-lighter)"};
        border-color: ${props =>
            props.primary
                ? "var(--color-primary-light)"
                : "var(--color-lighter)"};
        transform: translateY(-1px);
        transition: all var(--time-fast);
    }
    :active {
        background: ${props =>
            props.primary ? "var(--color-primary-dark)" : "var(--color-light)"};
        transform: translateY(1px);
    }
`

const CustomerRatingForm = props => (
    <div>
        <h1>
            Wir freuen uns <br />
            über Ihre Bewertung!
        </h1>
        <form
            method="POST"
            action="https://dev.staticman.net/v3/entry/github/vajayjay/belmot-oldtimerversicherung/master/reviews"
        >
            <input
                type="hidden"
                name="options[redirect]"
                value="https://hungry-wilson-001a08.netlify.com/bewertung-erfolgreich"
            />
            <StarRating>
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
                    defaultChecked
                />
            </StarRating>
            <label>
                <span>Ihr Name</span>
                <input
                    type="text"
                    id="form[name]"
                    name="fields[name]"
                    required
                />
            </label>

            <label>
                <span>Ihre Rezension</span>
                <textarea name="fields[review]" required />
            </label>

            <StyledButton>Absenden</StyledButton>
        </form>
    </div>
)

export default CustomerRatingForm
