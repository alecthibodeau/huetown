import { useEffect, useRef } from 'react';
import { Link, Location, useLocation } from 'react-router-dom';

/* Components */
import MailchimpFormContainer from './MailChimpFormContainer';

/* Interfaces */
import Shop from '../interfaces/Shop';

/* Constants */
import images from '../constants/images';
import routes from '../constants/routes';
import shops from '../constants/shops';

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/about.scss';

function About(): JSX.Element {
  const location: Location = useLocation();
  const orderingRef = useRef<HTMLDivElement>(null);
  const { hLogo, selfPortrait } = images.about;
  const textOrdering: string = 'ordering';

  useEffect(() => {
    if (location.hash === `#${textOrdering}` && orderingRef.current) {
      orderingRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, [location.hash]);

  function renderSectionTitle(title: string): JSX.Element {
    return (
      <span className="section-title">{title} &mdash; </span>
    );
  }

  function renderShopLink(shop: Shop, index: number): JSX.Element {
    return (
      <li key={`${formatText.formatLettersAndNumbers(shop.name)}-${index}`}>
        <a className="text-link" href={shop.url} target="_blank">{shop.name}</a>
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
            Moon Space</Link>, an interactive lunar calendar that displays
            date-specific moon phases, accompanied by animated clouds and stars. Visit
            the <Link className="text-link" to="/shop">shop</Link> to order items.
            For Alec's earlier work in drawing, printmaking and related media
            go to <a className="text-link" href="https://alecthibodeau.com">
            alecthibodeau.com</a>. See Alec's coding projects at <a className="text-link" href="https://alect.me">alect.me</a>.
          </div>
        </div>
        <img className="huetown-h-logo" src={hLogo} alt="Huetown H logo"/>
      </div>
      <div className="about-lower">
        <div>
          {renderSectionTitle('contact')}
          Huetown's contact email is <a className="text-link" href="mailto:info@huetown.com">info@huetown.com</a>.
        </div>
        <div id={textOrdering} ref={orderingRef}>
          {renderSectionTitle(textOrdering)}
          All credit card payments at Huetown are securely processed
          through <a className="text-link" href="https://www.paypal.com">PayPal</a>.
        </div>
        <div>
          {renderSectionTitle('shipping')}
          All orders ship in sturdy packaging from Providence, Rhode Island USA
          via the United States Postal Service (USPS) or United
          Parcel Service (UPS). Standard Flat Rate Shipping for each order is
          either $8 for domestic delivery within the USA or $29 for international delivery.
          Packages generally ship within a couple business days of an order being placed,
          with domestic deliveries usually arriving a few days after that. Once
          shipping is underway you'll receive confirmation directly from PayPal
          with tracking information. Allow approximately one week for
          domestic delivery and 2-3 weeks for international delivery. <span className="bold">
          Please note</span>: Packages ship via Priority Mail or a comparably fast
          USPS/UPS service for the same delivery address. For example,
          a package that's estimated to arrive within three days through either USPS
          Priority Mail or USPS First Class Mail will ship via one of these service at
          the shipper's discretion.
        </div>
        <div>
          {renderSectionTitle('follow')}
          Check out Huetown on <a className="text-link" href="https://www.instagram.com/huetown">
          Instagram</a>. Or sign up below for Huetown's email list. Your
          information won't be shared with miscreants: view Huetown's <Link className="text-link" to={`/${routes.privacyPolicy}`}>Privacy Policy</Link>.
        </div>
        <div>
          {renderSectionTitle('places')}
          Huetown items are available at these retail spots in Rhode Island:
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
