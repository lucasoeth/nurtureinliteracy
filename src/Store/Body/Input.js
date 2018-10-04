import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const formatName = name => {
    if (typeof props.placeholder === 'undefined' ) {
      return name[0].toUpperCase() + name.substr(1, name.length);
    }

    return props.placeholder;
  }

  let formattedName = formatName(props.name);

  return(
    <div className='input-div' id={ props.name }>
      <input
        type="text"
        placeholder={ formattedName }
        onChange={ (e) => props.changeInput(props.name, e) }
        value={ props.input[props.name] }
      />
      <label className="input-label">{ formattedName }</label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
  changeInput: PropTypes.func,
}

export default Input;
