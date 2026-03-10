/* Interfaces */
import LunarPhaseDates from '../interfaces/LunarPhaseDates';

/* Helpers */
import formatText from './format-text';

const principalPhasesNextCluster: { [phase: string]: string } = {
  newMoon: 'xc',
  firstQuarterMoon: 'xg',
  fullMoon: 'ng',
  thirdQuarterMoon: 'nc'
};

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
    (monthLength, monthIndex) => {
      for (let i = 1; i <= monthLength; i++) {
        days.push(+(`${monthIndex + 1}${formatText.formatPadStart(i)}`));
      }
    }
  );
  return days;
}

function setIntermediateLunarPhasesDates(lunarPhaseDates: LunarPhaseDates, year: number): LunarPhaseDates {
  const intermediatePhasesDaysCluster: number[] = [];
  let intermediatePhasePrefix: string = '';
  setDaysOfTheYear(year).forEach(
    (day: number) => {
      const isPrincipalPhaseDay: boolean = principalPhasesNextCluster[lunarPhaseDates[day]] !== undefined;
      if (isPrincipalPhaseDay) {
        const clusterLength: number = intermediatePhasesDaysCluster.length;
        if (clusterLength) {
          intermediatePhasesDaysCluster.forEach(
            (intermediateDate, index) => {
              const phaseCode: string = `${intermediatePhasePrefix}${clusterLength}${index + 1}`;
              lunarPhaseDates[intermediateDate] = phaseCode;
            }
          );
        }
        intermediatePhasePrefix = principalPhasesNextCluster[lunarPhaseDates[day]];
        intermediatePhasesDaysCluster.length = 0;
      }
      if (!isPrincipalPhaseDay && !lunarPhaseDates[day]) {
        intermediatePhasesDaysCluster.push(day);
      }
    }
  );
  return lunarPhaseDates;
}

export default setIntermediateLunarPhasesDates;
