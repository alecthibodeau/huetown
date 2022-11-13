import { FormEvent, useEffect, useState } from 'react';

/* Components */
import InputField from './InputField';

/* Interfaces */
import CustomFormProps from '../interfaces/CustomFormProps';
import InputFieldProps from '../interfaces/InputFieldProps';

function CustomForm(props: CustomFormProps) {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const emailValidation = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  const formInputs = [
    {
      type: 'email',
      label: 'Email Address',
      value: email,
      onUpdateValue: setEmail,
      isRequired: true
    },
    {
      type: 'text',
      label: 'First Name',
      value: firstName,
      onUpdateValue: setFirstName,
      isRequired: false
    },
    {
      type: 'text',
      label: 'Last Name',
      value: lastName,
      onUpdateValue: setLastName,
      isRequired: false
    }
  ];

  useEffect(() => {
    const validEmailAddress = emailValidation.test(email);
    setIsFormValid(validEmailAddress);
  }, [email]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid) {
      props.onValidated({
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName
      });
    }
  }

  function renderInput(props: InputFieldProps, index: number) {
    return (
      <div key={props.label + index}>
        <InputField
          label={props.label}
          onUpdateValue={props.onUpdateValue}
          type={props.type}
          value={props.value}
          isRequired={props.isRequired}
        />
      </div>
    );
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
        <div className="subscribe-prompt">
          <div>
            Subscribe to Huetown's email list
          </div>
          <div>
            (asterisk indicates required)
          </div>
        </div>
        {props.formStatus === 'sending' &&
          <div className="form-status">
            sending...
          </div>
        }
        {typeof props.formMessage === 'string' &&
          <div className={`form-status form-status-${props.formStatus}`}>
            {props.formStatus === 'error' ? `Error: ${props.formMessage}` : props.formMessage}
          </div>
        }
        <div>
            {formInputs.map(renderInput)}
            <input
              className='subscribe-button'
              type='submit'
              value='subscribe'
            />
        </div>
    </form>
  );
}

export default CustomForm;
