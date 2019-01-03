import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Body.css';

// COMPONENTS
import { LeftPayment } from './Payment';
import { LeftEdit } from './Edit';

const LeftBody = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
      <LeftEdit
        serviceChosenAt={ props.serviceChosenAt }
        serviceIndex={ props.serviceIndex }
        serviceLast={ props.serviceLast }
      />
    )
  } else if (page === 2) {
    return(
      <LeftPayment
        LeftPayment={ props.LeftPayment }
        changeInputFor={ props.changeInputFor }
        valid={props.valid}
      />
    )
  } else {
    return(
      <div></div>
    )
  }
}

LeftBody.propTypes = {
  activePage: PropTypes.number.isRequired,
  //Edit
  changeInputFor: PropTypes.func.isRequired,
  serviceChosenAt: PropTypes.func.isRequired,
  serviceIndex: PropTypes.number.isRequired,
  serviceLast: PropTypes.number.isRequired,
  //Payment
  LeftPayment: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    apt: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
}

export default LeftBody;
