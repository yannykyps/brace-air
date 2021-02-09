const path = require("path")

// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulServicePages {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulServicePages.nodes.forEach(({ slug }) => {
    createPage({
      path: `/${slug}/`,
      component: path.resolve(`src/templates/service-template.js`),
      context: {
        slug,
      },
    })
  })
}
