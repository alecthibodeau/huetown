/* Images */
import itemsImages from './items-images';

/* Strings */
const layoutText = {
  addToCart: 'Add to cart',
  colossalBlurb: 'Ornate renderings of natural life frame the elegant letterpress print, which expertly melds artful illustration with timely information.',
  byAlecThibodeau :'by Alec Thibodeau',
  categoryLunarCalendar: 'lunar calendar',
  categoryPostcard: 'postcard',
  categoryPrint: 'print',
  creditLetterpressPrint: 'Letterpress print',
  creditScreenPrint: 'Screen print, printed by the artist',
  dimensionsFiveAndAHalfInches: '5.5 x 5.5 inches',
  lunarCalendarLocationProvidence: 'The calendar is printed in Providence, Rhode Island, which is identified as a representative location within the artwork.',
  lunarCalendarLocationNewYork: 'New York City is identified as a representative location within the artwork.',
  shipsFlat: 'Ships flat'
}

const infoUniversals = {
  drawingInfoOriginalDrawing: `original drawing`,
  drawingInfoPenAndInk: 'pen and ink on Bristol board',
  drawingInfoThreeAndQuarterInches: '3.25 x 3.25 inches',
  drawingInfoSignedOnBack: 'signed on the back',
  lunarCalendarsubtitle: layoutText.byAlecThibodeau,
  lunarCalendarPrice: 45,
  postcardPrice: 1
};

const lunarCalendarItemInfo = [
  '19 x 11.75 inches',
  layoutText.creditLetterpressPrint,
  '', // To be rendered dynamically
  `${layoutText.shipsFlat}: unrolled in a sturdy box`
];

const postcardItemInfo = [
  '6 x 4 inches',
  'Mellow, satin finish',
  'Full-color front / single-color back',
];

const items = {
  postcardAssets: {
    id: '4CL74PH4FSSQ6',
    category: layoutText.categoryPostcard,
    title: 'Assets',
    subtitle: layoutText.categoryPostcard,
    imageFront: itemsImages.postcardAssets,
    info: postcardItemInfo.concat('TBD'),
    price: infoUniversals.postcardPrice
  },
  lunarCalendar2023: {
    id: '5QXP4DDGN7P2J',
    category: layoutText.categoryLunarCalendar,
    title: 'Thoughts Operator',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: itemsImages.lunarCalendar2023Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2023,
    lunarCalendarPaperInfo: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
    lunarCalendarLocation: layoutText.lunarCalendarLocationProvidence,
    detailImages: [
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
    id: '5VWNHRMJQCE7A',
    category: layoutText.categoryLunarCalendar,
    title: 'Entrancer\'s Medallion',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: itemsImages.lunarCalendar2022Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2022,
    lunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Coral 111# cover paper',
    lunarCalendarLocation: layoutText.lunarCalendarLocationProvidence,
    detailImages: [
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
    id: 'XA698W9J6TGEL',
    category: layoutText.categoryLunarCalendar,
    title: 'Casting Levels',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: itemsImages.lunarCalendar2021Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2021,
    lunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Kiwi 111# cover paper',
    lunarCalendarLocation: layoutText.lunarCalendarLocationProvidence,
    detailImages: [
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
    id: 'TGVEUGQD58AX2',
    category: layoutText.categoryLunarCalendar,
    title: 'The Instruments Agree',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: itemsImages.lunarCalendar2020Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2020,
    lunarCalendarPaperInfo: 'Mohawk Fine Papers acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
    lunarCalendarLocation: layoutText.lunarCalendarLocationProvidence,
    detailImages: [
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
    id: 'T45GH9BL83VQ4',
    category: layoutText.categoryLunarCalendar,
    title: 'Orchard Quest',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: itemsImages.lunarCalendar2019Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2019,
    lunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
    lunarCalendarLocation: layoutText.lunarCalendarLocationProvidence,
    detailImages: [
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
    id: '4LN49ZLYQLY88',
    category: layoutText.categoryLunarCalendar,
    title: 'Shimmery Circuit',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: itemsImages.lunarCalendar2018Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2018,
    lunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
    lunarCalendarLocation: layoutText.lunarCalendarLocationNewYork,
    detailImages: [
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
    id: 'C4RW9LGDQ8NYL',
    category: layoutText.categoryLunarCalendar,
    title: 'I Still See the X',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: itemsImages.lunarCalendar2017Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2017,
    lunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
    lunarCalendarLocation: layoutText.lunarCalendarLocationProvidence,
    detailImages: [
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
  printAbundance: {
    id: 'B6SBUBH8JRKV6',
    category: layoutText.categoryPrint,
    title: 'Abundance',
    subtitle: layoutText.byAlecThibodeau,
    imageFront: '',
    info: [
      layoutText.dimensionsFiveAndAHalfInches,
      layoutText.creditLetterpressPrint,
      '', // To be rendered dynamically
      layoutText.shipsFlat
    ],
    price: 25,
    printEdition: 250,
    detailImages: [
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
  items.lunarCalendar2017,
  items.postcardAssets
];

const itemsConstants = {
  items,
  itemsForPreview,
  layoutText
};

export default itemsConstants;
