import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={ { marginLeft: '5px' }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Link
