/* Constants */
import annualDates from './annual-dates';
import phases2023 from './phases/phases-2023';

interface PhaseDates {
  [phaseDate: number]: string;
}

interface PrincipalPhasesNext {
  [phaseName: string]: string;
}

interface LunarCalendarsInformation {
  [year: number]: {
    backgroundColor: string;
    ornaments: string[];
    phaseDates: PhaseDates;
  };
}

const principalPhasesNext: PrincipalPhasesNext = {
  newMoon: 'xc',
  firstQuarterMoon: 'xg',
  fullMoon: 'ng',
  thirdQuarterMoon: 'nc'
}

function isLeapYear(year: number): boolean {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function addIntermediatePhases(phaseDates: PhaseDates, year: number): PhaseDates {
  if (isLeapYear(year)) phaseDates[229] = '';

  let intermediatePhasePrefix: string = '';
  let intermediatePhasesCluster: number[] = [];

  annualDates.forEach(
    date => {
      if (principalPhasesNext[phaseDates[date]]) {
        const clusterLength = intermediatePhasesCluster.length;
        if (clusterLength) {
          intermediatePhasesCluster.forEach(
            (intermediateDate, index) => {
              const phaseCode = `${intermediatePhasePrefix}${clusterLength}${index + 1}`;
              phaseDates[intermediateDate] = phaseCode;
            }
          );
        }
        intermediatePhasePrefix = principalPhasesNext[phaseDates[date]];
        intermediatePhasesCluster = [];
      }
      if (!phaseDates[date]) {
        intermediatePhasesCluster.push(date);
      }
    }
  );
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
