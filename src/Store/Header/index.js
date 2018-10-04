import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => {
  return (
    <div id="cart-header">
      <div
        id="edit-icon"
        className={ props.activePage === 1 ? 'active-icon header-icon' : 'header-icon'}
        onClick={ () => props.changeActivePageTo(1) }
      >
        <p>EDIT</p>
      </div>
      <div className="header-line"></div>
      <div
        id="payment-icon"
        className={ props.activePage === 2 ? 'active-icon header-icon' : 'header-icon'}
        onClick={ () => props.changeActivePageTo(2) }
      >
        <p>PAYMENT</p>
      </div>
      <div className="header-line"></div>
      <div
        id="confirm-icon"
        className={ props.activePage === 3 ? 'active-icon header-icon' : 'header-icon'}
        onClick={ () => props.changeActivePageTo(3) }
      >
        <p>COMFIRM</p>
      </div>
    </div>
  )
};

Header.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePageTo: PropTypes.func.isRequired,
}

export default Header;
