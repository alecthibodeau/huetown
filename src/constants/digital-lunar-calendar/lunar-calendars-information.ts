/* Interfaces */
import LunarCalendarsInformation from '../../interfaces/digital-lunar-calendar-interfaces/LunarCalendarsInformation';

/* Constants */
import phases2023 from './phases/phases-2023';

/* Helpers */
import setIntermediatePhases from '../../helpers/set-intermediate-phases';

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: 'cyan',
    ornaments: ['apey', 'horsey', 'doggy'],
    phaseDates: setIntermediatePhases(phases2023, 2023)
  },
  2024: {
    backgroundColor: 'brown',
    ornaments: ['bunny', 'birdy', 'skunky'],
    phaseDates: { 101: '' }
  }
};

export default lunarCalendarsInformation;
