import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';
import MoonSpace from './components/MoonSpace';
import NotFound from './components/NotFound';
import Shop from './components/Shop';
import Veganly from './components/Veganly';

/* Interfaces */
import ItemProps from './interfaces/ItemProps';

/* Constants */
import itemsCollection from './constants/items-collection';
import routes from './constants/routes';

/* Helpers */
import formatText from './helpers/format-text';

function App(): JSX.Element {
  const [isBreakpointXs, setIsBreakpointXs] = useState<boolean>(true);
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const isShopActive: boolean = new Date() < new Date('2025-07-01');

  useEffect(() => {
    const breakpointSm: number = 576;
    const resize: string = 'resize';
    window.addEventListener(resize, getViewportWidth);
    setIsBreakpointXs(viewportWidth < breakpointSm);
    return () => window.removeEventListener(resize, getViewportWidth);
  }, [viewportWidth]);

  function getViewportWidth(): void {
    setViewportWidth(window.innerWidth);
  }

  function renderItemRoute(item: ItemProps, index: number): JSX.Element {
    return (
      <Route
        key={`${formatText.formatLettersAndNumbers(item.title.slice(0, 8))}-${index}`}
        path={formatText.formatItemRoutePath(item.category, item.title)}
        element={
          <Item
            id={item.id}
            category={item.category}
            title={item.title}
            subtitle={item.subtitle}
            featureImage={item.featureImage}
            info={item.info}
            price={item.price}
            printEdition={item.printEdition}
            detailImages={item.detailImages}
            description={item.description}
            lunarCalendarYear={item.lunarCalendarYear}
            lunarCalendarPaper={item.lunarCalendarPaper}
            lunarCalendarLocation={item.lunarCalendarLocation}
            isSoldOut={item.isSoldOut}
          />
        }
      />
    )
  }

  return (
    <BrowserRouter>
      <Header isBreakpointXs={isBreakpointXs} isShopActive={isShopActive} />
      <main id="main">
        <Routes>
          {isShopActive ?
            <>
              <Route path={`/${routes.about}`} element={<About />} />
              <Route path={`/${routes.shop}`} element={<Shop />} />
              {itemsCollection.map(renderItemRoute)}
            </>
          : null}
          <Route path="/" element={<Home isShopActive={isShopActive} />} />
          <Route path={`/${routes.contact}`} element={<Contact />} />
          <Route path={`/${routes.moonSpace}`} element={<MoonSpace isShopActive={isShopActive} />} />
          <Route path={`/${routes.veganly}`} element={<Veganly />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
