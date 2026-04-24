import { useEffect, useRef } from 'react';
import { Link, Location, useLocation } from 'react-router-dom';

/* Components */
import MailchimpFormContainer from './MailChimpFormContainer';

/* Constants */
import images from '../constants/images';
import routes from '../constants/routes';

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

  return (
    <div className="about-content">
      <div className="about-upper">
        <div>
          <img className="self-portrait" src={selfPortrait} alt="Self portrait drawing" />
          <div className="about-description">
            Welcome to Huetown, featuring the work of artist Alec
            Thibodeau. Spend time with <Link className="text-link no-underline" to="/moon-space">
            Moon Space</Link>, an interactive lunar
            calendar with animated clouds and stars. Visit
            the <Link className="text-link no-underline" to="/shop">shop</Link> to
            order items. See more of Alec's work
            at <a className="text-link no-underline" href="https://alecthibodeau.com">
            alecthibodeau.com</a>.
          </div>
        </div>
        <img className="huetown-h-logo" src={hLogo} alt="Huetown H logo"/>
      </div>
      <div className="about-lower">
        <div>
          {renderSectionTitle('contact')}
          Email Huetown at <a className="text-link no-underline" href="mailto:info@huetown.com">info@huetown.com</a>
        </div>
        <div id={textOrdering} ref={orderingRef}>
          {renderSectionTitle(`${textOrdering} & shipping`)}
          See Huetown's <Link className="text-link no-underline" to={`/${routes.termsOfUse}`}>Terms of Use</Link>
        </div>
        <div>
          {renderSectionTitle('follow')}
          Find Huetown on <a className="text-link no-underline" href="https://www.instagram.com/huetown">
          Instagram</a>, or subscribe below to Huetown's email list (your
          information <Link className="text-link no-underline" to={`/${routes.privacyPolicy}`}>won't be shared with miscreants</Link>)
        </div>
        <div>
          {renderSectionTitle('places')}
          Huetown items are regularly available at <a className="text-link no-underline" href="https://shop.craftlandshop.com" target="_blank">Craftland</a> in Providence, Rhode Island
        </div>
      </div>
      <MailchimpFormContainer />
    </div>
  );
}

export default About;
