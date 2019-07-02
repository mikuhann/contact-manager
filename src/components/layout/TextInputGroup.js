import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({label, type, name, placeholder, value, onChange, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={`form-control form-control-lg ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
        <div className="invalid-feedback">
          {error}
        </div>
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
