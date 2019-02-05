import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Cover from '../images/cover.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: `-3.5em`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 3rem 4rem 3rem`,
        paddingBottom: `0em`
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
          <img src={Cover} alt="Cover"
            style={{
              boxShadow: `0px 0px 5px rgba(0, 0, 0, 0.3)`
            }}
          />
        </Link>
      </h1>

      <ul class="genreBar">
        <li class="genre"><Link to="/" activeClassName="active">All</Link></li>
        <li class="genre"><Link to="/art" activeClassName="active">Art</Link></li>
        <li class="genre"><Link to="/fiction" activeClassName="active">Fiction</Link></li>
        <li class="genre"><Link to="/personalessay" activeClassName="active">Personal Essay</Link></li>
        <li class="genre"><Link to="/poetry" activeClassName="active">Poetry</Link></li>
      </ul>

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
