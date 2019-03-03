import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import PieceHeader from './pieceheader'
import './layout.css'

const PieceLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <PieceHeader siteTitle={data.site.siteMetadata.title} />
        <div class="whitelayout" style={{
          margin: `0 auto`,
          background: `white`,
          maxWidth: `97%`,
          marginTop: `100px`,
          padding: `0px 1.0875rem 1.45rem`,
          boxShadow: `0px 0px 5px rgba(0, 0, 0, 0.3)`
        }}
        >
        <div
          style={{
            margin: `0 auto`,
            paddingTop: `70px`,
            maxWidth: 960,
          }}
        >
          {children}
        </div>
        </div>
      </>
    )}
  />
)

PieceLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PieceLayout
