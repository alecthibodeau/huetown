import { useState } from 'react';

import { Link } from 'react-router-dom';

/* Conmponents */
import CustomSVG from './CustomSVG';
import InstagramLogo from './svg-paths/InstagramLogo';

/* Constants */
import routes from '../constants/routes';
import variables from '../constants/_variables';

/* Helpers */
import scrollToTop from '../helpers/scroll-to-top';

/* Styles */
import '../styles/footer.scss';

function Footer(): JSX.Element {
  const [isInstagramLogoActive, setIsInstagramLogoActive] = useState<boolean>(false);
  const {
    colorRainbowYellow,
    colorWhite,
    dimensionSVGInstagramLogoViewBox
  } = variables;

  function handleInstagramLogoActive(): void {
    setIsInstagramLogoActive(true);
  }

  function handleInstagramLogoInactive(): void {
    setIsInstagramLogoActive(false);
  }

  return (
    <footer id="footer">
      <div className="footer-bar">
        <div className="footer-information">
          <div className="footer-left">
            &copy; {`Huetown ${new Date().getFullYear()}`}
          </div>
          <div className="footer-right">
            <a
              href="https://www.instagram.com/huetown"
              aria-label="Visit Huetown's Instagram account"
              onFocus={handleInstagramLogoActive}
              onBlur={handleInstagramLogoInactive}
              onMouseEnter={handleInstagramLogoActive}
              onMouseLeave={handleInstagramLogoInactive}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomSVG
                name="Instagram logo"
                svgFillColor={isInstagramLogoActive ? colorRainbowYellow : colorWhite}
                svgViewBox={dimensionSVGInstagramLogoViewBox}
                svgPaths={<InstagramLogo />}
              />
            </a>
            <Link
              className="text-link-light"
              to={`/${routes.privacyPolicy}`}
              onClick={scrollToTop}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
