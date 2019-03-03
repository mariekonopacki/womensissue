import _ from 'lodash'
import React from 'react'
import Layout from '../components/piecelayout'
import Piecepreviewrow from '../components/piecepreviewrow'
import Shorten from '../components/shorten'
import Circlebutton from '../components/circlebutton'
import SEO from '../components/seo'
import Email from '../images/email.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Sound from '../images/sound.png'
import { Location } from '@reach/router'
import Navbar from '../components/navbar'




export default function Template({ data }) {
  const post = data.markdownRemark
  const recommendedSample = _.sampleSize(data.all.edges, 3)

  return (
    <Layout>
    <SEO title={post.frontmatter.title} />

    <Navbar></Navbar>
    <div class="backHome">
      <a href="/">
        <small> ← Back to home</small>
      </a>
    </div>
    <div class="pieceBox">
        <div class="pieceInfo">
          <div class="stickyInfo">
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
                <Location>
                  {({ location }) => {
                    return <div><a href={'https://twitter.com/home?status=womens.theharvardadvocate.com' + location.pathname}><img alt="twitter logo" class="shareIcon" src={Twitter}></img></a>
                            <a href={'https://www.facebook.com/sharer/sharer.php?u=womens.theharvardadvocate.com' + location.pathname}><img alt="facebook logo" class="shareIcon" src={Facebook}></img></a>
                            <a href={"mailto:?&subject=Read " + post.frontmatter.title + "from the Women's Issue&body=womens.theharvardadvocate.com" + location.pathname}><img alt="email logo"class="shareIcon" src={Email}></img></a></div>
                  }}
                </Location>
              </div>
          </div>

          <a class="interview" href={
            post.frontmatter.interview === 'No'
             ? ''
             : post.frontmatter.interview
          } style={{display: post.frontmatter.interview === 'No' ? 'none' : 'flex' }}>
            <img alt="sound icon" class="shareIcon" src={Sound}></img>
            <small>{post.frontmatter.interview === 'No'
             ? ''
             : 'Read/listen to the artist\'s interview here'}
            </small>
          </a>

        </div>
      </div>
      <div class="pieceContent">
        <div class="pieceArt">
          <img alt={post.frontmatter.title} src={
              post.frontmatter.type === 'Art'
              ? post.frontmatter.source.childImageSharp.sizes.src
              : ''
          } />
          <iframe title={post.frontmatter.title} class="video" width="100%" height={
              post.frontmatter.type === 'Video'
              ? '350px'
              : '0px'
            }
            src={
              post.frontmatter.type === 'Video'
              ? post.frontmatter.video
              : ''
          } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>


    <div class="recommendedPieces">
      <small>See more pieces</small>
      <Piecepreviewrow>
        {recommendedSample.map(post => (
          <a href={post.node.frontmatter.path}>
          <div class="piecepreviewcolumn">
            <div class="piecepreview">
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
        video
        title
        source {
          childImageSharp{
            sizes(maxWidth: 630) {
                src
            }
          }
        }
        author
        interview
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
