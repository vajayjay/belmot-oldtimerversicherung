/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = ({ location }) => {
    anchorScroll(location)
    return true
}
exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    anchorScroll(location)
    return true
}

function anchorScroll(location) {
    // Check for location so build does not fail
    if (location && location.hash) {
        setTimeout(() => {
            // document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
            const item = document.querySelector(`${location.hash}`).offsetTop
            const mainNavHeight = document.querySelector(`nav`).offsetHeight
            window.scrollTo({
                top: item - mainNavHeight,
                left: 0,
                behavior: "smooth",
            })
        }, 0)
    }
}
