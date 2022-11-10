import { Dispatch, SetStateAction } from 'react';

interface InputFieldProps {
  label: string;
  onUpdateValue: Dispatch<SetStateAction<string>>;
  type: string;
  value: string;
  placeholder: string;
  isRequired: boolean;
}

export default InputFieldProps;
