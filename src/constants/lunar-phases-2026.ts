/* Interfaces */
import LunarPhaseDates from '../interfaces/LunarPhaseDates';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';

const {
  newMoon,
  firstQuarterMoon,
  fullMoon,
  thirdQuarterMoon,
  nc71,
  xg65,
  xg66
} = digitalLunarCalendar.lunarPhases;

const lunarPhaseDates2026: LunarPhaseDates = {
  // Previous year, 2025: first quarter moon was on 12/27/2025
  101: xg65,
  102: xg66,
  103: fullMoon,
  110: thirdQuarterMoon,
  118: newMoon,
  125: firstQuarterMoon,
  201: fullMoon,
  209: thirdQuarterMoon,
  217: newMoon,
  224: firstQuarterMoon,
  303: fullMoon,
  311: thirdQuarterMoon,
  318: newMoon,
  325: firstQuarterMoon,
  401: fullMoon,
  410: thirdQuarterMoon,
  417: newMoon,
  423: firstQuarterMoon,
  501: fullMoon,
  509: thirdQuarterMoon,
  516: newMoon,
  523: firstQuarterMoon,
  531: fullMoon,
  608: thirdQuarterMoon,
  614: newMoon,
  621: firstQuarterMoon,
  629: fullMoon,
  707: thirdQuarterMoon,
  714: newMoon,
  721: firstQuarterMoon,
  729: fullMoon,
  805: thirdQuarterMoon,
  812: newMoon,
  819: firstQuarterMoon,
  828: fullMoon,
  904: thirdQuarterMoon,
  910: newMoon,
  918: firstQuarterMoon,
  926: fullMoon,
  1003: thirdQuarterMoon,
  1010: newMoon,
  1018: firstQuarterMoon,
  1026: fullMoon,
  1101: thirdQuarterMoon,
  1109: newMoon,
  1117: firstQuarterMoon,
  1124: fullMoon,
  1201: thirdQuarterMoon,
  1208: newMoon,
  1217: firstQuarterMoon,
  1223: fullMoon,
  1230: thirdQuarterMoon,
  1231: nc71
  // Following year, 2027: new moon will be on 1/7/2027
};

export default lunarPhaseDates2026;
