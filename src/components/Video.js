import React from "react"

import styled from "styled-components"
// import Icon from "../components/layout/Icon"
// import { ICONS } from "../theme/Icons"
// import Button from "../components/Button"
import { device } from "../theme/breakpoints"

const StyledVideo = styled.section`
    width: 100%;
    background: var(--color-darker);
    padding: var(--space-v) 0 0;
    @media ${device.mobileL} {
        padding: var(--space-v) var(--space-side);
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 694px;
    & > h2 {
        text-align: center;
        color: var(--color-white);
        margin-bottom: var(--space-m);
        padding: 0 var(--space-side);
    }
    & > p {
        margin-bottom: var(--space-l);
        color: var(--color-lighter);
        text-align: center;
    }
    iframe {
        max-width: 100%;
        /* height: auto; */
        background: red;
    }
`

const Video = props => (
    <StyledVideo>
        <ContentContainer>
            <h2>Unkopierbar – Unsere Leidenschaft für Oldtimer</h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/Lo_oF0M85XI"
                frameBorder="0"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
                title="Belmot Oldtimerversicherung Video"
            ></iframe>
            {/* <Button link="/anfrage">Jetzt anfragen</Button> */}
        </ContentContainer>
    </StyledVideo>
)

export default Video
