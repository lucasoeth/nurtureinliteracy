import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const RightFooter = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
      <div className='cart-footer' id='cart-footer-right'>
      </div>
    )
  } else if (page === 2) {
    return(
      <div className="cart-footer" id="cart-footer-right">
        <div id="submit-button">
          <a className='btn btn-default btn-md'>submit</a>
        </div>
      </div>
    )
  } else {
    return(
      <div className='cart-footer' id='cart-footer-right'>
      </div>
    )
  }
};

RightFooter.propTypes = {
  activePage: PropTypes.number.isRequired,
}

export default RightFooter;
