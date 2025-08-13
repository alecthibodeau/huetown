import { useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';

function ScrollToTop(): JSX.Element {
  const location: Location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    window.scrollTo({top: 0, behavior: 'instant'});
  }, [location.pathname]);

  return <></>;
}

export default ScrollToTop;
