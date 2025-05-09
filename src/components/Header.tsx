import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* Interfaces */
import IconLinks from './IconLinks';

/* Constants */
import images from '../constants/images';
import routes from '../constants/routes';
import text from '../constants/text';

/* Styles */
import '../styles/header.scss';

function Header(props: { isBreakpointXs: boolean, isShopActive: boolean }): JSX.Element {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const { huetownLogoGrayDark, huetownLogoWhite } = images.header;

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
      <div className="nav-link-wrapper">
        <NavLink
          to={`/${route}`}
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          onClick={closeMobileNav}>
          {route.replace('-', ' ')}
        </NavLink>
      </div>
    )
  }

  return (
    <header>
      <div className="huetown-logo-and-burger-button">
        <Link to="/" onClick={closeMobileNav}>
          <img
            className={`huetown-logo-${props.isBreakpointXs ? 'white' : 'gray'}`}
            src={props.isBreakpointXs ? huetownLogoWhite : huetownLogoGrayDark}
            alt="Huetown logo" />
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
            {renderNavLinkWrapper(routes.shop)}
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              className="paypal-cart-form"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
              <input
                className="paypal-link"
                type="submit"
                value={text.viewCart}
                alt={text.viewCart}
                onClick={closeMobileNav}
              />
            </form>
            {renderNavLinkWrapper(routes.moonSpace)}
            {renderNavLinkWrapper(routes.about)}
          </> :
          <>
            {renderNavLinkWrapper(routes.contact)}
          </>
        }
        {props.isBreakpointXs ? <div className="nav-menu-icons">
          <IconLinks isForMobileNav />
        </div>: null}
      </nav>
    </header>
  );
}

export default Header;
