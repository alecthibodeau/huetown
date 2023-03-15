/* Images */
import images from './images';

/* Strings */
const text = {
  addToCart: 'Add to cart',
  colossalBlurb: 'Ornate renderings of natural life frame the elegant letterpress print, which expertly melds artful illustration with timely information.',
  byAlecThibodeau: 'by Alec Thibodeau',
  lunarCalendar: 'lunar calendar',
  postcard: 'postcard',
  print: 'print',
  letterpressPrint: 'Letterpress print',
  screenPrint: 'Screen print, printed by the artist',
  dimensionsFiveAndAHalfInches: '5.5 x 5.5 inches',
  locationProvidence: 'The calendar is printed in Providence, Rhode Island, which is identified as a representative location within the artwork.',
  locationNewYork: 'New York City is identified as a representative location within the artwork.',
  shipsFlat: 'Ships flat'
}

const infoUniversals = {
  lunarCalendarsubtitle: text.byAlecThibodeau,
  lunarCalendarPrice: 45,
  postcardPrice: 1
};

const lunarCalendarItemInfo = [
  '19 x 11.75 inches',
  text.letterpressPrint,
  '', // To be rendered dynamically
  `${text.shipsFlat}: unrolled in a sturdy box`
];

const postcardItemInfo = [
  '6 x 4 inches',
  'Mellow, satin finish',
  'Full-color front / single-color back',
];

const items = {
  postcardAssets: {
    id: '4CL74PH4FSSQ6',
    category: text.postcard,
    title: 'Assets',
    subtitle: text.postcard,
    imageFront: images.postcardAssets,
    info: postcardItemInfo.concat('Assets (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches'),
    price: infoUniversals.postcardPrice
  },
  lunarCalendar2023: {
    id: '5QXP4DDGN7P2J',
    category: text.lunarCalendar,
    title: 'Thoughts Operator',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: images.lunarCalendar2023Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2023,
    lunarCalendarPaperInfo: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: [
      images.lunarCalendar2023Detail01,
      images.lunarCalendar2023Detail02,
      images.lunarCalendar2023Detail03,
      images.lunarCalendar2023Detail04,
      images.lunarCalendar2023Detail05,
      images.lunarCalendar2023Detail06,
      images.lunarCalendar2023Detail07,
      images.lunarCalendar2023Detail08
    ]
  },
  lunarCalendar2022: {
    id: '5VWNHRMJQCE7A',
    category: text.lunarCalendar,
    title: 'Entrancer\'s Medallion',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: images.lunarCalendar2022Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2022,
    lunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Coral 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: [
      // images.lunarCalendar2022Detail01,
      // images.lunarCalendar2022Detail02,
      // images.lunarCalendar2022Detail03,
      // images.lunarCalendar2022Detail04,
      // images.lunarCalendar2022Detail05,
      // images.lunarCalendar2022Detail06,
      // images.lunarCalendar2022Detail07,
      // images.lunarCalendar2022Detail08
    ]
  },
  lunarCalendar2021: {
    id: 'XA698W9J6TGEL',
    category: text.lunarCalendar,
    title: 'Casting Levels',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: images.lunarCalendar2021Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2021,
    lunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Kiwi 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: [
      // images.lunarCalendar2021Detail01,
      // images.lunarCalendar2021Detail02,
      // images.lunarCalendar2021Detail03,
      // images.lunarCalendar2021Detail04,
      // images.lunarCalendar2021Detail05,
      // images.lunarCalendar2021Detail06,
      // images.lunarCalendar2021Detail07,
      // images.lunarCalendar2021Detail08
    ]
  },
  lunarCalendar2020: {
    id: 'TGVEUGQD58AX2',
    category: text.lunarCalendar,
    title: 'The Instruments Agree',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: images.lunarCalendar2020Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2020,
    lunarCalendarPaperInfo: 'Mohawk Fine Papers acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: [
      // images.lunarCalendar2020Detail01,
      // images.lunarCalendar2020Detail02,
      // images.lunarCalendar2020Detail03,
      // images.lunarCalendar2020Detail04,
      // images.lunarCalendar2020Detail05,
      // images.lunarCalendar2020Detail06,
      // images.lunarCalendar2020Detail07,
      // images.lunarCalendar2020Detail08
    ]
  },
  lunarCalendar2019: {
    id: 'T45GH9BL83VQ4',
    category: text.lunarCalendar,
    title: 'Orchard Quest',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: images.lunarCalendar2019Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2019,
    lunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: [
      // images.lunarCalendar2019Detail01,
      // images.lunarCalendar2019Detail02,
      // images.lunarCalendar2019Detail03,
      // images.lunarCalendar2019Detail04,
      // images.lunarCalendar2019Detail05,
      // images.lunarCalendar2019Detail06,
      // images.lunarCalendar2019Detail07,
      // images.lunarCalendar2019Detail08
    ]
  },
  lunarCalendar2018: {
    id: '4LN49ZLYQLY88',
    category: text.lunarCalendar,
    title: 'Shimmery Circuit',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: images.lunarCalendar2018Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2018,
    lunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
    lunarCalendarLocation: text.locationNewYork,
    detailImages: [
      // images.lunarCalendar2018Detail01,
      // images.lunarCalendar2018Detail02,
      // images.lunarCalendar2018Detail03,
      // images.lunarCalendar2018Detail04,
      // images.lunarCalendar2018Detail05,
      // images.lunarCalendar2018Detail06,
      // images.lunarCalendar2018Detail07,
      // images.lunarCalendar2018Detail08
    ]
  },
  lunarCalendar2017: {
    id: 'C4RW9LGDQ8NYL',
    category: text.lunarCalendar,
    title: 'I Still See the X',
    subtitle: infoUniversals.lunarCalendarsubtitle,
    imageFront: images.lunarCalendar2017Main,
    info: lunarCalendarItemInfo,
    price: infoUniversals.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2017,
    lunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: [
      // images.lunarCalendar2017Detail01,
      // images.lunarCalendar2017Detail02,
      // images.lunarCalendar2017Detail03,
      // images.lunarCalendar2017Detail04,
      // images.lunarCalendar2017Detail05,
      // images.lunarCalendar2017Detail06,
      // images.lunarCalendar2017Detail07,
      // images.lunarCalendar2017Detail08
    ]
  },
  printAbundance: {
    id: 'B6SBUBH8JRKV6',
    category: text.print,
    title: 'Abundance',
    subtitle: text.byAlecThibodeau,
    imageFront: '',
    info: [
      text.dimensionsFiveAndAHalfInches,
      text.letterpressPrint,
      '', // To be rendered dynamically
      text.shipsFlat
    ],
    price: 25,
    printEdition: 250,
    detailImages: [
      // images.lunarCalendar2017Detail01,
      // images.lunarCalendar2017Detail02,
      // images.lunarCalendar2017Detail03,
      // images.lunarCalendar2017Detail04,
      // images.lunarCalendar2017Detail05,
      // images.lunarCalendar2017Detail06,
      // images.lunarCalendar2017Detail07,
      // images.lunarCalendar2017Detail08
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

const constants = {
  items,
  images,
  itemsForPreview,
  text
};

export default constants;
