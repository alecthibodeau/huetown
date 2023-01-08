import Item from './Item';

import itemsConstants from '../constants/items-constants';

function Home() {
  return (
    // <div className="home-content">
    //   <div>
    //     <span className="bold">Event:</span> <span>Catch Huetown at the <a className="text-link" href="https://www.rivegfest.com">2023 Rhode Island VegFest</a> on February 4th and 5th in Providence, Rhode Island.</span>
    //   </div>
    // </div>
    <Item
      itemCategory={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemCategory}
      itemLunarCalendarTitle={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemLunarCalendarTitle}
      itemLunarCalendarYear={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemLunarCalendarYear}
      itemPrintEdition={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemPrintEdition}
      itemLunarCalendarPaperInfo={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemLunarCalendarPaperInfo}
      itemSubname={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemSubname}
      itemImageFront={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemImageFront}
      itemInfoOne={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemInfoOne}
      itemInfoTwo={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemInfoTwo}
      itemInfoThree={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemInfoThree}
      itemInfoFour={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemInfoFour}
      itemPrice={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemPrice}
      itemLunarCalendarLocation={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemLunarCalendarLocation}
      itemId={itemsConstants.itemsInfo.lunarCalendarTwentyThree.itemId}
    />
  );
}

export default Home;
