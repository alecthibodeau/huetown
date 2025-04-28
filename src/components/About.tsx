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

/* Styles */
import '../styles/about.scss';

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
        <span> &mdash; </span>
        <span>{shop.location}</span>
      </li>
    );
  }

  return (
    <div className="about-content">
      <div className="about-upper">
        <div>
          <img className="self-portrait" src={selfPortrait} alt="Self portrait drawing" />
          <div className="about-description">
            Welcome to Huetown, featuring the work of artist Alec
            Thibodeau. Spend time with <Link className="text-link" to="/moon-space">
            Moon Space</Link>, an interactive calendar that displays
            date-specific lunar phases (and animated clouds and stars). Visit
            the <Link className="text-link" to="/shop">shop</Link> to order available
            items. For Alec's early explorations in drawing, printmaking and related work
            go to <a className="text-link" href="https://alecthibodeau.com">
            alecthibodeau.com</a>.
          </div>
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
          All credit card payments at Huetown are securely processed
          through <a className="text-link" href="https://www.paypal.com">PayPal</a>.
        </div>
        <div id="shipping">
          {renderSectionTitle('shipping')}
          All orders ship in sturdy packaging from Providence, Rhode Island USA.
          Shipping is via United States Postal Service (USPS) Priority Mail &mdash; or
          a comparably fast service for the same delivery region via USPS or United
          Parcel Service (UPS). Flat rates are $8 for domestic shipments within
          the USA or $29 for international delivery to any other country. Packages
          generally ship within a couple business days of an order being placed,
          with domestic deliveries usually arriving a few days after that. Once
          shipping is underway you'll receive confirmation directly from PayPal
          with tracking information. Please allow approximately one week for
          domestic delivery and 2-3 weeks for international delivery.
        </div>
        <div>
          {renderSectionTitle('follow')}
          Check out Huetown on <a className="text-link" href="https://www.instagram.com/huetown">
          Instagram</a>. Or sign up below for Huetown's email list. Your
          information won't be shared with miscreants.
        </div>
        <div>
          {renderSectionTitle('places')}
          Huetown items are available at these retail spots in Providence, Rhode Island:
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
