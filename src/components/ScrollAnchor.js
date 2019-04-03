import React from 'react'
import styled from 'styled-components'

const StyledAnchor = styled.div`
    display: block;
    position: relative;
    top: -10vh;
    visibility: hidden;
`

const ScrollAnchor = (props) => (
    <StyledAnchor id="scroll-anchor">
    </StyledAnchor>
)

export default ScrollAnchor