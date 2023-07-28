/* Interfaces */
import LunarCalendarsInformation from '../interfaces/LunarCalendarsInformation';

/* Constants */
import lunarPhases2023 from './lunar-phases-2023';

/* Helpers */
import setIntermediateLunarPhasesDates from '../helpers/set-intermediate-lunar-phases-dates';

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: '#008eb2',
    ornaments: ['apey', 'horsey', 'doggy'],
    lunarPhaseDates: setIntermediateLunarPhasesDates(lunarPhases2023, 2023)
  },
  2024: {
    backgroundColor: 'brown',
    ornaments: ['bunny', 'birdy', 'skunky'],
    lunarPhaseDates: { 101: '' }
  }
};

export default lunarCalendarsInformation;
