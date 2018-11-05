import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  render(){
    const formatName = name => {
      if (typeof this.props.placeholder === 'undefined' ) {
        return name[0].toUpperCase() + name.substr(1, name.length);
      }

      return this.props.placeholder;
    }

    let formattedName = formatName(this.props.name);

    return(
      <div className='input-div' id={ this.props.name }>
        <input
          type="text"
          placeholder={ formattedName }
          onChange={ (e) => this.props.changeInput(this.props.name, e) }
          value={ this.props.input[this.props.name] }
        />
        <label className="input-label">{ formattedName }</label>
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
