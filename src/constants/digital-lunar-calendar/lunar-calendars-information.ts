/* Interfaces */
import LunarCalendarsInformation from '../../interfaces/digital-lunar-calendar-interfaces/LunarCalendarsInformation';

/* Constants */
import phases2023 from './phases/phases-2023';

/* Helpers */
import setIntermediatePhasesDates from '../../helpers/set-intermediate-phases-dates';

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: 'cyan',
    ornaments: ['apey', 'horsey', 'doggy'],
    phaseDates: setIntermediatePhasesDates(phases2023, 2023)
  },
  2024: {
    backgroundColor: 'brown',
    ornaments: ['bunny', 'birdy', 'skunky'],
    phaseDates: { 101: '' }
  }
};

export default lunarCalendarsInformation;
