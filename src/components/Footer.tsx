import { useState } from 'react';

import { Link } from 'react-router-dom';

/* Conmponents */
import CustomSVG from './CustomSVG';
import InstagramLogo from './svg-paths/InstagramLogo';

/* Constants */
import routes from '../constants/routes';
import variables from '../constants/_variables';

/* Styles */
import '../styles/footer.scss';

function Footer(): JSX.Element {
  const [isInstagramLogoFocused, setIsInstagramLogoFocused] = useState<boolean>(false);
  const [isInstagramLogoHovered, setIsInstagramLogoHovered] = useState<boolean>(false);
  const {
    colorRainbowYellow,
    colorWhite,
    dimensionSVGInstagramLogoViewBox
  } = variables;

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
              onFocus={() => setIsInstagramLogoFocused(true)}
              onBlur={() => setIsInstagramLogoFocused(false)}
              onMouseEnter={() => setIsInstagramLogoHovered(true)}
              onMouseLeave={() => setIsInstagramLogoHovered(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomSVG
                name="Instagram logo"
                svgFillColor={isInstagramLogoFocused || isInstagramLogoHovered ?
                  colorRainbowYellow : colorWhite
                }
                svgViewBox={dimensionSVGInstagramLogoViewBox}
                svgPaths={<InstagramLogo />}
              />
            </a>
            <Link className="text-link-light" to={`/${routes.privacyPolicy}`}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
