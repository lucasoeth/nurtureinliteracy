import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Body.css';

// COMPONENTS
import PersonalInfo from './PersonalInfo';
<<<<<<< HEAD
import LeftEdit from './LeftEdit';
=======
>>>>>>> 0cda4b9777d99b51c3e3169e983bc1c121293b50

const LeftBody = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
<<<<<<< HEAD
      <LeftEdit />
=======
      <div></div>
>>>>>>> 0cda4b9777d99b51c3e3169e983bc1c121293b50
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
}

export default LeftBody;
