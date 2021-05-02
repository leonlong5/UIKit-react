import React, { PureComponent } from 'react';

// import Icon from '../icon/Icon.jsx';

import './Alert.scss';


class Alert extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    return (
      <div className="st-alert__container">
        {/* <Icon
          icon="error"
          type="fill"
          color="#ff2710"
          width="24px"
          height="24px"
        /> */}
        <p className="st-alert__container__text">
          {children}
        </p>
      </div>
    );
  }
}

export default Alert;
