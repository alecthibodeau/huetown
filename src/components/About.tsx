import logo from '../assets/images/huetown-h-logo.jpg';
import selfPortrait from '../assets/images/thibodeau-self-portrait.jpg';

/* Components */
import MailchimpForm from './MailChimpForm';

/* Interfaces */
import Shop from '../interfaces/Shop';

const shops = [
  {
    name: 'Craftland',
    url: 'https://shop.craftlandshop.com'
  },
  {
    name: 'White Buffalo',
    url: 'https://www.instagram.com/whitebuffalori'
  },
  {
    name: 'Simple Pleasures',
    url: 'https://www.simplepleasuresprovidence.com'
  },
  {
    name: 'Like No Udder',
    url: 'http://www.like-no-udder.com'
  }
];

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
      <div className="about-top">
        <img className="self-portrait" src={selfPortrait} alt="Self portrait drawing" />
        <div>
          <span className="bold">Huetown</span> is the web shop for artist Alec Thibodeau (me!).
          I make lunar calendars, prints, postcards and more. An artist's bio
          and images of my past work can be found at my portfolio site: <a className="text-link" href="https://alecthibodeau.com">alecthibodeau.com</a>.
          All items here are printed in the USA.
        </div>
        <img className="huetown-h-logo" src={logo} alt="Huetown H logo"/>
      </div>
      <div>
        <p>
          <span className="section-title">contact &mdash; </span>
          Huetown's contact email is <a className="text-link" href="mailto:info@huetown.com">info@huetown.com</a>.
        </p>
        <p>
          <span className="section-title">ordering &mdash; </span>
          Buy with confidence! I securely process all credit card payments made at Huetown
          through <a className="text-link" href="https://www.paypal.com">PayPal</a>.
        </p>
        <p>
          <span className="section-title">shipping &mdash; </span>
          Regardless of item quantity all orders ship for a flat rate in sturdy packaging via USPS Priority Mail from Providence, Rhode Island, USA.
          Flat rates are $8 for domestic shipments within the USA or $29 for international delivery to any other country.
          Packages generally ship within a couple business days of an order being placed, with domestic deliveries usually arriving a few days after that.
          Once shipping is underway you'll receive a confirmation email directly from PayPal, which includes tracking information.
          Please allow approximately one week for domestic delivery and 2-3 weeks for international delivery.
        </p>
        <p>
          <span className="section-title">follow &mdash; </span>
          Check out Huetown on <a className="text-link" href="https://www.instagram.com/huetown">Instagram</a> or <a className="text-link" href="https://www.twitter.com/huetown">Twitter</a>. Or sign up below for Huetown's email list, with monthly-ish notices.
          Your information won't be shared with miscreants.
        </p>
        <div>
          <span className="section-title ">places &mdash; </span>
          Huetown items are
          available at these retail spots:
          <ul>
            {shops.map(renderShopLink)}
          </ul>
        </div>
      </div>
      <MailchimpForm />
    </div>
  );
}

export default About;

