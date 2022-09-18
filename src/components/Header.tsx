
import { Link } from 'react-router-dom';

/* Images */
import wordmarkForHeader from '../assets/images/huetown-script-logo-fifty-percent-gray.svg';

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="wordmark" src={wordmarkForHeader} alt="Huetown wordmark" />
      </Link>
    </header>
  );
}

export default Header;
