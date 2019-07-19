import React from "react"
import styled from "styled-components"

import "../../theme/font-face.css"
import "../../theme/variables.css"
import "../../theme/styles.css"

import NavBar from "../Navigation/NavBar"
import MobileMenu from "../Navigation/MobileMenu"
import Footer from "../Footer"

/*enable smooth scrolling*/
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const App = styled.div`
    height: 100%;
`
const Main = styled.main`
    margin-top: 50px;
    @media (min-width: 769px) {
        margin-top: 100px;
    }
`

class StandardLayout extends React.Component {
    state = {
        mobileMenuOpen: false,
    }
    burgerButtonToggleClickHandler = () => {
        this.setState(prevState => {
            // console.log('toggle')
            return { mobileMenuOpen: !prevState.mobileMenuOpen }
        })
    }

    render() {
        return (
            <>
                <App>
                    <NavBar
                        burgerButtonClickHandler={
                            this.burgerButtonToggleClickHandler
                        }
                        showMobileMenu={this.state.mobileMenuOpen}
                    />
                    {/* The following line causes an error */}
                    <MobileMenu showMobileMenu={this.state.mobileMenuOpen} />
                    <Main>{this.props.children}</Main>
                    <Footer />
                </App>
            </>
        )
    }
}

export default StandardLayout
