import React from "react"
// import { CookieConsent } from "cookieconsent"

class CookieNotice extends React.Component {
    componentDidMount() {
        window.addEventListener("load", function() {
            window.cookieconsent.initialise({
                container: document.getElementById("content"),
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
                revokable: true,
                onStatusChange: function(status) {
                    console.log(
                        this.hasConsented()
                            ? "enable cookies"
                            : "disable cookies"
                    )
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
