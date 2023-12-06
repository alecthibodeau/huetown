/* Interfaces */
import Items from '../interfaces/Items';

/* Constants */
import images from './images';
import prices from './prices';
import text from './text';

const lunarCalendarItemInfo: string[] = [
  text.dimensionsLunarCalendar,
  text.letterpressPrint,
  text.numberedAndSigned,
  `${text.shipsFlat} in a sturdy box`
];

const postcardItemInfo: string[] = [
  text.dimensionsSixByFourInches,
  text.postcardFinish,
  text.postcardColor
];

const items: Items = {
  lunarCalendar2024Preorder: {
    id: 'ZWHCPE4UFLL9A',
    category: text.lunarCalendar,
    title: 'Wondrous Beings',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2024Preorder,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2024,
    lunarCalendarPaper: text.lunarCalendarPaper2024,
    lunarCalendarLocation: text.lunarCalendarLocationProvidence,
  },
  lunarCalendar2023: {
    id: '5QXP4DDGN7P2J',
    category: text.lunarCalendar,
    title: 'Thoughts Operator',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2023Feature,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2023,
    lunarCalendarPaper: text.lunarCalendarPaper2023,
    lunarCalendarLocation: text.lunarCalendarLocationProvidence,
    detailImages: images.itemsDetailImages.lunarCalendar2023DetailImages
  },
  lunarCalendar2022: {
    id: '5VWNHRMJQCE7A',
    category: text.lunarCalendar,
    title: 'Entrancer\'s Medallion',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2022Feature,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2022,
    lunarCalendarPaper: text.lunarCalendarPaper2022,
    lunarCalendarLocation: text.lunarCalendarLocationProvidence,
    detailImages: images.itemsDetailImages.lunarCalendar2022DetailImages
  },
  lunarCalendar2021: {
    id: 'XA698W9J6TGEL',
    category: text.lunarCalendar,
    title: 'Casting Levels',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2021Feature,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2021,
    lunarCalendarPaper: text.lunarCalendarPaper2021,
    lunarCalendarLocation: text.lunarCalendarLocationProvidence,
    detailImages: images.itemsDetailImages.lunarCalendar2021DetailImages
  },
  lunarCalendar2020: {
    id: 'TGVEUGQD58AX2',
    category: text.lunarCalendar,
    title: 'The Instruments Agree',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2020Feature,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2020,
    lunarCalendarPaper: text.lunarCalendarPaper2020,
    lunarCalendarLocation: text.lunarCalendarLocationProvidence,
    detailImages: images.itemsDetailImages.lunarCalendar2020DetailImages
  },
  lunarCalendar2019: {
    id: 'T45GH9BL83VQ4',
    category: text.lunarCalendar,
    title: 'Orchard Quest',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2019Feature,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 500,
    lunarCalendarYear: 2019,
    lunarCalendarPaper: text.lunarCalendarPaper2019,
    lunarCalendarLocation: text.lunarCalendarLocationProvidence,
    detailImages: images.itemsDetailImages.lunarCalendar2019DetailImages
  },
  lunarCalendar2018: {
    id: '4LN49ZLYQLY88',
    category: text.lunarCalendar,
    title: 'Shimmery Circuit',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2018Feature,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2018,
    lunarCalendarPaper: text.lunarCalendarPaper2018,
    lunarCalendarLocation: text.lunarCalendarLocationNewYork,
    detailImages: images.itemsDetailImages.lunarCalendar2018DetailImages
  },
  lunarCalendar2017: {
    id: 'C4RW9LGDQ8NYL',
    category: text.lunarCalendar,
    title: 'I Still See the X',
    subtitle: text.byAlecThibodeau,
    featureImage: images.lunarCalendars.lunarCalendar2017Feature,
    info: lunarCalendarItemInfo,
    price: prices.lunarCalendarPrice,
    printEdition: 1000,
    lunarCalendarYear: 2017,
    lunarCalendarPaper: text.lunarCalendarPaper2017,
    lunarCalendarLocation: text.lunarCalendarLocationProvidence,
    detailImages: images.itemsDetailImages.lunarCalendar2017DetailImages
  },
  printAbundance: {
    id: 'B6SBUBH8JRKV6',
    category: text.print,
    title: 'Abundance',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printAbundanceFeature,
    info: [
      text.dimensionsFiveAndAHalfInches,
      text.letterpressPrint,
      text.numberedAndSigned,
      text.shipsFlat
    ],
    price: 25,
    printEdition: 250,
    detailImages: images.itemsDetailImages.printAbundanceDetailImages,
    description: text.printDescriptionAbundance
  },
  printFunktionslust: {
    id: 'VARZ4F5RHAP9Y',
    category: text.print,
    title: 'Funktionslust for All of Us',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printFunktionslustFeature,
    info: [
      text.dimensionsFiveAndThreeQuartersInches,
      text.screenPrint,
      text.numberedAndSigned,
      text.shipsFlat
    ],
    price: 15,
    printEdition: 50,
    detailImages: images.itemsDetailImages.printFunktionslustDetailImages,
    description: text.printDescriptionFunktionslust
  },
  printOrcaLumina: {
    id: '8BY2MK6Y89ZTA',
    category: text.print,
    title: 'Orca Lumina',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printOrcaLuminaFeature,
    info: [
      text.dimensionsTwoAndAHalfInches,
      text.letterpressPrint,
      text.initialedByTheArtist,
      text.shipsFlat
    ],
    price: prices.miniprintPrice,
    description: text.printDescriptionOrcaLumina
  },
  printPanTerra: {
    id: 'LN9FXB39LSAKY',
    category: text.print,
    title: 'Pan Terra',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printPanTerraFeature,
    info: [
      text.dimensionsTwoAndAHalfInches,
      text.letterpressPrint,
      text.initialedByTheArtist,
      text.shipsFlat
    ],
    price: prices.miniprintPrice,
    description: text.printDescriptionPanTerra
  },
  printProtonSwan: {
    id: '4SFG8LHK26JZ4',
    category: text.print,
    title: 'Proton Swan',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printProtonSwanFeature,
    info: [
      text.dimensionsTwoAndAHalfInches,
      text.letterpressPrint,
      text.initialedByTheArtist,
      text.shipsFlat
    ],
    price: prices.miniprintPrice,
    description: text.printDescriptionProtonSwan
  },
  printSpacePony: {
    id: '5PAQR2C3JY66N',
    category: text.print,
    title: 'Space Pony',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printSpacePonyFeature,
    info: [
      text.dimensionsTwoAndAHalfInches,
      text.letterpressPrint,
      text.initialedByTheArtist,
      text.shipsFlat
    ],
    price: prices.miniprintPrice,
    description: text.printDescriptionSpacePony
  },
  printStentorian: {
    id: 'AUN3U4NQ52J2W',
    category: text.print,
    title: 'Stentorian',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printStentorianFeature,
    info: [
      text.dimensionsFiveAndAHalfInches,
      text.letterpressPrint,
      text.numberedAndSigned,
      text.shipsFlat
    ],
    price: 15,
    printEdition: 250,
    detailImages: images.itemsDetailImages.printStentorianDetailImages,
    description: text.printDescriptionStentorian
  },
  printTigerMoontain: {
    id: 'MAEW4JA69BM5U',
    category: text.print,
    title: 'Tiger Moontain',
    subtitle: text.byAlecThibodeau,
    featureImage: images.prints.printTigerMoontainFeature,
    info: [
      text.dimensionsTwoAndAHalfInches,
      text.letterpressPrint,
      text.initialedByTheArtist,
      text.shipsFlat
    ],
    price: prices.miniprintPrice,
    description: text.printDescriptionTigerMoontain
  },
  postcardAssets: {
    id: '4CL74PH4FSSQ6',
    category: text.postcard,
    title: 'Assets',
    subtitle: text.postcard,
    featureImage: images.postcards.postcardAssetsFeature,
    info: postcardItemInfo.concat(text.postcardCaptionAssets),
    price: prices.postcardPrice
  },
  postcardCachalot: {
    id: '7H7ZNZJMAM5S4',
    category: text.postcard,
    title: 'Cachalot',
    subtitle: text.postcard,
    featureImage: images.postcards.postcardCachalotFeature,
    info: postcardItemInfo.concat(text.postcardCaptionCachalot),
    price: prices.postcardPrice
  },
  postcardGreatWhiteShark: {
    id: 'UP6L2CNKJLSL2',
    category: text.postcard,
    title: 'Great White Shark',
    subtitle: text.postcard,
    featureImage: images.postcards.postcardGreatWhiteSharkFeature,
    info: postcardItemInfo.concat(text.postcardCaptionGreatWhiteShark),
    price: prices.postcardPrice
  },
  postcardHippopotamus: {
    id: 'T5XS8HXHARZG4',
    category: text.postcard,
    title: 'Hippopotamus',
    subtitle: text.postcard,
    featureImage: images.postcards.postcardHippopotamusFeature,
    info: postcardItemInfo.concat(text.postcardCaptionHippopotamus),
    price: prices.postcardPrice
  },
  postcardRhodeIslandWhale: {
    id: 'WZXP99EBYSU5A',
    category: text.postcard,
    title: 'Rhode Island Whale',
    subtitle: text.postcard,
    featureImage: images.postcards.postcardRhodeIslandWhaleFeature,
    info: postcardItemInfo.concat(text.postcardCaptionRhodeIslandWhale),
    price: prices.postcardPrice
  }
};

export default items;
