 /**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/* Plugins:
    Font plugin
      gatsby-plugin-sass : enbles the use of SCSS
    File plugin
      gatsby-transformer-remark
      gatsby-source-filesystem : enables the use of local files in GraphyQL
    Images plugins
      gatsby-plugin-sharp@2.0.32
      gatsby-remark-images@3.0.10
      gatsby-remark-relative-images@0.2.2
    Content Management System
      gatsby-source-contentful
      @contentful/rich-text-react-renderer": "^13.4.0
*/

module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Patrice Gedeon'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
