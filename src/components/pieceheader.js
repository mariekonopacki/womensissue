import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/logo.png'

const PieceHeader = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: `-3.5em`,
    }}
  >
    <div class="stickyHeader">
      <a href="/"><div class="logo">
        <img src={Logo}></img>
      </div></a>

      <ul class="navLinksStickyHeader">
        <li class="stickyLink"><Link to="/" activeClassName="activeSub">Home</Link></li>
        <li class="stickyLink"><Link to="/" activeClassName="activeSub">Browse  ⌄</Link></li>
        <li class="stickyLink"><Link to="/about" activeClassName="activeSub">About</Link></li>
        <li class="stickyLink"><Link to="/donate" activeClassName="activeSub">Donate</Link></li>
      </ul>


    </div>
  </div>
)

PieceHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PieceHeader.defaultProps = {
  siteTitle: ``,
}

export default PieceHeader
