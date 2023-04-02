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
  printStentorian: {
    id: 'AUN3U4NQ52J2W',
    category: text.print,
    title: 'Stentorian',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.printStentorianFeature,
    info: [
      text.dimensionsFiveAndAHalfInches,
      text.letterpressPrint,
      '', // To be rendered dynamically
      text.shipsFlat
    ],
    price: 15,
    printEdition: 250,
    detailImages: [
      images.items.printStentorianDetail02,
      images.items.printStentorianDetail03,
      images.items.printStentorianDetail04,
      images.items.printStentorianDetail05
    ]
  },
  printFunktionslust: {
    id: 'VARZ4F5RHAP9Y',
    category: text.print,
    title: 'Funktionslust',
    subtitle: text.byAlecThibodeau,
    featureImage: images.items.printFunktionslustFeature,
    info: [
      '5.75 x 5.75 inches',
      text.screenPrint,
      'Numbered and signed',
      text.shipsFlat
    ],
    price: 15,
    printEdition: 50
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
    info: postcardItemInfo.concat(`${text.postcardTextPrefix} "Assets (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches"`),
    price: text.postcardPrice
  },
  postcardCachalot: {
    id: '7H7ZNZJMAM5S4',
    category: text.postcard,
    title: 'Cachalot',
    subtitle: text.postcard,
    featureImage: images.items.postcardCachalotFeature,
    info: postcardItemInfo.concat(`${text.postcardTextPrefix} "The cachalot, or sperm whale, swims in the open ocean and has the largest brain of any animal."`),
    price: text.postcardPrice
  },
  postcardGreatWhiteShark: {
    id: 'UP6L2CNKJLSL2',
    category: text.postcard,
    title: 'Great White Shark',
    subtitle: text.postcard,
    featureImage: images.items.postcardGreatWhiteSharkFeature,
    info: postcardItemInfo.concat(`${text.postcardTextPrefix} "The great white shark inhabits most of the world's oceans and wants to be your friend."`),
    price: text.postcardPrice
  },
  postcardHippopotamus: {
    id: 'T5XS8HXHARZG4',
    category: text.postcard,
    title: 'Hippopotamus',
    subtitle: text.postcard,
    featureImage: images.items.postcardHippopotamusFeature,
    info: postcardItemInfo.concat(`${text.postcardTextPrefix} "The hippopotamus has a name which means 'horse of the river' in Ancient Greek."`),
    price: text.postcardPrice
  },
  postcardRhodeIslandWhale: {
    id: 'WZXP99EBYSU5A',
    category: text.postcard,
    title: 'Rhode Island Whale',
    subtitle: text.postcard,
    featureImage: images.items.postcardRhodeIslandWhaleFeature,
    info: postcardItemInfo.concat(`${text.postcardTextPrefix} "The North Atlantic humpback whale swims in waters off Rhode Island and can grow to 50 feet in length."`),
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
    detailImages: images.items.lunarCalendar2019DetailImages
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
