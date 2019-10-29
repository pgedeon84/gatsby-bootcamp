// This process Creates a Slug for each Node

const path = require('path');

/* Get path basename + create node field for Markdown Files
    www.nodejs.org -> docs -> Path
    www.gatsbyjs.org -> docs -> Gatsby API ref -> Gatsby Node APIs
*/

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md');

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

// This process Creates a new Page for each Blog from Contentful CMS

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get Path to template
  const blogTemplate = path.resolve('./src/templates/blog.js')

   // 2. Get Markdown Data
  const res = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

  // Create new Pages for each Posts (edges)

  res.data.allContentfulBlogPost.edges.forEach( edge => {
    createPage({
      // component is path to  blog
      component: blogTemplate,
      path: `/blogs/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
