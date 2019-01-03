import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Required from './Required';

class Input extends PureComponent {
  render(){
    var valid;

    if (this.props.valid === undefined )
      {valid = 0;}
    else
      {valid = this.props.valid[this.props.name];}

    return(
      <div className='input-div' id={ this.props.name }>
        <Required
          valid={valid}
        />
        <input
          type="text"
          name={ this.props.name }
          placeholder={ this.props.placeholder }
          onChange={ (e) => this.props.changeInput(this.props.name, e) }
          value={ this.props[this.props.name] }
        />
        <label className="input-label">{ this.props.placeholder }</label>
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
  changeInput: PropTypes.func,
}

export default Input;
