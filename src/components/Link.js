import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  return (
    <button
      className='font-bold py-2 px-4 rounded text-white bg-blue-500 focus:bg-blue-600 hover:bg-blue-800'
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
