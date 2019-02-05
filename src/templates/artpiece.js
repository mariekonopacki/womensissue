import _ from 'lodash'
import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/piecelayout'
import Piecepreviewrow from '../components/piecepreviewrow'
import Piecepreview from '../components/piecepreview'
import Shorten from '../components/shorten'
import Circlebutton from '../components/circlebutton'
import SEO from '../components/seo'
import Email from '../images/email.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'



export default function Template({ data }) {
  const post = data.markdownRemark
  const recommendedSample = _.sampleSize(data.all.edges, 3)

  return (
    <Layout>
    <SEO title={post.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />

    <div class="backHome">
      <a href="/">
        <small> ← Back to home</small>
      </a>
    </div>
    <div class="pieceBox">
      <div class="pieceInfo">
        <div class="title">
          <h2>{post.frontmatter.title}</h2>
          <small>
              {post.frontmatter.type} by {post.frontmatter.author}
          </small>
        </div>
        <div class="sharePiece">
          <div class="shareCall">
            <small>
                Share this piece
            </small>
          </div>
          <div class="shareButtons">
            <img class="shareIcon" src={Twitter}></img>
            <img class="shareIcon" src={Facebook}></img>
            <img class="shareIcon" src={Email}></img>
          </div>
        </div>
      </div>
      <div class="pieceWriting" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>


    <div class="recommendedPieces">
      <small>See more pieces</small>
      <Piecepreviewrow>
        {recommendedSample.map(post => (
          <a href={post.node.frontmatter.path}>
          <Piecepreview>
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
          </Piecepreview>
          </a>
        ))}
      </Piecepreviewrow>
    </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query ArtByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        type
      }
    }
    all: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            type
          }
          excerpt(pruneLength: 350)
        }
      }
    }
  }
`
