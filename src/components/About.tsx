import logo from '../assets/images/huetown-h-logo.jpg';
import selfPortrait from '../assets/images/thibodeau-self-portrait.jpg';

/* Components */
import MailchimpFormContainer from './MailChimpFormContainer';
import SectionTitle from './SectionTitle';

/* Interfaces */
import Shop from '../interfaces/Shop';

/* Constants */
import { shops } from '../constants/shops';

function About() {

  function renderShopLink(shop: Shop, index: number) {
    return (
      <li key={shop.name + index}>
        <a className="text-link" href={shop.url}>{shop.name}</a>
      </li>
    )
  }

  return (
    <div className="about-content">
      <div className="about-upper">
        <img className="self-portrait" src={selfPortrait} alt="Self portrait drawing" />
        <div>
          <span className="bold">Huetown</span> is the web shop for artist Alec Thibodeau (me!).
          I make drawings and prints, including lunar calendars. Select work is available here. Past work can be found at my portfolio site: <a className="text-link" href="https://alecthibodeau.com">alecthibodeau.com</a>.
        </div>
        <img className="huetown-h-logo" src={logo} alt="Huetown H logo"/>
      </div>
      <div className="about-lower">
        <div>
          <SectionTitle title="contact" />
          Huetown's contact email is <a className="text-link" href="mailto:info@huetown.com">info@huetown.com</a>.
        </div>
        <div>
          <SectionTitle title="ordering" />
          Buy with confidence! I securely process all credit card payments made at Huetown
          through <a className="text-link" href="https://www.paypal.com">PayPal</a>.
        </div>
        <div>
          <SectionTitle title="shipping" />
          Regardless of item quantity all orders ship for a flat rate in sturdy packaging via USPS Priority Mail from Providence, Rhode Island, USA.
          Flat rates are $8 for domestic shipments within the USA or $29 for international delivery to any other country.
          Packages generally ship within a couple business days of an order being placed, with domestic deliveries usually arriving a few days after that.
          Once shipping is underway you'll receive a confirmation email directly from PayPal, which includes tracking information.
          Please allow approximately one week for domestic delivery and 2-3 weeks for international delivery.
        </div>
        <div>
          <SectionTitle title="follow" />
          Check out Huetown on <a className="text-link" href="https://www.instagram.com/huetown">Instagram</a>. Or sign up below for Huetown's email list.
          Your information won't be shared with miscreants.
        </div>
        <div>
          <SectionTitle title="places" />
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

