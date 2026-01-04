import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* Components */
import CustomSVG from './CustomSVG';
import HuetownLogo from './svg-paths/HuetownLogo';

/* Constants */
import routes from '../constants/routes';
import variables from '../constants/_variables';

/* Styles */
import '../styles/header.scss';

function Header(props: { isBreakpointXs: boolean, isShopActive: boolean }): JSX.Element {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const { shop, moonSpace, news, about, contact } = routes;
  const {
    colorSixtySevenPercentGray,
    colorWhite,
    dimensionSVGHuetownLogoViewBox
  } = variables;

  useEffect(() => {
    const mainElement: HTMLElement | null = document.getElementById('main');
    if (mainElement) {
      const click: string = 'click';
      mainElement.addEventListener(click, closeMobileNav);
      return function cleanupEventListener() {
        mainElement.removeEventListener(click, closeMobileNav);
      }
    }
  }, []);

  useEffect(() => {
    if (!props.isBreakpointXs && isMobileNavOpen) closeMobileNav();
  }, [props.isBreakpointXs, isMobileNavOpen]);

  function closeMobileNav(): void {
    setIsMobileNavOpen(false);
  }

  function renderBurgerBar(burgerBar: string, index: number): JSX.Element {
    return (
      <div
        key={`${burgerBar}-${index}`}
        className={`${burgerBar}${isMobileNavOpen ? ' closing-x-bar' : ''}`}>
      </div>
    )
  }

  function renderNavLinkWrapper(route: string): JSX.Element {
    return (
      <div key={`${route}-route`} className="nav-link-wrapper">
        <NavLink
          to={`/${route}`}
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          onClick={closeMobileNav}>
          {route.replace('-', ' ')}
        </NavLink>
      </div>
    )
  }

  function renderCheckoutForm(): JSX.Element {
    return (
      <form
        target="_blank"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        className="paypal-cart-form"
      >
        <input type="hidden" name="cmd" value="_cart" />
        <input type="hidden" name="business" value="LKTT6RVG75QQN" />
        <input type="hidden" name="display" value="1" />
        <button
          className="paypal-checkout-button"
          type="submit"
          title="Checkout"
          onClick={closeMobileNav}
        >
          <span className="material-symbols-outlined shopping-cart">
            shopping_cart
          </span>
        </button>
       </form>
    );
  }

  return (
    <header>
      <div className="huetown-logo-and-burger-button">
        <Link
          to="/"
          onClick={closeMobileNav}
          className="huetown-logo-link"
        >
          <CustomSVG
             name="Huetown logo"
             svgFillColor={props.isBreakpointXs ?
               colorWhite : colorSixtySevenPercentGray
             }
             svgViewBox={dimensionSVGHuetownLogoViewBox}
             svgPaths={<HuetownLogo />}
           />
        </Link>
        {props.isBreakpointXs ?
          <button
            id="burgerButton"
            className={`burger-button${isMobileNavOpen ? ' closing-x-button' : ''}`}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            <div className="burger-bars-container">
              {Array(3).fill('burger-bar').map(renderBurgerBar)}
            </div>
          </button>
        : null}
      </div>
      <nav className={`mobile-nav-is-${isMobileNavOpen ? 'open' : 'closed'}`}>
        {props.isShopActive ?
          <>
            {[shop, news, moonSpace, about].map(renderNavLinkWrapper)}
            {renderCheckoutForm()}
          </> :
          <>
            {renderNavLinkWrapper(contact)}
          </>
        }
      </nav>
    </header>
  );
}

export default Header;
