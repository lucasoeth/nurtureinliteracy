import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Body.css';

// COMPONENTS
import CCInfo from './CCInfo';
<<<<<<< HEAD
import RightEdit from './RightEdit';
=======
>>>>>>> 0cda4b9777d99b51c3e3169e983bc1c121293b50

const RightBody = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
<<<<<<< HEAD
      <RightEdit />
=======
      <div></div>
>>>>>>> 0cda4b9777d99b51c3e3169e983bc1c121293b50
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
