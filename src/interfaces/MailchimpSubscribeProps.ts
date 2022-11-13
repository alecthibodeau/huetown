/* Interfaces */
import MailchimpFormData from '../interfaces/MailchimpFormData';

interface MailchimpSubscribeProps {
  status: string | null;
  message: string | Error | null;
  subscribe: (formData: MailchimpFormData) => void;
}

export default MailchimpSubscribeProps;
