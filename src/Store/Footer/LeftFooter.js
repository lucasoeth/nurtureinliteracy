import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const LeftFooter = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
      <div className='cart-footer' id='cart-footer-left'>
      </div>
    )
  } else if (page === 2) {
    return(
      <div className="cart-footer" id="cart-footer-left">
        <div id="coupon">
          <div id="coupon-input">
            <input type="text"/>
          </div>
          <div id="coupon-button">
            <a className='btn btn-default btn-md'>coupon</a>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className='cart-footer' id='cart-footer-left'>
      </div>
    )
  }
};

LeftFooter.propTypes = {
  activePage: PropTypes.number.isRequired,
}

export default LeftFooter;
