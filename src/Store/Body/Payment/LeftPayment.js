import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const LeftPayment = props => {
  const inputs = [
    {
      name: 'first',
      placeholder: 'First Name'
    },
    {
      name: 'last',
      placeholder: 'Last Name'
    },
    {
      name: 'email',
      placeholder: 'Email'
    },
    {
      name: 'number',
      placeholder: 'Number'
    },
    {
      name: 'address',
      placeholder: 'Address'
    },
    {
      name: 'apt',
      placeholder: 'Apt, Unit, etc'
    },
    {
      name: 'zip',
      placeholder: 'Zip'
    },
    {
      name: 'city',
      placeholder: 'City'
    },
  ];

  return(
    <div id="left-payment" className="cart-body cart-body-left">

      <h2>Billing Address</h2>

      {inputs.map((input, key) => {
        return (
          <Input
            key={key}
            valid={props.valid}
            name={input.name}
            placeholder={input.placeholder}
            changeInput={ (category, e) => props.changeInputFor('LeftPayment', category, e)}
            input={props.LeftPayment}
          />);
      })}

      <div className="input-div" id="state">
        <select id="state-select">
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AS">AS</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="DC">DC</option>
          <option value="FM">FM</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="GU">GU</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MH">MH</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="MP">MP</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PW">PW</option>
          <option value="PA">PA</option>
          <option value="PR">PR</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VI">VI</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </select>
      </div>
    </div>
  )
}

LeftPayment.propTypes = {
  LeftPayment: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    apt: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  changeInputFor: PropTypes.func.isRequired,
}

export default LeftPayment;
