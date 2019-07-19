import React from "react"

class CookieNotice extends React.Component {
    componentDidMount() {
        window.addEventListener("load", function() {
            window.cookieconsent.initialise({
                palette: {
                    popup: {
                        background: "#0A1468",
                        text: "#ffffff",
                    },
                    button: {
                        background: "transparent",
                        text: "#ffffff",
                        border: "#fff",
                    },
                },
                position: "bottom-left",
                content: {
                    message:
                        "Diese Website nutzt Cookies um dein Erlebnis zu verbessern.",
                    dismiss: "Verstanden",
                    link: "Mehr erfahren",
                    href: "https://arztpraxis-schulzendorf.de/datenschutz",
                },
            })
        })
    }
    render() {
        return <span />
    }
}

export default CookieNotice
