import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div class="whiteback" style={{
          margin: `0 auto`,
          background: `white`,
          maxWidth: `97%`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: `40px`,
          boxShadow: `0px 0px 5px rgba(0, 0, 0, 0.3)`
        }}
        >
        <div
          style={{
            margin: `0 auto`,
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
