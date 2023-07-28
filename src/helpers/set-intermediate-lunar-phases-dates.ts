/* Interfaces */
import LunarPhaseDates from '../interfaces/LunarPhaseDates';

/* Helpers */
import digitalLunarCalendar from './digital-lunar-calendar';
import formatText from './format-text';

const {
  isLeapYear,
  waxingCrescentPrefix,
  waxingGibbousPrefix,
  waningGibbousPrefix,
  waningCrescentPrefix
} = digitalLunarCalendar;

const principalPhasesNextCluster: {[phase: string]: string} = {
  newMoon: waxingCrescentPrefix,
  firstQuarterMoon: waxingGibbousPrefix,
  fullMoon: waningGibbousPrefix,
  thirdQuarterMoon: waningCrescentPrefix
};

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
      const isPrincipalPhaseDay = principalPhasesNextCluster[lunarPhaseDates[day]];
      if (isPrincipalPhaseDay) {
        const clusterLength = intermediatePhasesDaysCluster.length;
        if (clusterLength) {
          intermediatePhasesDaysCluster.forEach(
            (intermediateDate, index) => {
              const phaseCode = `${intermediatePhasePrefix}${clusterLength}${index + 1}`;
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
  console.log('lunarPhaseDates: ', lunarPhaseDates);
  return lunarPhaseDates;
}

export default setIntermediateLunarPhasesDates;
