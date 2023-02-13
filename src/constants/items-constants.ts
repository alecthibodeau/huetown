/* Images */
import itemsImages from './items-images';

/* Strings */
const addToCart = 'Add to cart';
const colossalBlurb = 'Ornate renderings of natural life frame the elegant letterpress print, which expertly melds artful illustration with timely information.';
const byAlecThibodeau = 'by Alec Thibodeau';
const categoryLunarCalendar = 'lunar calendar';
const categoryPostcard = 'postcard';
const categoryPrint = 'print';
const creditLetterpressPrint = 'Letterpress print';
const creditScreenPrint = 'Screen print, printed by the artist';
const dimensionsFiveAndAHalfInches = '5.5 x 5.5 inches';
const lunarCalendarLocationProvidence = 'The calendar is designed and printed in Providence, Rhode Island, which is identified as a representative location within the artwork.';
const lunarCalendarLocationNewYork = 'New York City is identified as a representative location within the artwork.';
const shipsFlat = 'Ships flat';

const itemInfoUniversals = {
  drawingInfoOriginalDrawing: `original drawing`,
  drawingInfoPenAndInk: 'pen and ink on Bristol board',
  drawingInfoThreeAndQuarterInches: '3.25 x 3.25 inches',
  drawingInfoSignedOnBack: 'signed on the back',
  lunarCalendaritemSubtitle: byAlecThibodeau,
  lunarCalendarPrice: 45,
  lunarCalendarInfoOne: '19 x 11.75 inches',
  lunarCalendarInfoTwo: creditLetterpressPrint,
  lunarCalendarInfoThree: '', // To be rendered dynamically
  lunarCalendarInfoFour: 'Ships flat: unrolled in a sturdy box',
  postcardInfoOne: '6 x 4 inches',
  postcardInfoTwo: 'Mellow, satin finish',
  postcardInfoThree: 'Full-color front / single-color back',
  postcardPrice: 1
}

const itemsInfo = {
  lunarCalendar2023: {
    itemId: '5QXP4DDGN7P2J',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'Thoughts Operator',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendar2023Main,
    itemInfo: [
      itemInfoUniversals.lunarCalendarInfoOne,
      itemInfoUniversals.lunarCalendarInfoTwo,
      itemInfoUniversals.lunarCalendarInfoThree,
      itemInfoUniversals.lunarCalendarInfoFour
    ],
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemPrintEdition: 500,
    itemLunarCalendarYear: 2023,
    itemLunarCalendarPaperInfo: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemDetailImages: [
      itemsImages.lunarCalendar2023Detail01,
      itemsImages.lunarCalendar2023Detail02,
      itemsImages.lunarCalendar2023Detail03,
      itemsImages.lunarCalendar2023Detail04,
      itemsImages.lunarCalendar2023Detail05,
      itemsImages.lunarCalendar2023Detail06,
      itemsImages.lunarCalendar2023Detail07,
      itemsImages.lunarCalendar2023Detail08
    ]
  },
};

export default {
  addToCart,
  colossalBlurb,
  itemsInfo,
  categoryLunarCalendar
};
