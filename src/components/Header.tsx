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
  const { shop, moonSpace, about, contact } = routes;

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

  function renderViewCartForm(): JSX.Element {
    return (
       <form
         target="paypal"
         action="https://www.paypal.com/cgi-bin/webscr"
         method="post"
         className="paypal-cart-form"
       >
         <input type="hidden" name="cmd" value="_cart" />
         <input type="hidden" name="business" value="LKTT6RVG75QQN" />
         <input type="hidden" name="display" value="1" />
         <input
           className="paypal-link"
           type="submit"
           value={text.viewCart}
           alt={text.viewCart}
           onClick={closeMobileNav}
         />
       </form>
    );
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
            {renderNavLinkWrapper(shop)}
            {renderViewCartForm()}
            {renderNavLinkWrapper(moonSpace)}
            {renderNavLinkWrapper(about)}
          </> :
          <>
            {renderNavLinkWrapper(contact)}
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
