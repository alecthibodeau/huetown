import Item from './Item';

import itemsConstants from '../constants/items-constants';

function Home() {
  const lunarCalendarTwentyThree = itemsConstants.itemsInfo.lunarCalendarTwentyThree;

  return (
    // <div className="home-content">
    //   <div>
    //     <span className="bold">Event:</span> <span>Catch Huetown at the <a className="text-link" href="https://www.rivegfest.com">2023 Rhode Island VegFest</a> on February 4th and 5th in Providence, Rhode Island.</span>
    //   </div>
    // </div>
    <Item
      itemId={lunarCalendarTwentyThree.itemId}
      itemCategory={lunarCalendarTwentyThree.itemCategory}
      itemTitle={lunarCalendarTwentyThree.itemTitle}
      itemSubtitle={lunarCalendarTwentyThree.itemSubtitle}
      itemImageFront={lunarCalendarTwentyThree.itemImageFront}
      itemInfoOne={lunarCalendarTwentyThree.itemInfoOne}
      itemInfoTwo={lunarCalendarTwentyThree.itemInfoTwo}
      itemInfoThree={lunarCalendarTwentyThree.itemInfoThree}
      itemInfoFour={lunarCalendarTwentyThree.itemInfoFour}
      itemPrice={lunarCalendarTwentyThree.itemPrice}
      itemPrintEdition={lunarCalendarTwentyThree.itemPrintEdition}
      itemDetailPhotos={lunarCalendarTwentyThree.itemDetailPhotos}
      itemLunarCalendarYear={lunarCalendarTwentyThree.itemLunarCalendarYear}
      itemLunarCalendarPaperInfo={lunarCalendarTwentyThree.itemLunarCalendarPaperInfo}
      itemLunarCalendarLocation={lunarCalendarTwentyThree.itemLunarCalendarLocation}
    />
  );
}

export default Home;
