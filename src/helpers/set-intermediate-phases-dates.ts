/* Interfaces */
import PhaseDates from '../interfaces/digital-lunar-calendar-interfaces/PhaseDates';
import LunarPhases from '../interfaces/digital-lunar-calendar-interfaces/LunarPhases';

/* Helpers */
import textFormatting from './text-formatting';
import digitalLunarCalendar from './digital-lunar-calendar';

const {
  isLeapYear,
  waxingCrescentPrefix,
  waxingGibbousPrefix,
  waningGibbousPrefix,
  waningCrescentPrefix
} = digitalLunarCalendar;

const principalPhasesNextCluster: LunarPhases = {
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
        days.push(+(`${monthIndex + 1}${textFormatting.formatPadStart(i)}`));
      }
    }
  );
  return days;
}

function setIntermediatePhasesDates(phaseDates: PhaseDates, year: number): PhaseDates {
  const intermediatePhasesDaysCluster: number[] = [];
  let intermediatePhasePrefix: string = '';
  setDaysOfTheYear(year).forEach(
    (day: number) => {
      const isPrincipalPhaseDay = principalPhasesNextCluster[phaseDates[day]];
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
        intermediatePhasePrefix = principalPhasesNextCluster[phaseDates[day]];
        intermediatePhasesDaysCluster.length = 0;
      }
      if (!isPrincipalPhaseDay && !phaseDates[day]) {
        intermediatePhasesDaysCluster.push(day);
      }
    }
  );
  console.log('phaseDates: ', phaseDates);
  return phaseDates;
}

export default setIntermediatePhasesDates;
