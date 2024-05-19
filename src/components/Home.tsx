/* Components */
import Item from './Item';
import MoonSpace from './MoonSpace';
import News from './News';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import items from '../constants/items';

function Home(props: { isShopActive: boolean }): JSX.Element {
  const featured: ItemProps = items.lunarCalendar2024;
  const isFeatured: boolean = false;

  return (
    <>
      {isFeatured ?
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
        <div>
          <News />
          <MoonSpace isShopActive={props.isShopActive} />
        </div>
      }
    </>
  );
}

export default Home;
