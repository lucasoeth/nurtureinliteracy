import React from 'react';
// import PropTypes from 'prop-types';


const Required = props => {
  if (props.valid !== 0) {
    return (
      <div className='required-input'>
        <div>{props.valid === 2 ? 'invalid' : 'required'}</div>
      </div>
    )
  } else {
    return null;
  }
}

Required.propTypes = {
}

export default Required;
