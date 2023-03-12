/* Components */
import Item from './Item';

/* Constants */
import itemsConstants from '../constants/items-constants';

function Home() {
  const featured = itemsConstants.items.lunarCalendar2023;
  const isFeatured = true;

  return (
    <>
      {isFeatured ?
        <Item
          id={featured.id}
          category={featured.category}
          title={featured.title}
          subtitle={featured.subtitle}
          imageFront={featured.imageFront}
          info={featured.info}
          price={featured.price}
          printEdition={featured.printEdition}
          detailImages={featured.detailImages}
          lunarCalendarYear={featured.lunarCalendarYear}
          lunarCalendarPaperInfo={featured.lunarCalendarPaperInfo}
          lunarCalendarLocation={featured.lunarCalendarLocation}
        />
      : <div className="home-content">
          <span className="bold">Event:</span> <span>Catch Huetown at the <a className="text-link" href="https://unbound.risd.edu">2023 Unbound RISD Art Book Fair</a> on Saturday, April 15, from 11am-5pm in Providence, Rhode Island.</span>
        </div>}
    </>
  );
}

export default Home;
