module.exports = {
  siteMetadata: {
    title: `alexwhirley.com`,
    description: ``,
    author: `Alex Whirley`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `whirley_personal-portfolio-site`,
        short_name: `whirley_personal`,
        start_url: `/home`,
        background_color: `#37234a`,
        theme_color: `#37234a`,
        display: `minimal-ui`,
        icon: `src/images/unicorn-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
