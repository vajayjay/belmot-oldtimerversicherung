import React from "react"
import styled from "styled-components"
import TypeCard from "../components/TypeCard"
import { device } from "../theme/breakpoints"

// Define Data for cards
const CARS = [
    {
        type: "PKW",
        condition: `Erstzulassung 1989 und älter, max. 9.000 km pro Jahr`,
        img: "pkw",
        imgAlt: "PKW-Oldtimer Icon",
    },
    {
        type: "Youngtimer",
        condition: "Erstzulassung 1990 bis 1999, max. 6.000 km pro Jahr",
        img: "youngtimer",
        imgAlt: "Youngtimer Icon",
    },
    {
        type: "Motorräder",
        condition: `Erstzulassung 1980 und älter`,
        img: "motorrad",
        imgAlt: "Motorrad-Oldtimer Icon",
    },
    {
        type: "Traktoren",
        condition: `Erstzulassung 1980 und älter`,
        img: "traktor",
        imgAlt: "Oldtimer-Traktor Icon",
    },
    {
        type: "Lieferwagen & LKW",
        condition: "Erstzulassung 1980 & älter, jüngere Fahrzeuge auf Anfrage",
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
    padding: var(--space-l) var(--space-side);
    max-width: 100%;
    margin-bottom: 15vh;
    display: grid;
    grid-gap: 20px;
    width: 100%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    @media ${device.tablet} {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    @media ${device.desktop} {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

const TypesOfCars = (props) => (
    <StyledSection>
        <StyledH2>Die Oldtimerversicherung für</StyledH2>
        <ContentContainer>
            {CARS.map((CARS, index) => {
                return (
                    <TypeCard type={CARS.img} key={index} imgAlt={CARS.imgAlt}>
                        <div>
                            <h3>{CARS.type}</h3>
                            <span>{CARS.condition}</span>
                        </div>
                    </TypeCard>
                )
            })}
        </ContentContainer>
    </StyledSection>
)

export default TypesOfCars
