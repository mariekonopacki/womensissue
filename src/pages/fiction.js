import React from 'react'

import Layout from '../components/layout'
import Piecepreviewrow from '../components/piecepreviewrow'
import Piecepreview from '../components/piecepreview'
import Circlebutton from '../components/circlebutton'
import Shorten from '../components/shorten'
import SEO from '../components/seo'


export default ({data }) => {

return (
  <Layout>
    <SEO title="Fiction" keywords={[`fiction`]} />

    <h4>Explore fiction</h4>
    <Piecepreviewrow>
      {data.fiction.edges.map(post => (
        <a href={post.node.frontmatter.path}>
        <div class="piecepreviewcolumn">
          <div class="piecepreview fictionpreview">
            <div key={post.node.id}>
              <h3>{post.node.frontmatter.title}</h3>
              <small>
                {post.node.frontmatter.type} by {post.node.frontmatter.author}
              </small>
              <Shorten>
                {post.node.excerpt}
              </Shorten>
              <br />
              <div class="fadetowhite"></div>
              <Circlebutton> <small> Read more </small> </Circlebutton>
            </div>
          </div>
        </div>
        </a>
      ))}
    </Piecepreviewrow>

  </Layout>
)
}

export const pieceQuery = graphql`
    query FictionIndexQuery {
      fiction: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/fiction/"}}) {
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
    }
`
