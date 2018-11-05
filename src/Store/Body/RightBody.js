import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Body.css';

// COMPONENTS
import { CCInfo } from './Payment';
import { RightEdit } from './Edit';

const RightBody = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
      <RightEdit
        RightEdit={ props.RightEdit }
        changeInputFor={ props.changeInputFor }
      />
    )
  } else if (page === 2) {
    return(
      <CCInfo
        CCInfo={ props.CCInfo }
        changeInputFor={ props.changeInputFor }
      />
    )
  } else {
    return(
      <div></div>
    )
  }
}

RightBody.propTypes = {
  activePage: PropTypes.number.isRequired,
  RightEdit: PropTypes.shape({
    details: PropTypes.string.isRequired,
    express: PropTypes.bool.isRequired,
  }),
  CCInfo: PropTypes.shape({
    CCNumber: PropTypes.string.isRequired,
    CCDate: PropTypes.string.isRequired,
    CCCvv:  PropTypes.string.isRequired,
    termsConditions: PropTypes.bool.isRequired,
  }).isRequired,
  changeInputFor: PropTypes.func.isRequired,
}

export default RightBody;
