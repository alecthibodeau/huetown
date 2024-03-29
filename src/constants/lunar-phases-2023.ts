/* Interfaces */
import LunarPhaseDates from '../interfaces/LunarPhaseDates';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';

const {
  xg73,
  xg74,
  xg75,
  xg76,
  xg77,
  newMoon,
  firstQuarterMoon,
  fullMoon,
  thirdQuarterMoon,
  ng71,
  ng72,
  ng73,
  ng74,
  ng75
} = digitalLunarCalendar.lunarPhases;

const lunarPhaseDates2023: LunarPhaseDates = {
  // Previous year, 2022: first quarter moon was on 12/29/2022
  101: xg73,
  102: xg74,
  103: xg75,
  104: xg76,
  105: xg77,
  106: fullMoon,
  114: thirdQuarterMoon,
  121: newMoon,
  128: firstQuarterMoon,
  205: fullMoon,
  213: thirdQuarterMoon,
  220: newMoon,
  227: firstQuarterMoon,
  307: fullMoon,
  314: thirdQuarterMoon,
  321: newMoon,
  328: firstQuarterMoon,
  406: fullMoon,
  413: thirdQuarterMoon,
  420: newMoon,
  427: firstQuarterMoon,
  505: fullMoon,
  512: thirdQuarterMoon,
  519: newMoon,
  527: firstQuarterMoon,
  603: fullMoon,
  610: thirdQuarterMoon,
  618: newMoon,
  626: firstQuarterMoon,
  703: fullMoon,
  709: thirdQuarterMoon,
  717: newMoon,
  725: firstQuarterMoon,
  801: fullMoon,
  808: thirdQuarterMoon,
  816: newMoon,
  824: firstQuarterMoon,
  830: fullMoon,
  906: thirdQuarterMoon,
  914: newMoon,
  922: firstQuarterMoon,
  929: fullMoon,
  1006: thirdQuarterMoon,
  1014: newMoon,
  1021: firstQuarterMoon,
  1028: fullMoon,
  1105: thirdQuarterMoon,
  1113: newMoon,
  1120: firstQuarterMoon,
  1127: fullMoon,
  1205: thirdQuarterMoon,
  1212: newMoon,
  1219: firstQuarterMoon,
  1226: fullMoon,
  1227: ng71,
  1228: ng72,
  1229: ng73,
  1230: ng74,
  1231: ng75
  // Following year, 2024: third quarter moon will be on 1/3/2024
};

export default lunarPhaseDates2023;
