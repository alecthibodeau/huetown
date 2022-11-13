/* Interfaces */
import MailchimpFormData from './MailchimpFormData';

interface CustomFormProps {
  formStatus: string | null;
  formMessage: string | Error | null;
  onValidated: (formData: MailchimpFormData) => void;
}

export default CustomFormProps;
