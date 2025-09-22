/* Styles */
import '../styles/documentation.scss';

function PrivacyPolicy(): JSX.Element {
  return (
    <div className="documentation">
      <h1>Privacy Policy</h1>

      <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use and protect the information you provide.</p>

      <p className="bold">Information We Collect</p>

      <p>When you subscribe to Huetown's email list we may collect the following personal information:</p>

      <ul>
        <li>Your name</li>
        <li>Your email address</li>
      </ul>

      <p>When you place an order at Huetown we may collect the following personal information:</p>

      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your mailing address</li>
        <li>Your phone number</li>
      </ul>

      <p className="bold">How We Use Your Information</p>

      <p>When you subscribe to Huetown's email list we use the information you provide solely to:</p>

      <ul>
        <li>Send promotional emails</li>
      </ul>

      <p>When you place an order at Huetown we use the information you provide solely to:</p>

      <ul>
        <li>Fulfill the order</li>
        <li>Respond to questions you may have about the order</li>
      </ul>

      <p>We do not add your email address to the website's mailing list when you place an order.</p>
      <p>We do not sell, rent or share your personal information with third parties for any purposes.</p>

      <p className="bold">Data Security</p>

      <p>We take reasonable steps to protect your information from unauthorized access, use or disclosure. However, please be aware that no method of transmission over the internet is completely secure.</p>

      <p className="bold">Changes to This Policy</p>

      <p>We may update this Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      <p className="bold">Contact Us</p>

      <p>If you have any questions about this Privacy Policy you can contact us by email: info@huetown.com.</p>
    </div>
  );
}

export default PrivacyPolicy;
