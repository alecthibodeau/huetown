import React, { FormEvent, useEffect, useState } from 'react';
// import './mcFormStyles.scss';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import InputFieldProps from '../interfaces/InputFieldProps';
import InputField from './InputField';

interface MailchimpSubscribeProps {
  status: string | null;
  message: string | Error | null;
  subscribe: (formData: FormData) => void;
}

interface CustomFormProps {
  formStatus: string | null;
  formMessage: string | Error | null;
  onValidated: (formData: FormData) => void;
}

interface FormData {
  EMAIL: string;
  FNAME: string;
  LNAME: string;
}

function CustomForm(props: CustomFormProps) {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const inputValues = [email, firstName, lastName];

  const formInputs = [
    {
      type: 'text',
      label: 'First Name',
      placeholder: 'Jane',
      value: firstName,
      onUpdateValue: setFirstName,
      isRequired: true
    },
    {
      type: 'text',
      label: 'Last Name',
      placeholder: 'Doe',
      value: lastName,
      onUpdateValue: setLastName,
      isRequired: true
    },
    {
      type: 'email',
      label: 'Email',
      placeholder: 'your@email.com',
      value: email,
      onUpdateValue: setEmail,
      isRequired: true
    }
  ];

  useEffect(() => {
    setIsFormValid(
      inputValues.some((userInput: string) => userInput === '')
      || !email.includes('@') ? false : true
    );
  }, inputValues);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid) {
      props.onValidated({
        // EMAIL: email,
        // MERGE1: firstName,
        // MERGE2: lastName,
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName,
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
          placeholder={props.placeholder}
          isRequired={props.isRequired}
        />
      </div>
    );
  }

  return (
      <form onSubmit={(event) => handleSubmit(event)}>
          <div>Subscribe to Huetown's email list</div>
          <div className="inputs-container">
              {/* <input
                  id="firstName"
                  name="First Name"
                  placeholder="First Name" />
              <input
                  id="lastName"
                  name="Last Name"
                  placeholder="Last Name" />
              <input
                  id="email"
                  name="email"
                  placeholder="Email" /> */}
              {/* <InputField
                  label="First Name"
                  onUpdateValue={setFirstName}
                  type="text"
                  value={firstName}
                  placeholder="Jane"
                  isRequired
              />

              <InputField
                  label="Last Name"
                  onUpdateValue={setLastName}
                  type="text"
                  value={lastName}
                  placeholder="Doe"
                  isRequired
              />

              <InputField
                  label="Email"
                  onUpdateValue={setEmail}
                  type="email"
                  value={email}
                  placeholder="your@email.com"
                  isRequired
              /> */}
              {formInputs.map(renderInput)}
              {/* <InputField
                  label="subscribe"
                  type="submit"
                  formValues={[email, firstName, lastName]}
              /> */}

              <input
                  // className='primaryBtn primaryBtn--big g__justify-self-center'
                  className='subscribe-button'
                  type='submit'
                  value='subscribe'
                  disabled={!isFormValid}
              />

          </div>
          {/* <div>
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="subscribe-button"></input>
          </div> */}
      </form>
  );
};

function MailchimpFormContainer() {

  const postUrl = `https://huetown.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={(props: MailchimpSubscribeProps) => (
          <CustomForm
              formStatus={props.status}
              formMessage={props.message}
              onValidated={(formData: FormData) => props.subscribe(formData)}
              // onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
