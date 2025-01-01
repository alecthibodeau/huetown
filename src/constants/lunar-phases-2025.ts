/* Interfaces */
import LunarPhaseDates from '../interfaces/LunarPhaseDates';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';

const {
  newMoon,
  firstQuarterMoon,
  fullMoon,
  thirdQuarterMoon,
  xc62,
  xc63,
  xc64,
  xc65,
  xc66,
  xg61,
  xg62,
  xg63,
  xg64
} = digitalLunarCalendar.lunarPhases;

const lunarPhaseDates2025: LunarPhaseDates = {
  // Previous year, 2024: new moon was on 12/30/2024
  101: xc62,
  102: xc63,
  103: xc64,
  104: xc65,
  105: xc66,
  106: firstQuarterMoon,
  113: fullMoon,
  121: thirdQuarterMoon,
  129: newMoon,
  205: firstQuarterMoon,
  212: fullMoon,
  220: thirdQuarterMoon,
  227: newMoon,
  306: firstQuarterMoon,
  314: fullMoon,
  322: thirdQuarterMoon,
  329: newMoon,
  404: firstQuarterMoon,
  412: fullMoon,
  420: thirdQuarterMoon,
  427: newMoon,
  504: firstQuarterMoon,
  512: fullMoon,
  520: thirdQuarterMoon,
  526: newMoon,
  602: firstQuarterMoon,
  611: fullMoon,
  618: thirdQuarterMoon,
  625: newMoon,
  702: firstQuarterMoon,
  710: fullMoon,
  717: thirdQuarterMoon,
  724: newMoon,
  801: firstQuarterMoon,
  809: fullMoon,
  816: thirdQuarterMoon,
  823: newMoon,
  831: firstQuarterMoon,
  907: fullMoon,
  914: thirdQuarterMoon,
  921: newMoon,
  929: firstQuarterMoon,
  1006: fullMoon,
  1013: thirdQuarterMoon,
  1021: newMoon,
  1029: firstQuarterMoon,
  1105: fullMoon,
  1112: thirdQuarterMoon,
  1120: newMoon,
  1128: firstQuarterMoon,
  1204: fullMoon,
  1211: thirdQuarterMoon,
  1219: newMoon,
  1227: firstQuarterMoon,
  1228: xg61,
  1229: xg62,
  1230: xg63,
  1231: xg64
  // Following year, 2026: full moon will be on 1/3/2026
};

export default lunarPhaseDates2025;
