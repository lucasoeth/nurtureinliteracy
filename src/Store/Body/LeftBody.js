import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Body.css';

// COMPONENTS
import { PersonalInfo } from './Payment';
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
      <PersonalInfo
        PersonalInfo={ props.PersonalInfo }
        changeInputFor={ props.changeInputFor }
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
  PersonalInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    apt: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  changeInputFor: PropTypes.func.isRequired,
  serviceChosenAt: PropTypes.func.isRequired,
  serviceIndex: PropTypes.number.isRequired,
  serviceLast: PropTypes.number.isRequired,
}

export default LeftBody;
