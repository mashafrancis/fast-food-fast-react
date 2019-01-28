import React from 'react';
import PropTypes from 'prop-types';
import ValidationSubscript from './validateSubscript';

export const FormInput = (props) => {

  const {label, inputType, inputName, placeholder} = props;

  return (
    <div>
      <ul className="flex-outer">
        {label}
        <input
          type={inputType} className="form-control" name={inputName}
          placeholder={placeholder} required
        />
        <ValidationSubscript />
      </ul>
    </div>
  );
};

export const formInputPropTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired
};

FormInput.propTypes = formInputPropTypes;
