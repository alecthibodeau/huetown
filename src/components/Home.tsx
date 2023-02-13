/* Components */
import Item from './Item';

/* Constants */
import itemsConstants from '../constants/items-constants';

function Home() {
  const featured = itemsConstants.itemsInfo.lunarCalendar2023;
  const isFeatured = true;

  return (
    <>
      {isFeatured ?
        <Item
          itemId={featured.itemId}
          itemCategory={featured.itemCategory}
          itemTitle={featured.itemTitle}
          itemSubtitle={featured.itemSubtitle}
          itemImageFront={featured.itemImageFront}
          itemInfo={featured.itemInfo}
          itemPrice={featured.itemPrice}
          itemPrintEdition={featured.itemPrintEdition}
          itemDetailImages={featured.itemDetailImages}
          itemLunarCalendarYear={featured.itemLunarCalendarYear}
          itemLunarCalendarPaperInfo={featured.itemLunarCalendarPaperInfo}
          itemLunarCalendarLocation={featured.itemLunarCalendarLocation}
        />
      : <div className="home-content">
          <span className="bold">Event:</span> <span>Catch Huetown at the <a className="text-link" href="https://unbound.risd.edu">2023 Unbound RISD Art Book Fair</a> on Saturday, April 15, from 11am-5pm in Providence, Rhode Island.</span>
        </div>}
    </>
  );
}

export default Home;
