/* Interfaces */
import LunarCalendarsInformation from '../interfaces/LunarCalendarsInformation';

/* Constants */
import lunarPhaseDates2023 from './lunar-phases-2023';
import lunarPhaseDates2024 from './lunar-phases-2024';

/* Helpers */
import setIntermediateLunarPhasesDates from '../helpers/set-intermediate-lunar-phases-dates';

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: '#008eb2',
    ornaments: ['apey', 'horsey', 'doggy'],
    lunarPhaseDates: setIntermediateLunarPhasesDates(lunarPhaseDates2023, 2023)
  },
  2024: {
    backgroundColor: '#a6439e',
    ornaments: ['bunny', 'birdy', 'skunky'],
    lunarPhaseDates: setIntermediateLunarPhasesDates(lunarPhaseDates2024, 2024)
  }
};

export default lunarCalendarsInformation;
