import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input'

// IMAGES
import QuestionMark from './../../sources/img/question-mark.png'

const CCInfo = props => {
  return(
    <div id="cart-body-right" className="cart-body">
      <h2>Credit Card Information</h2>
      <fieldset id="cc-fieldset">

        <Input
          name='CCNumber'
          placeholder='Credit Card Number'
          changeInput={ (category, e) => props.changeInputFor('CCInfo', category, e)}
          input={ props.CCInfo }
        />

        <div id="cc-valid" className="input-div-container">
          <Input
            name='CCDate'
            placeholder='MM/YY'
            changeInput={ (category, e) => props.changeInputFor('CCInfo', category, e)}
            input={ props.CCInfo }
          />

          <Input
            name='CCCvv'
            placeholder='CVV'
            changeInput={ (category, e) => props.changeInputFor('CCInfo', category, e)}
            input={ props.CCInfo }
          />

          <div id="cvv-help">
            <img id='question-mark' height="24px" width="24px" src={ QuestionMark } alt='' />
          </div>

        </div>
      </fieldset>

      <div id="cart-stats">
        <div className="stats">
          <span>cart total:</span>
          <span>something</span>
        </div>
        <div className="stats">
          <span>cart total:</span>
          <span>something</span>
        </div>
        <div className="stats">
          <span>cart total:</span>
          <span>something</span>
        </div>
      </div>

      <div id="terms-conditions">
        <div className="checkbox">
          <input type="checkbox" id="tc-checkbox" value="0" />
          <label htmlFor="tc-checkbox">Bla bla bla </label>
        </div>
      </div>

    </div>
  )
}

CCInfo.propTypes = {
  CCInfo: PropTypes.shape({
    CCNumber: PropTypes.string.isRequired,
    CCDate: PropTypes.string.isRequired,
    CCCvv:  PropTypes.string.isRequired,
    termsConditions: PropTypes.bool.isRequired,
  }).isRequired,
}
export default CCInfo;
