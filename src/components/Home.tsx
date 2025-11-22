import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Components */
import Item from './Item';
import News from './News';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import items from '../constants/items';
import routes from '../constants/routes';

function Home(props: { isShopActive: boolean }): JSX.Element {
  const featured: ItemProps = items.lunarCalendar2026;
  const isFeatured: boolean = true;
  const isNewsInHome: boolean = true;
  const isRedirectToMoonSpace: boolean = false;

  const navigate = useNavigate();

  useEffect(() => {
    if (isRedirectToMoonSpace) navigate(`/${routes.moonSpace}`);
  }, [navigate]);

  return (
    <>
      {isFeatured && props.isShopActive ?
        <Item
          id={featured.id}
          category={featured.category}
          title={featured.title}
          subtitle={featured.subtitle}
          featureImage={featured.featureImage}
          info={featured.info}
          price={featured.price}
          printEdition={featured.printEdition}
          detailImages={featured.detailImages}
          description={featured.description}
          lunarCalendarYear={featured.lunarCalendarYear}
          lunarCalendarPaper={featured.lunarCalendarPaper}
          lunarCalendarLocation={featured.lunarCalendarLocation}
        /> :
        isNewsInHome ? <News /> : null
      }
    </>
  );
}

export default Home;
