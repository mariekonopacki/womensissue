import PropTypes from 'prop-types'
import React from 'react'

const PieceHeader = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: `-3.5em`,
    }}
  >

  </div>
)

PieceHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PieceHeader.defaultProps = {
  siteTitle: ``,
}

export default PieceHeader
