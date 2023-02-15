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
const lunarCalendarLocationProvidence = 'The calendar is printed in Providence, Rhode Island, which is identified as a representative location within the artwork.';
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
};

const items = {
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
  lunarCalendar2022: {
    itemId: '5VWNHRMJQCE7A',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'Entrancer\'s Medallion',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendar2022Main,
    itemInfo: [
      itemInfoUniversals.lunarCalendarInfoOne,
      itemInfoUniversals.lunarCalendarInfoTwo,
      itemInfoUniversals.lunarCalendarInfoThree,
      itemInfoUniversals.lunarCalendarInfoFour
    ],
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemPrintEdition: 500,
    itemLunarCalendarYear: 2022,
    itemLunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Coral 111# cover paper',
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemDetailImages: [
      // itemsImages.lunarCalendar2022Detail01,
      // itemsImages.lunarCalendar2022Detail02,
      // itemsImages.lunarCalendar2022Detail03,
      // itemsImages.lunarCalendar2022Detail04,
      // itemsImages.lunarCalendar2022Detail05,
      // itemsImages.lunarCalendar2022Detail06,
      // itemsImages.lunarCalendar2022Detail07,
      // itemsImages.lunarCalendar2022Detail08
    ]
  },
  lunarCalendar2021: {
    itemId: 'XA698W9J6TGEL',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'Casting Levels',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendar2021Main,
    itemInfo: [
      itemInfoUniversals.lunarCalendarInfoOne,
      itemInfoUniversals.lunarCalendarInfoTwo,
      itemInfoUniversals.lunarCalendarInfoThree,
      itemInfoUniversals.lunarCalendarInfoFour
    ],
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemPrintEdition: 500,
    itemLunarCalendarYear: 2021,
    itemLunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Kiwi 111# cover paper',
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemDetailImages: [
      // itemsImages.lunarCalendar2021Detail01,
      // itemsImages.lunarCalendar2021Detail02,
      // itemsImages.lunarCalendar2021Detail03,
      // itemsImages.lunarCalendar2021Detail04,
      // itemsImages.lunarCalendar2021Detail05,
      // itemsImages.lunarCalendar2021Detail06,
      // itemsImages.lunarCalendar2021Detail07,
      // itemsImages.lunarCalendar2021Detail08
    ]
  },
  lunarCalendar2020: {
    itemId: 'TGVEUGQD58AX2',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'The Instruments Agree',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendar2020Main,
    itemInfo: [
      itemInfoUniversals.lunarCalendarInfoOne,
      itemInfoUniversals.lunarCalendarInfoTwo,
      itemInfoUniversals.lunarCalendarInfoThree,
      itemInfoUniversals.lunarCalendarInfoFour
    ],
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemPrintEdition: 500,
    itemLunarCalendarYear: 2020,
    itemLunarCalendarPaperInfo: 'Mohawk Fine Papers acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemDetailImages: [
      // itemsImages.lunarCalendar2020Detail01,
      // itemsImages.lunarCalendar2020Detail02,
      // itemsImages.lunarCalendar2020Detail03,
      // itemsImages.lunarCalendar2020Detail04,
      // itemsImages.lunarCalendar2020Detail05,
      // itemsImages.lunarCalendar2020Detail06,
      // itemsImages.lunarCalendar2020Detail07,
      // itemsImages.lunarCalendar2020Detail08
    ]
  },
  lunarCalendar2019: {
    itemId: 'T45GH9BL83VQ4',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'Orchard Quest',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendar2019Main,
    itemInfo: [
      itemInfoUniversals.lunarCalendarInfoOne,
      itemInfoUniversals.lunarCalendarInfoTwo,
      itemInfoUniversals.lunarCalendarInfoThree,
      itemInfoUniversals.lunarCalendarInfoFour
    ],
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemPrintEdition: 500,
    itemLunarCalendarYear: 2019,
    itemLunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemDetailImages: [
      // itemsImages.lunarCalendar2019Detail01,
      // itemsImages.lunarCalendar2019Detail02,
      // itemsImages.lunarCalendar2019Detail03,
      // itemsImages.lunarCalendar2019Detail04,
      // itemsImages.lunarCalendar2019Detail05,
      // itemsImages.lunarCalendar2019Detail06,
      // itemsImages.lunarCalendar2019Detail07,
      // itemsImages.lunarCalendar2019Detail08
    ]
  },
  lunarCalendar2018: {
    itemId: '4LN49ZLYQLY88',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'Shimmery Circuit',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendar2018Main,
    itemInfo: [
      itemInfoUniversals.lunarCalendarInfoOne,
      itemInfoUniversals.lunarCalendarInfoTwo,
      itemInfoUniversals.lunarCalendarInfoThree,
      itemInfoUniversals.lunarCalendarInfoFour
    ],
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemPrintEdition: 1000,
    itemLunarCalendarYear: 2018,
    itemLunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
    itemLunarCalendarLocation: lunarCalendarLocationNewYork,
    itemDetailImages: [
      // itemsImages.lunarCalendar2018Detail01,
      // itemsImages.lunarCalendar2018Detail02,
      // itemsImages.lunarCalendar2018Detail03,
      // itemsImages.lunarCalendar2018Detail04,
      // itemsImages.lunarCalendar2018Detail05,
      // itemsImages.lunarCalendar2018Detail06,
      // itemsImages.lunarCalendar2018Detail07,
      // itemsImages.lunarCalendar2018Detail08
    ]
  },
  lunarCalendar2017: {
    itemId: 'C4RW9LGDQ8NYL',
    itemCategory: categoryLunarCalendar,
    itemTitle: 'I Still See the X',
    itemSubtitle: itemInfoUniversals.lunarCalendaritemSubtitle,
    itemImageFront: itemsImages.lunarCalendar2017Main,
    itemInfo: [
      itemInfoUniversals.lunarCalendarInfoOne,
      itemInfoUniversals.lunarCalendarInfoTwo,
      itemInfoUniversals.lunarCalendarInfoThree,
      itemInfoUniversals.lunarCalendarInfoFour
    ],
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemPrintEdition: 1000,
    itemLunarCalendarYear: 2017,
    itemLunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemDetailImages: [
      // itemsImages.lunarCalendar2017Detail01,
      // itemsImages.lunarCalendar2017Detail02,
      // itemsImages.lunarCalendar2017Detail03,
      // itemsImages.lunarCalendar2017Detail04,
      // itemsImages.lunarCalendar2017Detail05,
      // itemsImages.lunarCalendar2017Detail06,
      // itemsImages.lunarCalendar2017Detail07,
      // itemsImages.lunarCalendar2017Detail08
    ]
  },
};

const itemsForPreview = [
  items.lunarCalendar2023,
  items.lunarCalendar2022,
  items.lunarCalendar2021,
  items.lunarCalendar2020,
  items.lunarCalendar2019,
  items.lunarCalendar2018,
  items.lunarCalendar2017
];

export default {
  addToCart,
  categoryLunarCalendar,
  colossalBlurb,
  items,
  itemsForPreview
};
