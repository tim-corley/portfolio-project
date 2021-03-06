require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Tim's Portfolio`,
    description: `My portfolio site! Explore my projects, review my resume, read my blog, and get in touch.`,
    author: `Tim Corley`
  },
  plugins: [
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: process.env.GATSBY_GITHUB_TOKEN
        },
        queries: [
          `{
            user(login: "tim-corley") {
              starredRepositories (ownedByViewer: true, last: 12) {
                edges {
                  node {
                    id
                    name
                    url
                    homepageUrl
                    createdAt
                  }
                }
              }
            }
          }`
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio-site`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#ed64a6`,
        theme_color: `#ed64a6`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-32x32.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};
