module.exports = {
    siteMetadata: {
        title: `🚘 Belmot Oldtimerversicherung 🚘`,
        description: `Allgefahrendeckung – Premiumschutz auch für Motor- und Getriebeschäden. Erstklassige Beratung, beste Oldtimerversicherung.`,
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
                name: `Belmot Oldtimerversicherung`,
                short_name: `Oldtimerversicherung`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#2a72d3`,
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
                policy: [{ userAgent: "*", allow: "/" }],
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
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-99324592-4",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                // head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                // respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                // pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional create only fields (optional)
                // sampleRate: 5,
                // siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                id: 1396202,
                sv: 6,
            },
        },
    ],
}
