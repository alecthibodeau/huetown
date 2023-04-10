const miniprintDescription = 'print measuring 2.5 x 2.5 inches overall, with an image dimension of 1.75 x 1.75 inches in a single pass of ink';
const miniprintLetterpressDescription = `is a letterpress ${miniprintDescription}`;
const miniprintScreenDescription = `is a screen ${miniprintDescription}`;
const miniprintLetterpressPrinting = 'This unlimited edition is exquisitely printed from Alec\'s original drawing work by Dan Wood and his team at DWRI Letterpress on light gray 100# cover stock. Each print is hand numbered and signed on the front in pencil by Alec.';
const miniprintScreenPrinting = 'This unlimited edition is lovingly screen printed by Alec from his original drawing work on light gray cover stock. Each print is hand numbered and signed on the front in pencil by Alec.';
const miniprintLetterpressFull = `${miniprintLetterpressDescription} ${miniprintLetterpressPrinting}`;

const postcardTextPrefix = 'Caption on the back:';

const text = {
  addToCart: 'Add to cart',
  viewCart: 'view cart',
  shipsFlat: 'Ships flat',
  colossalBlurb: 'Ornate renderings of natural life frame the elegant letterpress print, which expertly melds artful illustration with timely information.',
  byAlecThibodeau: 'by Alec Thibodeau',
  dimensionsTwoAndAHalfInches: '2.5 x 2.5 inches',
  dimensionsFiveAndAHalfInches: '5.5 x 5.5 inches',
  dimensionsFiveAndThreeQuartersInches: '5.75 x 5.75 inches',
  dimensionsSixByFourInches: '6 x 4 inches',
  dimensionsLunarCalendar: '19 x 11.75 inches',
  lunarCalendar: 'lunar calendar',
  lunarCalendarPrice: 45,
  lunarCalendarLocationProvidence: 'The calendar is printed in Providence, Rhode Island, which is identified as a representative location within the artwork.',
  lunarCalendarLocationNewYork: 'New York City is identified as a representative location within the artwork.',
  lunarCalendarPaper2023: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
  lunarCalendarPaper2022: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Coral 111# cover paper',
  lunarCalendarPaper2021: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Kiwi 111# cover paper',
  lunarCalendarPaper2020: 'Mohawk Fine Papers acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
  lunarCalendarPaper2019: 'French Paper Company acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
  lunarCalendarPaper2018: 'French Paper Company acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
  lunarCalendarPaper2017: 'French Paper Company acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
  postcard: 'postcard',
  postcardFinish: 'Mellow, satin finish',
  postcardColor: 'Full-color front / single-color back',
  postcardPrice: 1,
  postcardCaptionAssets: `${postcardTextPrefix} "Assets (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches"`,
  postcardCaptionCachalot: `${postcardTextPrefix} "The cachalot, or sperm whale, swims in the open ocean and has the largest brain of any animal."`,
  postcardCaptionGreatWhiteShark: `${postcardTextPrefix} "The great white shark inhabits most of the world's oceans and wants to be your friend."`,
  postcardCaptionHippopotamus: `${postcardTextPrefix} "The hippopotamus has a name which means 'horse of the river' in Ancient Greek."`,
  postcardCaptionRhodeIslandWhale: `${postcardTextPrefix} "The North Atlantic humpback whale swims in waters off Rhode Island and can grow to 50 feet in length."`,
  print: 'print',
  printDescriptionAbundance: 'is a letterpress print measuring 5.5 x 5.5 inches overall, with an image dimension of 4 x 4 inches in three ink colors and a layer of stamped blue foil. The edition is exquisitely printed from Alec\'s original drawing work by Dan Wood and his team at DWRI Letterpress on Legion Paper acid-free 350gsm Colorplan Mist 130# cover stock. Each print is hand numbered and signed on the front in pencil by Alec.',
  printDescriptionFunktionslust: 'is a screen print measuring 5.75 x 5.75 inches overall, with an image dimension of 4.75 x 4.75 inches in two ink colors. The edition is lovingly screen printed by Alec from his original drawing work. Each print is hand numbered and signed on the front in pencil.',
  printDescriptionOrcaLumina: `${miniprintScreenDescription} ${miniprintScreenPrinting}`,
  printDescriptionProtonSwan: miniprintLetterpressFull,
  printDescriptionSpacePony: miniprintLetterpressFull,
  printDescriptionStentorian: 'is a letterpress print measuring 5.5 x 5.5 inches overall, with an image dimension of 3.5 x 3.5 inches in two ink colors. The edition is exquisitely printed from Alec\'s original drawing work by Dan Wood and his team at DWRI Letterpress on Legion Paper acid-free 350gsm Colorplan Mist 130# cover stock. Each print is hand numbered and signed on the front in pencil by Alec.',
  printDescriptionTigerMoontain: miniprintLetterpressFull,
  letterpressPrint: 'Letterpress print',
  screenPrint: 'Screen print, printed by the artist',
  numberedAndSigned: 'Numbered and signed',
  initialedByTheArtist: 'Initialed by the artist'
};

export default text;
