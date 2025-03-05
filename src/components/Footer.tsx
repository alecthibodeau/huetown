/* Components */
import IconLinks from './IconLinks';

/* Styles */
import '../styles/footer.scss';

function Footer(): JSX.Element {
  return (
    <footer id="footer">
      <IconLinks isForMobileNav={false} />
    </footer>
  );
}

export default Footer;
