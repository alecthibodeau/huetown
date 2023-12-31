import { Link } from 'react-router-dom';

/* Components */
import MailchimpFormContainer from './MailChimpFormContainer';

/* Interfaces */
import Shop from '../interfaces/Shop';

/* Constants */
import images from '../constants/images';
import shops from '../constants/shops';

/* Helpers */
import formatText from '../helpers/format-text';

function About(): JSX.Element {
  const { hLogo, selfPortrait } = images.about;

  function renderSectionTitle(title: string): JSX.Element {
    return (
      <span className="section-title">{title} &mdash; </span>
    );
  }

  function renderShopLink(shop: Shop, index: number): JSX.Element {
    return (
      <li key={`${formatText.formatLettersAndNumbers(shop.name)}-${index}`}>
        <a className="text-link" href={shop.url}>{shop.name}</a>
      </li>
    );
  }

  return (
    <div className="about-content">
      <div className="about-upper">
        <img className="self-portrait" src={selfPortrait} alt="Self portrait drawing" />
        <div>
          <span className="bold">Huetown</span> is the web shop for artist Alec Thibodeau (me!).
          I make drawings, prints and more. Select items are currently available for purchase in the <Link className="text-link" to="/shop">shop</Link>. Past work can be found at my portfolio site: <a className="text-link" href="https://alecthibodeau.com">alecthibodeau.com</a>.
        </div>
        <img className="huetown-h-logo" src={hLogo} alt="Huetown H logo"/>
      </div>
      <div className="about-lower">
        <div>
          {renderSectionTitle('contact')}
          Huetown's contact email is <a className="text-link" href="mailto:info@huetown.com">info@huetown.com</a>.
        </div>
        <div>
          {renderSectionTitle('ordering')}
          Buy with confidence! I securely process all credit card payments made at Huetown
          through <a className="text-link" href="https://www.paypal.com">PayPal</a>.
        </div>
        <div>
          {renderSectionTitle('shipping')}
          Regardless of item quantity all orders ship for a flat rate in sturdy
          packaging from Providence, Rhode Island in the USA via United States Postal
          Service (USPS) Priority Mail or &mdash; less frequently &mdash; via an equivalent United Parcel
          Service (UPS) option. Flat rates are $8 for domestic shipments within
          the USA or $29 for international delivery to any other country. Packages
          generally ship within a couple business days of an order being placed,
          with domestic deliveries usually arriving a few days after that. Once
          shipping is underway you'll receive confirmation directly from PayPal
          with tracking information. Please allow approximately one week for
          domestic delivery and 2-3 weeks for international delivery.
        </div>
        <div>
          {renderSectionTitle('follow')}
          Check out Huetown on <a className="text-link" href="https://www.instagram.com/huetown">Instagram</a>. Or sign up below for Huetown's email list.
          Your information won't be shared with miscreants.
        </div>
        <div>
          {renderSectionTitle('places')}
          Huetown items are available at these retail spots:
          <ul>
            {shops.map(renderShopLink)}
          </ul>
        </div>
      </div>
      <MailchimpFormContainer />
    </div>
  );
}

export default About;
