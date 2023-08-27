/* Interfaces */
import LunarPhaseDates from '../interfaces/LunarPhaseDates';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';

const {
  ng76,
  ng77,
  newMoon,
  firstQuarterMoon,
  fullMoon,
  thirdQuarterMoon,
  xc61
} = digitalLunarCalendar.lunarPhases;

const lunarPhaseDates2024: LunarPhaseDates = {
  // Previous year, 2023: full moon was on 12/26/2023
  101: ng76,
  102: ng77,
  103: thirdQuarterMoon,
  111: newMoon,
  117: firstQuarterMoon,
  125: fullMoon,
  202: thirdQuarterMoon,
  209: newMoon,
  216: firstQuarterMoon,
  224: fullMoon,
  303: thirdQuarterMoon,
  310: newMoon,
  317: firstQuarterMoon,
  325: fullMoon,
  401: thirdQuarterMoon,
  408: newMoon,
  415: firstQuarterMoon,
  423: fullMoon,
  501: thirdQuarterMoon,
  507: newMoon,
  515: firstQuarterMoon,
  523: fullMoon,
  530: thirdQuarterMoon,
  606: newMoon,
  614: firstQuarterMoon,
  621: fullMoon,
  628: thirdQuarterMoon,
  705: newMoon,
  713: firstQuarterMoon,
  721: fullMoon,
  727: thirdQuarterMoon,
  804: newMoon,
  812: firstQuarterMoon,
  819: fullMoon,
  826: thirdQuarterMoon,
  902: newMoon,
  911: firstQuarterMoon,
  917: fullMoon,
  924: thirdQuarterMoon,
  1002: newMoon,
  1010: firstQuarterMoon,
  1017: fullMoon,
  1024: thirdQuarterMoon,
  1101: newMoon,
  1109: firstQuarterMoon,
  1115: fullMoon,
  1122: thirdQuarterMoon,
  1201: newMoon,
  1208: firstQuarterMoon,
  1215: fullMoon,
  1222: thirdQuarterMoon,
  1230: newMoon,
  1231: xc61
  // Following year, 2025: first quarter moon will be on 1/6/2025
};

export default lunarPhaseDates2024;
