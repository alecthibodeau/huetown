import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isBreakpointXs && <Footer />}
    </BrowserRouter>
  );
};

export default App;
