/* Constants */
import images from './images';
import text from './text';

const lunarCalendarItemInfo: string[] = [
  text.dimensionsLunarCalendar,
  text.letterpressPrint,
  '', // To be rendered dynamically
  `${text.shipsFlat} in a sturdy box`
];

const postcardItemInfo: string[] = [
  text.dimensionsSixByFourInches,
  text.postcardFinish,
  text.postcardColor
];

const items = {
  printAbundance: {
    id: 'B6SBUBH8JRKV6',
    category: text.print,
    title: 'Abundance',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.printAbundanceFeature,
    info: [
      text.dimensionsFiveAndAHalfInches,
      text.letterpressPrint,
      '', // To be rendered dynamically
      text.shipsFlat
    ],
    price: 25,
    printEdition: 250,
    detailImages: [
      images.items.printAbundanceDetail01,
      images.items.printAbundanceDetail02
    ]
  },
  printProtonSwan: {
    id: '4SFG8LHK26JZ4',
    category: text.print,
    title: 'Proton Swan',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.printProtonSwanFeature,
    info: [
      text.dimensionsTwoAndAHalfInches,
      text.letterpressPrint,
      text.initialedByTheArtist,
      text.shipsFlat
    ],
    price: 10
  },
  printOrcaLumina: {
    id: '8BY2MK6Y89ZTA',
    category: text.print,
    title: 'Orca Lumina',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.printOrcaLuminaFeature,
    info: [
      text.dimensionsTwoAndAHalfInches,
      text.screenPrint,
      text.initialedByTheArtist,
      text.shipsFlat
    ],
    price: 10
  },
  postcardAssets: {
    id: '4CL74PH4FSSQ6',
    category: text.postcard,
    title: 'Assets',
    subtitle: text.postcard,
    featureImage: images.items.postcardAssetsFeature,
    info: postcardItemInfo.concat('Caption on the back: Assets (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches'),
    price: text.postcardPrice
  },
  lunarCalendar2023: {
    id: '5QXP4DDGN7P2J',
    category: text.lunarCalendar,
    title: 'Thoughts Operator',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.lunarCalendar2023Feature,
    info: lunarCalendarItemInfo,
    price: text.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2023,
    lunarCalendarPaper: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: images.items.lunarCalendar2023DetailImages
  },
  lunarCalendar2022: {
    id: '5VWNHRMJQCE7A',
    category: text.lunarCalendar,
    title: 'Entrancer\'s Medallion',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.lunarCalendar2022Feature,
    info: lunarCalendarItemInfo,
    price: text.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2022,
    lunarCalendarPaper: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Coral 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: images.items.lunarCalendar2022DetailImages
  },
  lunarCalendar2021: {
    id: 'XA698W9J6TGEL',
    category: text.lunarCalendar,
    title: 'Casting Levels',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.lunarCalendar2021Feature,
    info: lunarCalendarItemInfo,
    price: text.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2021,
    lunarCalendarPaper: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Kiwi 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: []
  },
  lunarCalendar2020: {
    id: 'TGVEUGQD58AX2',
    category: text.lunarCalendar,
    title: 'The Instruments Agree',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.lunarCalendar2020Feature,
    info: lunarCalendarItemInfo,
    price: text.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2020,
    lunarCalendarPaper: 'Mohawk Fine Papers acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: []
  },
  lunarCalendar2019: {
    id: 'T45GH9BL83VQ4',
    category: text.lunarCalendar,
    title: 'Orchard Quest',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.lunarCalendar2019Feature,
    info: lunarCalendarItemInfo,
    price: text.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2019,
    lunarCalendarPaper: 'French Paper Company acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: []
  },
  lunarCalendar2018: {
    id: '4LN49ZLYQLY88',
    category: text.lunarCalendar,
    title: 'Shimmery Circuit',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.lunarCalendar2018Feature,
    info: lunarCalendarItemInfo,
    price: text.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2018,
    lunarCalendarPaper: 'French Paper Company acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
    lunarCalendarLocation: text.locationNewYork,
    detailImages: []
  },
  lunarCalendar2017: {
    id: 'C4RW9LGDQ8NYL',
    category: text.lunarCalendar,
    title: 'I Still See the X',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.lunarCalendar2017Feature,
    info: lunarCalendarItemInfo,
    price: text.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2017,
    lunarCalendarPaper: 'French Paper Company acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
    lunarCalendarLocation: text.locationProvidence,
    detailImages: []
  }
};

export default items;
