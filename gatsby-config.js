require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Vuk Jovin's Blog`,
    siteDescription: `Content about content writing services and SEO`,
    siteUrl: `https://www.vukjovin.com`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Home`,
            slug: `/`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Facebook`,
            url: `https://www.facebook.com/vuk.jovin.98`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/vuk-jovin-1b2aa015/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/admin'],
        query: `
          {
            site {
              siteMetadata {
               siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
      },
    },
  ].filter(Boolean),
} 

