module.exports = {
  siteMetadata: {
    title: `damien hervieux`,
    description: `damien hervieux online resume`,
    author: `damien hervieux`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "portfolio.gastby",
        protocol: "https",
        hostname: "www.dherv.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Damien Hervieux`,
        short_name: `damien`,
        start_url: `/`,
        background_color: `#e0f2f1`,
        theme_color: `#e0f2f1`,
        display: `standalone`,
        icon: `static/android-chrome-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
