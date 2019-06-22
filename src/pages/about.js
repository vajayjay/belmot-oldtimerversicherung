import React from "react"
import { Link } from "gatsby"

import StandardLayout from "../components/pagelayouts/StandardLayout"
import SEO from "../components/Seo"
import Image from "../components/Image"
import ComponentWithImage from "../components/ComponentWithImage"
import Button from "../components/Button"
import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"

const SecondPage = () => (
    <StandardLayout>
        <SEO title="About" />
        <h1>Here is a list of components</h1>

        <section>
            <h2>Buttons</h2>
            <Button primary link="#">
                Primary Button
            </Button>
            <Button link="#">Button</Button>
            <Button fullwidth link="# ">
                Fullwidth Button
            </Button>
            <br />
            <br />
        </section>
        <section>
            <h2>Icons</h2>
            <Icon icon={ICONS.CHECKMARK} />
            <p>This is an icon</p>
            <br />
        </section>
        <section>
            <h2>Images</h2>
            <h3>Image as a component</h3>
            <Image />
            <h3>Component with an Image </h3>
            <ComponentWithImage />
        </section>
        <section>
            <h1>Headline 1</h1>
            <h2>Headline 2</h2>
            <h3>Headline 3</h3>
            <h4>Headline 4</h4>
            <h5>Headline 5</h5>
            <p>Paragraph text</p>
            <Link to="/impressum/">link</Link>
        </section>
    </StandardLayout>
)

export default SecondPage
