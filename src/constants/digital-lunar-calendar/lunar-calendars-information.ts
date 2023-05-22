import annualDates from './annual-dates';
import phases2023 from './phases/phases-2023';

interface PhaseDates {
  [phaseDate: number]: string;
}

interface LunarCalendarsInformation {
  [year: number]: {
    backgroundColor: string;
    ornaments: string[];
    phaseDates: PhaseDates;
  };
}

function addIntermediatePhases(phaseDates: PhaseDates, year: number): PhaseDates {
  // Add check for leap year
  annualDates.forEach(
    date => {
      if (!phaseDates[date]) phaseDates[date] = 'foobar';
    }
  )
  console.log(phaseDates);
  return phaseDates;
}

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: 'cyan',
    ornaments: ['bunny', 'birdy', 'skunky'],
    phaseDates: addIntermediatePhases(phases2023, 2023)
  },
  2024: {
    backgroundColor: 'brown',
    ornaments: ['froggy', 'doggy', 'kitty'],
    phaseDates: { 101: '' }
  },
};

export default lunarCalendarsInformation;
