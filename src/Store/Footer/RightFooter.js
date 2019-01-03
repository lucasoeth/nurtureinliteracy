import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const RightFooter = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
      <div className='cart-footer' id='cart-footer-right'>
        <div id="submit-button">
          <a
            className='btn btn-default btn-md'
            onClick={ () => props.changeActivePageTo(2) }
          >Next</a>
        </div>
      </div>
    )
  } else if (page === 2) {
    return(
      <div className="cart-footer" id="cart-footer-right">
        <div id="submit-button">
          <a
            className='btn btn-default btn-md'
            onClick={ props.validate }
          >submit</a>
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
  changeActivePageTo: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
}

export default RightFooter;
