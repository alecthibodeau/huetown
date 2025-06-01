/* Styles */
import '../styles/privacy-policy.scss';

function PrivacyPolicy(): JSX.Element {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Effective Date: May 31st, 2025</p>

      <p>We the administrators of this website value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use and protect the information you provide.</p>

      <p className="bold">1. Information We Collect</p>

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

      <p className="bold">2. How We Use Your Information</p>

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

      <p className="bold">3. Data Security</p>

      <p>We take reasonable steps to protect your information from unauthorized access, use or disclosure. However, please be aware that no method of transmission over the internet is completely secure.</p>

      <p className="bold">4. Changes to This Policy</p>

      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
    </div>
  );
}

export default PrivacyPolicy;
