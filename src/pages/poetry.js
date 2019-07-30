import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Piecepreviewrow from '../components/piecepreviewrow'
import Circlebutton from '../components/circlebutton'
import Shorten from '../components/shorten'
import SEO from '../components/seo'
import Navbar from '../components/sidenav'


export default ({data }) => {

return (
  <Layout>
    <SEO title="Poetry" keywords={[`poetry`]} />

    <Navbar></Navbar>

    <ul class="genreBar">
      <li class="genre"><Link to="/" activeClassName="active">All</Link></li>
      <li class="genre"><Link to="/art" activeClassName="active">Art</Link></li>
      <li class="genre"><Link to="/fiction" activeClassName="active">Fiction</Link></li>
      <li class="genre"><Link to="/personalessay" activeClassName="active">Personal Essays</Link></li>
      <li class="genre"><Link to="/poetry" activeClassName="active">Poetry</Link></li>
      <li class="genre"><Link to="/interview" activeClassName="active">Interviews</Link></li>
    </ul>

    <h4 class="top">Explore poetry</h4>
    <Piecepreviewrow>
      {data.poetry.edges.map(post => (
        <a href={post.node.frontmatter.path}>
        <div class="piecepreviewcolumn">
          <div class="piecepreview poetrypreview">
            <div class="previewContent" key={post.node.id}>
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
    query PoetryIndexQuery {
      poetry: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/poetry/"}}) {
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
