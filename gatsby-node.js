const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/writtenpiece.js')
  const artTemplate = path.resolve('src/templates/artpiece.js')

  return graphql(`
    {
      written: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/written/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              type
            }
            excerpt
          }
        }
      }
      art: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/art/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              title
              author
              type
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.written.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })

    res.data.art.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        source: node.frontmatter.source,
        component: artTemplate,
      })
    })
  })
}
