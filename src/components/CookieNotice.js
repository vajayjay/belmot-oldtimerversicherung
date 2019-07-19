import React from "react"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"

const CookieNotice = () => (
    <div>
        <CookieConsent
            debug={true}
            // disableStyles={true}
            location="none"
            buttonText="Verstanden"
            cookieName="Cookies-Notice-Accepted"
            style={{
                background: "var(--color-primary",
                color: "var(--color-white)",
                position: "relative",
                zIndex: "0",
            }}
            buttonStyle={{
                background: "var(--color-white)",
                color: "var(--color-primary)",
                fontWeight: "600",
                fontSize: "18px",
                padding: "var(--space-s)",
                border: "none",
                cursor: "pointer",
            }}
            expires={365}
        >
            Diese Website nutzt Cookies um Ihr Erlebnis zu verbessern.{" "}
            <Link to="/datenschutz" style={{ color: "white" }}>
                Mehr erfahren
            </Link>
        </CookieConsent>
    </div>
)

export default CookieNotice
