import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

/* Constants */
import routes from '../constants/routes';

function RedirectToMoonSpace(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => { navigate(`/${routes.moonSpace}`) }, [navigate]);
  return (<></>);
}

export default RedirectToMoonSpace;
