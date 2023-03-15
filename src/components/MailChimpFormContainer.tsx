import MailchimpSubscribe from 'react-mailchimp-subscribe';

/* Components */
import CustomForm from './CustomForm';

/* Interfaces */
import MailchimpFormData from '../interfaces/MailchimpFormData';
import MailchimpSubscribeProps from '../interfaces/MailchimpSubscribeProps';

function MailchimpFormContainer(): JSX.Element {

  const postUrl: string = `https://huetown.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mailchimp-form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={(props: MailchimpSubscribeProps) => (
          <CustomForm
              formStatus={props.status}
              formMessage={props.message}
              onValidated={(formData: MailchimpFormData) => props.subscribe(formData)}
          />
        )}
      />
    </div>
  );
}

export default MailchimpFormContainer;
