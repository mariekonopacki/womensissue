import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Cover from '../images/cover.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: `-3.5em`
    }}
  >
  <img href="/" src={Cover} alt="Cover"
    style={{
      zIndex: `3`
    }}
  />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1rem 1rem 1rem`,
        borderBottom: `solid 1px #333333`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </h1>

    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
