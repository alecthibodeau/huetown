/* Constants */
import phases2023 from './phases/phases-2023';
import textFormatting from '../../helpers/text-formatting';

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

function getMonthsLengths(year: number): number[] {
  return [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];
}

function setDaysOfTheYear(year: number): number[] {
  const days: number[] = [];
  getMonthsLengths(year).forEach(
    (monthLength, index) => {
      for (let i = 1; i <= monthLength; i++) {
        days.push(+(`${index + 1}${textFormatting.formatPadStart(i)}`));
      }
    }
  );
  return days;
}

function addIntermediatePhases(phaseDates: PhaseDates, year: number): PhaseDates {
  const daysOfTheYear = setDaysOfTheYear(year);
  const intermediatePhasesDaysCluster: number[] = [];
  let intermediatePhasePrefix: string = '';

  daysOfTheYear.forEach(
    (day: number) => {
      const isPrincipalPhaseDay = principalPhasesNext[phaseDates[day]];
      if (isPrincipalPhaseDay) {
        const clusterLength = intermediatePhasesDaysCluster.length;
        if (clusterLength) {
          intermediatePhasesDaysCluster.forEach(
            (intermediateDate, index) => {
              const phaseCode = `${intermediatePhasePrefix}${clusterLength}${index + 1}`;
              phaseDates[intermediateDate] = phaseCode;
            }
          );
        }
        intermediatePhasePrefix = principalPhasesNext[phaseDates[day]];
        intermediatePhasesDaysCluster.length = 0;
      }
      if (!phaseDates[day]) {
        intermediatePhasesDaysCluster.push(day);
      }
    }
  );
  console.log('phaseDates: ', phaseDates);
  return phaseDates;
}

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: 'cyan',
    ornaments: ['apey', 'horsey', 'doggy'],
    phaseDates: addIntermediatePhases(phases2023, 2023)
  },
  2024: {
    backgroundColor: 'brown',
    ornaments: ['bunny', 'birdy', 'skunky'],
    phaseDates: { 101: '' }
  }
};

export default lunarCalendarsInformation;
