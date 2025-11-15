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
        <a className="text-link no-underline" href={shop.url} target="_blank">{shop.name}</a>
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
            Thibodeau. Spend time with <Link className="text-link no-underline" to="/moon-space">
            <span className="ital">Moon Space</span></Link>, an interactive lunar
            calendar with animated clouds and stars. Visit
            the <Link className="text-link no-underline" to="/shop">shop</Link> to
            order items. To see more of Alec's work in drawing, printmaking and related media
            go to <a className="text-link no-underline" href="https://alecthibodeau.com">
            alecthibodeau.com</a>. Or find his coding projects
            at <a className="text-link no-underline" href="https://alect.me">alect.me</a>.
          </div>
        </div>
        <img className="huetown-h-logo" src={hLogo} alt="Huetown H logo"/>
      </div>
      <div className="about-lower">
        <div>
          {renderSectionTitle('contact')}
          Huetown's contact email is <a className="text-link no-underline" href="mailto:info@huetown.com">info@huetown.com</a>.
        </div>
        <div id={textOrdering} ref={orderingRef}>
          {renderSectionTitle(`${textOrdering} & shipping`)}
          See Huetown's <Link className="text-link no-underline" to={`/${routes.termsOfUse}`}>Terms of Use</Link>
        </div>
        <div>
          {renderSectionTitle('follow')}
          Check out Huetown on <a className="text-link no-underline" href="https://www.instagram.com/huetown">
          Instagram</a>. Or subscribe below to Huetown's email list: your
          information <Link className="text-link no-underline" to={`/${routes.privacyPolicy}`}>won't be shared with miscreants</Link>.
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
