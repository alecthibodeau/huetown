/* Components */
import Item from './Item';
import MoonSpace from './MoonSpace';
import News from './News';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import items from '../constants/items';

function Home(): JSX.Element {
  const featured: ItemProps = items.lunarCalendar2023;
  const isFeatured: boolean = false;
  const isNews: boolean = false;

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
        <div className="home-content">
          {isNews ? <News /> : <MoonSpace />}
        </div>
      }
    </>
  );
}

export default Home;
