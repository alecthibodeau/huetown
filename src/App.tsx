import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';
import ItemsCollection from './components/ItemsCollection';
import NotFound from './components/NotFound';

/* Interfaces */
import ItemProps from './interfaces/ItemProps';

/* Constants */
import itemsCollection from './constants/items-collection';

/* Helpers */
import formatItemRoutePath from './helpers/helpers';

const resize: string = 'resize';
const breakpointSm: number = 576;

function App(): JSX.Element {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [isBreakpointXs, setIsBreakpointXs] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener(resize, getViewportWidth);
    setIsBreakpointXs(viewportWidth < breakpointSm ? true : false);
    return(() => window.removeEventListener(resize, getViewportWidth));
  }, [viewportWidth]);

  function getViewportWidth(): void {
    setViewportWidth(window.innerWidth);
  }

  function renderItemRoute(item: ItemProps): JSX.Element {
    return (
      <Route
        key={item.id}
        path={formatItemRoutePath(item.category, item.title)}
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
            lunarCalendarYear={item.lunarCalendarYear}
            lunarCalendarPaper={item.lunarCalendarPaper}
            lunarCalendarLocation={item.lunarCalendarLocation}
          />
        }
      />
    )
  }

  return (
    <BrowserRouter>
      <Header isBreakpointXs={isBreakpointXs} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<ItemsCollection />} />
          {itemsCollection.map(renderItemRoute)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isBreakpointXs && <Footer />}
    </BrowserRouter>
  );
}

export default App;
