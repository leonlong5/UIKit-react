import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

export const BUTTON_SIZE = {
  LARGE: 'large',
  DEFAULT: 'default',
  SMALL: 'small',
  SMALLER: 'smaller',
  SMALLEST: 'smallest',
}

export const BUTTON_COLOR = {
  GREEN: 'green',
  RED: 'red',
  GRAY: 'gray',
}

export const BUTTON_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
  GRAY: 'gray',
}

class Button extends React.Component {
  render() {
    const {
      size,
      theme,
      onClick,
      children,
      style,
      className,
      red,
      ...otherProps
    } = this.props

    return (
      <button
        data-testid="button"
        style={style}
        onClick={onClick}
        className={`ds st-button ${size} ${theme} ${
          red ? 'red' : ''
        } ${className}`}
        {...otherProps}
      >
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  red: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.shape(),
  className: PropTypes.string,
}

Button.defaultProps = {
  size: BUTTON_SIZE.DEFAULT,
  theme: BUTTON_THEME.PRIMARY,
  disabled: false,
  red: false,
  onClick: () => {},
  children: null,
  style: {},
  className: '',
}

export default Button
