/* Interfaces */
import LunarCalendarsInformation from '../interfaces/LunarCalendarsInformation';

/* Constants */
import lunarPhaseDates2023 from './lunar-phases-2023';
import lunarPhaseDates2024 from './lunar-phases-2024';
import lunarPhaseDates2025 from './lunar-phases-2025';

/* Helpers */
import setIntermediateLunarPhasesDates from '../helpers/set-intermediate-lunar-phases-dates';

const twentyThreeBluePaper: string = '#008eb2';
const twentyFourPlumPaper: string = '#a3469c';
const twentyFiveKellyGreenPaper: string = '#178d6a';

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: twentyThreeBluePaper,
    ornaments: ['apey', 'horsey', 'doggy'],
    lunarPhaseDates: setIntermediateLunarPhasesDates(lunarPhaseDates2023, 2023)
  },
  2024: {
    backgroundColor: twentyFourPlumPaper,
    ornaments: ['bunny', 'birdy', 'skunky'],
    lunarPhaseDates: setIntermediateLunarPhasesDates(lunarPhaseDates2024, 2024)
  },
  2025: {
    backgroundColor: twentyFiveKellyGreenPaper,
    ornaments: ['kitty', 'beasty', 'loony'],
    lunarPhaseDates: setIntermediateLunarPhasesDates(lunarPhaseDates2025, 2025)
  }
};

export default lunarCalendarsInformation;
