/* Images */
import itemsImages from './items-images';

/* Routes */
const imagesDirectory = '../assets/images/';
const itemsDirectory = `${imagesDirectory}items/`;

/* Strings */
const addToCart = 'Add to cart';
const colossalBlurb = 'Ornate renderings of natural life frame the elegant letterpress print, which expertly melds artful illustration with timely information.';
const byAlecThibodeau = 'by Alec Thibodeau';
const categoryLunarCalendar = 'lunar calendar';
const categoryPostcard = 'postcard';
const categoryPrint = 'print';
const creditLetterpressPrint = 'Letterpress print, printed by DWRI Letterpress';
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
  lunarCalendarInfoFour: 'Ships rolled and triple-packaged: archival wrap, eco-friendly protective tube and outer shipping container',
  postcardInfoOne: '6 x 4 inches',
  postcardInfoTwo: 'Mellow, satin finish',
  postcardInfoThree: 'Full-color front / single-color back',
  postcardPrice: 1
}

const lunarPhases = [
  {
    name: 'new',
    image: itemsImages.phaseNew
  },
  {
    name: 'first quarter',
    image: itemsImages.phaseFirstQuarter
  },
  {
    name: 'full',
    image: itemsImages.phaseFull
  },
  {
    name: 'third quarter',
    image: itemsImages.phaseThirdQuarter
  }
];

const itemsInfo = {
  lunarCalendarTwentyThree: {
    itemId: '5QXP4DDGN7P2J',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'Thoughts Operator',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendarTwentyThreeMain,
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
      itemsImages.lunarCalendarTwentyThreeDetail01,
      itemsImages.lunarCalendarTwentyThreeDetail02,
      itemsImages.lunarCalendarTwentyThreeDetail03,
      itemsImages.lunarCalendarTwentyThreeDetail04,
      itemsImages.lunarCalendarTwentyThreeDetail05,
      itemsImages.lunarCalendarTwentyThreeDetail06,
      itemsImages.lunarCalendarTwentyThreeDetail07,
      itemsImages.lunarCalendarTwentyThreeDetail08
    ],
    itemMoreInfo: `
    <div>
      <p>
        Follow <a class="text-link" href="https://www.instagram.com/huetown/" target="_blank">@huetown</a> on Instagram to see this print's letterpress production in action.
        And join the <a class="text-link" href="about.html">email list</a> to learn when other works are available.
      </p>
      <p>
        <span class="bold">Event:</span> Catch Huetown at the <a class="text-link" href="https://www.rivegfest.com">2023 Rhode Island VegFest</a> on February 4th and 5th in Providence, Rhode Island.
      </p>
      <p>
        Each lunar calendar preordered by November 25th, 2022 included a <span class="ital">Space Pony</span> letterpress print:
      </p>
    </div>
    <div class="additional-info">
      <div id="spacePony" class="item-accompanying">
        <img src="${itemsDirectory}/_preorders/space_pony_300px.jpg" />
      </div>
    </div>
  `
  },
};

export default {
  addToCart,
  colossalBlurb,
  lunarPhases,
  itemsInfo
};
