import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Body.css';

// COMPONENTS
import CCInfo from './CCInfo';
import RightEdit from './RightEdit';

const RightBody = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
      <RightEdit />
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
  CCInfo: PropTypes.shape({
    CCNumber: PropTypes.string.isRequired,
    CCDate: PropTypes.string.isRequired,
    CCCvv:  PropTypes.string.isRequired,
    termsConditions: PropTypes.bool.isRequired,
  }).isRequired,
  changeInputFor: PropTypes.func.isRequired,
}

export default RightBody;
