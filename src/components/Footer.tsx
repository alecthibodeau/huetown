import { Link } from 'react-router-dom';

/* Conmponents */
import IconLinks from './IconLinks';

/* Helpers */
import scrollToTop from '../helpers/scroll-to-top';

/* Styles */
import '../styles/footer.scss';

function Footer(): JSX.Element {
  return (
    <footer id="footer">
      <div className="footer-bar">
        <div className="footer-information">
          <div className="footer-left">
            &copy;{` Huetown ${new Date().getFullYear()}`}
          </div>
          <div className="footer-right">
            <IconLinks />
            <Link
              className="text-link-light"
              to="/"
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
