import React from 'react';
import InputFieldProps from '../interfaces/InputFieldProps';

function InputField(props: InputFieldProps) {

  return (
    <label>
      <div>
        <span>{props.label}</span>
        {props.isRequired && <span className='required'> *</span>}
      </div>
      <input
        className="form-input"
        type={props.type}
        onChange={(event) => props.onUpdateValue?.(event.target.value)}
        value={props.value}
        required={props.isRequired}
        name={props.label}
      />
    </label>
  );
};

export default React.memo(InputField);
