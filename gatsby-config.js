module.exports = {
    siteMetadata: {
        title: `Belmot Oldtimerversicherung`,
        description: `Perfekt abgesichert – leistet bei Unfall, aber auch bei Motor- oder Getriebeschäden, Schäden durch Fehlbedienung oder ausgelaufenene Batterien.`,
        author: `Heiner Blaskewittz, Jannis Wicke`,
        image: "/social-image.jpg", // Path to your image you placed in the 'static' folder
        siteUrl: `https://belmot-oldtimerversicherung.de`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/content/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: "https://belmot-oldtimerversicherung.de",
                sitemap: "https://belmot-oldtimerversicherung.de/sitemap.xml",
                policy: [{ userAgent: "*", disallow: "/" }],
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/reviews`,
            },
        },
        {
            resolve: `gatsby-plugin-webpack-bundle-analyzer`,
            options: {
                analyzerPort: 3000,
                production: false,
            },
        },
    ],
}
