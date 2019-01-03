import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Stats from './Stats';

// IMAGES
import QuestionMark from './../../../sources/img/question-mark.png'

const RightPayment = props => {
  const inputs = [
    {
      name: 'cNumber',
      placeholder: 'Credit Card Number'
    },
    {
      name: 'cDate',
      placeholder: 'MM/YY'
    },
    {
      name: 'cCvv',
      placeholder: 'CVV'
    },
  ];

  return(
    <div id="right-payment" className="cart-body cart-body-right">
      <h2>Payment Details</h2>

      {inputs.map((input, key) => {
        return (
          <Input
            key={key}
            name={input.name}
            placeholder={input.placeholder}
            changeInput={(category, e) => props.changeInputFor('RightPayment', category, e)}
            input={props.RightPayment}
          />
          );
      })}

      <div id="cvv-help">
        <img id='question-mark' height="24px" width="24px" src={ QuestionMark } alt='' />
      </div>

      <Stats />

      <div id="terms-conditions">
        <div className="checkbox">
          <input type="checkbox" id="tc-checkbox" value="0" />
          <label htmlFor="tc-checkbox">Bla bla bla </label>
        </div>
      </div>

    </div>
  )
}

RightPayment.propTypes = {
  RightPayment: PropTypes.shape({
    cNumber: PropTypes.string.isRequired,
    cDate: PropTypes.string.isRequired,
    cCvv:  PropTypes.string.isRequired,
    termsAccepted: PropTypes.bool.isRequired,
  }).isRequired,
}
export default RightPayment;
