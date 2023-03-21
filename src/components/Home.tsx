/* Components */
import Item from './Item';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import items from '../constants/items';

function Home(): JSX.Element {
  const featured: ItemProps = items.lunarCalendar2023;
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
          lunarCalendarYear={featured.lunarCalendarYear}
          lunarCalendarPaper={featured.lunarCalendarPaper}
          lunarCalendarLocation={featured.lunarCalendarLocation}
        />
      : <div className="home-content">
          <a href="https://unbound.risd.edu">
            <img src="https://s33518.pcdn.co/wp-content/uploads/2020/04/risd-unbound-library-2019-1920x1440.jpg" />
          </a>
          <div>
            <span className="bold">Event:</span> <span>Join Huetown at the <a className="text-link" href="https://unbound.risd.edu">2023 Unbound RISD Art Book Fair</a> on Saturday, April 15, from 11am-5pm in Providence, Rhode Island.</span>
          </div>
        </div>}
    </>
  );
}

export default Home;
