const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/writtenpiece.js')
  const artTemplate = path.resolve('src/templates/artpiece.js')
  const interviewTemplate = path.resolve('src/templates/interviewpiece.js')


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
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
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
              video
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
      interviews: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/interviews/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              type
              sound
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
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
        source: node.frontmatter.source,
        component: postTemplate,
      })
    })

    res.data.art.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        source: node.frontmatter.source,
        video: node.frontmatter.video,
        component: artTemplate,
      })
    })

    res.data.interviews.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        source: node.frontmatter.source,
        component: interviewTemplate,
      })
    })
  })
}
