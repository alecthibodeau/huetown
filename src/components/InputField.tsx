import React from 'react';
import InputFieldProps from '../interfaces/InputFieldProps';
// import './inputFieldStyles.scss';

function InputField(props: InputFieldProps) {

  return (
    <label className="inputField__label">
      {props.label}
      <input
        type={props.type}
        onChange={(event) => props.onUpdateValue?.(event.target.value)}
        placeholder={props.placeholder}
        value={props.value}
        required={props.isRequired}
        // className="inputField__field"
        name={props.label}
      />
    </label>
  );
};

export default React.memo(InputField);
