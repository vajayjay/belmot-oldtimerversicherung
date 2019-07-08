import React from "react"
import styled from "styled-components"
import TypeCard from "../components/TypeCard"

// Define Data for cards
const CARS = [
    {
        type: "PKW",
        condition: "Baujahr 1989 und älter",
        img: "pkw",
        imgAlt: "PKW-Oldtimer Icon",
    },
    {
        type: "Youngtimer",
        condition: "nach individueller Beurteilung",
        img: "youngtimer",
        imgAlt: "Youngtimer Icon",
    },
    {
        type: "Motorräder",
        condition: "Baujahr 1980 und älter",
        img: "motorrad",
        imgAlt: "Motorrad-Oldtimer Icon",
    },
    {
        type: "Traktoren",
        condition: "Baujahr 1980 und älter",
        img: "traktor",
        imgAlt: "Oldtimer-Traktor Icon",
    },
    {
        type: "Lieferwagen & LKW",
        condition: "Baujahr 1969 und älter, jüngere Fahrzeuge auf Anfrage",
        img: "lkw",
        imgAlt: "LKW-Oldtimer Icon",
    },
]

const StyledSection = styled.section`
    width: 100%;
    background: var(--color-lighter);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledH2 = styled.h2`
    margin-top: 15vh;
`

const ContentContainer = styled.div`
    padding: var(--space-l) 0;
    max-width: 100%;
    /* display: flex;
    flex-wrap: nowrap; */
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    overflow-y: hidden;
    margin-bottom: 15vh;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 0px repeat(${CARS.length}, 220px) 20px;

    &::before,
    &::after {
        content: "";
    }

    @media (min-width: 769px) {
        grid-template-columns:
            var(--space-side)
            repeat(${CARS.length}, 230px)
            var(--space-side);
    }
`

const TypesOfCars = props => (
    <StyledSection>
        <StyledH2>Die Oldtimerverischerung für</StyledH2>
        <ContentContainer>
            {CARS.map((CARS, index) => {
                return (
                    <TypeCard type={CARS.img} key={index} imgAlt={CARS.imgAlt}>
                        <h3>{CARS.type}</h3>
                        <span>{CARS.condition}</span>
                    </TypeCard>
                )
            })}
        </ContentContainer>
    </StyledSection>
)

export default TypesOfCars
