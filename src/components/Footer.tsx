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

function Footer(props: { isFooterBreakpointXS: boolean }): JSX.Element {
  const [isInstagramLogoFocused, setIsInstagramLogoFocused] = useState<boolean>(false);
  const [isInstagramLogoHovered, setIsInstagramLogoHovered] = useState<boolean>(false);
  const {
    colorRainbowYellow,
    colorWhite,
    dimensionSVGInstagramLogoViewBox,
    dimensionSVGInstagramLogoViewBoxDesktop
  } = variables;

  return (
    <footer id="footer">
      <div className="footer-bar">
        <div className="footer-information">
          <div className="footer-left">
            &copy; {new Date().getFullYear()} Huetown
          </div>
          <div className="footer-right">
            <Link className="text-link-light" to={`/${routes.termsOfUse}`}>
              Terms of&nbsp;Use
            </Link>
            <Link className="text-link-light" to={`/${routes.privacyPolicy}`}>
              Privacy Policy
            </Link>
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
                svgViewBox={
                  props.isFooterBreakpointXS ?
                  dimensionSVGInstagramLogoViewBox :
                  dimensionSVGInstagramLogoViewBoxDesktop
                }
                svgPaths={<InstagramLogo />}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
