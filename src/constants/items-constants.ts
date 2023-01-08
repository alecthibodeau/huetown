/* Routes */
const imagesDirectory = '../assets/images/';
const itemsDirectory = `${imagesDirectory}items/`;

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
const moreInfo = `<a class="text-link" href="#itemDetails">(more info)</a>`;
const orderNow = `<a class="text-link" href="#featureImage">Order now.</a>`;
const printEdition = `Hand numbered and signed by the artist in an edition of <span class="print-edition"></span> prints`;
const shipsFlat = 'Ships flat';

const itemInfoUniversals = {
  drawingInfoOriginalDrawing: `original drawing`,
  drawingInfoPenAndInk: 'pen and ink on Bristol board',
  drawingInfoThreeAndQuarterInches: '3.25 x 3.25 inches',
  drawingInfoSignedOnBack: 'signed on the back',
  lunarCalendarItemSubname: byAlecThibodeau,
  lunarCalendarPrice: 45,
  lunarCalendarInfoOne: '19 x 11.75 inches',
  lunarCalendarInfoTwo: creditLetterpressPrint,
  lunarCalendarInfoThree: `${printEdition} ${moreInfo}`,
  lunarCalendarInfoFour: 'Ships rolled and triple-packaged: archival wrap, eco-friendly protective tube and outer shipping container',
  lunarCalendarBlocks: `
    <div class=info-block>
      <span class="lunar-calendar-title ital"></span> is a letterpress-printed lunar calendar designed and drawn by Alec Thibodeau (me!),
      chronicling all phases of the moon for <span class="lunar-calendar-year"></span>.
      From an edition of <span class="print-edition"></span> prints <span class="lunar-calendar-title ital"></span> continues Alec's ongoing lunar calendar series,
      which features ornate illustrations framing an annual cycle of moon shapes.
      As with each of Alec's previous lunar calendars this piece measures 19" x 11.75" (a golden rectangle) and is expertly printed by Dan Wood
      and his team at <a class="text-link" href="https://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>.
    </div>
    <div class=info-block>
      The <span class="lunar-calendar-year"></span> lunar calendar comprises new drawings and year-specific lunar phase information.
      Each calendar is printed on <span class="lunar-calendar-paper-info"></span>, blind-debossed with Alec's name and the print shop's name &mdash; and hand numbered and signed by Alec. Each calendar ships in archival wrap with an accompanying information sheet inside an eco-friendly fiberboard protective tube (reusable, recycled, recyclable) with crimped ends.
    </div>
    <div class=info-block>
      The calendar's lunar phase chart is calibrated for any location in the Eastern Time Zone and is accurate to within a day for anywhere in the Northern Hemisphere. The chart also matches lunar cycles in the Southern Hemisphere: but with inverted shapes. <span class="lunar-calendar-location"></span>
    </div>
    <div class=info-block>
      Custom moon illustrations portray all principal lunar phases (New Moon, First Quarter Moon, Full Moon and Third Quarter Moon) plus all intermediate crescent and gibbous phases. For months with less than 31 days, drawings of clouds occupy the extra spaces.
      ${orderNow}
    </div>

    <div class="lunar-phases" id="lunarPhases">
      <!-- phases here -->
    </div>

    <div class="protective-tube" id="tube">
      <div class="tube-text">eco-friendly protective tube:</div>
      <img src="${itemsDirectory}protective_tube.png" alt="Protective tube for storing lunar calendar"/>
    </div>
  `,
  postcardInfoOne: '6 x 4 inches',
  postcardInfoTwo: 'Mellow, satin finish',
  postcardInfoThree: 'Full-color front / single-color back',
  postcardPrice: 1
}

const itemsInfo = {
  lunarCalendarTwentyThree: {
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'Thoughts Operator',
    itemLunarCalendarYear: 2023,
    itemPrintEdition: 500,
    itemLunarCalendarPaperInfo: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2023_photo_main_1000px.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemId: '5QXP4DDGN7P2J',
    itemMorePhotoPairOne: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_01_700px.jpg" alt="Lunar Calendar 2022 detail #1" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_03_700px.jpg" alt="Lunar Calendar 2022 detail #3" />
    `,
    itemMorePhotoPairTwo: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_05_700px.jpg" alt="Lunar Calendar 2023 detail #5" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_07_700px.jpg" alt="Lunar Calendar 2023 detail #7" />
    `,
    itemMorePhotoPairThree: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_04_700px.jpg" alt="Lunar Calendar 2023 detail #4" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_06_700px.jpg" alt="Lunar Calendar 2023 detail #6" />
    `,
    itemMorePhotoPairFour: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_02_700px.jpg" alt="Lunar Calendar 2022 detail #2" />
      <img id="itemDetails" class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_08_700px.jpg" alt="Lunar Calendar 2022 detail #8" />
    `,
    itemMoreInfo: `
    ${itemInfoUniversals.lunarCalendarBlocks}
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
  colossalBlurb,
  itemsInfo
};
