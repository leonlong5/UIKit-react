// react
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

//css
import './Box.scss'

const Box = (props) => {
    const { children, containerStyle, className } = props
    return (
        <div className={`box-container ${className}`} style={containerStyle}>
        {children}
        </div>
    )
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  containerStyle: PropTypes.shape(),
  className: PropTypes.string,
}

Box.defaultProps = {
  containerStyle: undefined,
  className: '',
}

export default Box
