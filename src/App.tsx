import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

import Header from './components/Header';

const breakpointSm = 576;

function App() {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [isBreakpointXs, setIsBreakpointXs] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('resize', getViewportWidth);
    setIsBreakpointXs(viewportWidth < breakpointSm ? true : false);
    return(() => window.removeEventListener('resize', getViewportWidth));
  }, [viewportWidth]);

  function getViewportWidth(): void {
    setViewportWidth(window.innerWidth);
  }

  return (
    <BrowserRouter>
      <Header isBreakpointXs={isBreakpointXs} />
      {!isBreakpointXs && <Footer />}
    </BrowserRouter>
  );
};

export default App;
