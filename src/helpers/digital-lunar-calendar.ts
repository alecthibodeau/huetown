/* Interfaces */
import LunarPhases from '../interfaces/digital-lunar-calendar-interfaces/LunarPhases';

/* Constants */
import lunarCalendarsInformation from '../constants/digital-lunar-calendar/lunar-calendars-information';
import text from '../constants/text';

/* Helpers */
import formatText from './format-text';

const monthJanuary: number = 0;
const monthDecember: number = 11;
const dateFirst: number = 1;
const dateThirtyFirst: number = 31;

const commonYearLength: number = 365;
const leapYearLength: number = 364;

const waxingCrescentPrefix: string = 'xc';
const waxingGibbousPrefix: string = 'xg';
const waningGibbousPrefix: string = 'ng';
const waningCrescentPrefix: string = 'nc';

const numberMax: number = 3;
const oneRandomNumber: number = Math.floor(Math.random() * numberMax);

const intermediatePhasesPrefixes = [
  waxingCrescentPrefix,
  waxingGibbousPrefix,
  waningGibbousPrefix,
  waningCrescentPrefix
];

const phasesInfoForUser: {[phase: string]: string} = {
  ne: text.lunarPhaseNew,
  fi: text.lunarPhaseFirstQuarter,
  fu: text.lunarPhaseFull,
  th: text.lunarPhaseThirdQuarter,
  xc: `${text.lunarPhaseWaxing} ${text.lunarPhaseCrescent}`,
  xg: `${text.lunarPhaseWaxing} ${text.lunarPhaseGibbous}`,
  ng: `${text.lunarPhaseWaning} ${text.lunarPhaseGibbous}`,
  nc: `${text.lunarPhaseWaning} ${text.lunarPhaseCrescent}`,
};

const principalPhases: LunarPhases = {
  newMoon: 'newMoon',
  firstQuarterMoon: 'firstQuarterMoon',
  fullMoon: 'fullMoon',
  thirdQuarterMoon: 'thirdQuarterMoon'
};

const lunarPhases: LunarPhases = addIntermediatePhasesToPrincipalPhases(principalPhases);

function isLeapYear(year: number): boolean {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function addIntermediatePhasesToPrincipalPhases(lunarPhases: LunarPhases): LunarPhases {
  const phaseClusterLengths: number[] = [8, 7, 6, 5];
  intermediatePhasesPrefixes.forEach(
    (prefix) => {
      phaseClusterLengths.forEach(
        (clusterLength) => {
          for (let i = 1; i <= clusterLength; i++) {
            const phaseCode = prefix + clusterLength + i;
            lunarPhases[phaseCode] = phaseCode;
          }
        }
      );
    }
  );
  console.log('lunarPhases: ', lunarPhases);
  return lunarPhases;
}

function getLunarPhase(date: Date): string {
  const monthFormatted: number = date.getMonth() + 1;
  const dayFormatted: string = formatText.formatPadStart(date.getDate());
  const numericalDate = +(monthFormatted + dayFormatted);
  return lunarCalendarsInformation[date.getFullYear()].phaseDates[numericalDate];
}

function getLunarPhaseCategory(phase: string): string {
  const phasePrefix: string = phase.slice(0, 2);
  const isWaning: boolean = phasePrefix === waningCrescentPrefix || phasePrefix === waningGibbousPrefix;
  const isWaxing: boolean = phasePrefix === waxingCrescentPrefix || phasePrefix === waxingGibbousPrefix;
  let lunarPhaseCategory: string = text.lunarPhasePrincipal;
  if (isWaning) lunarPhaseCategory = `${text.lunarPhaseIntermediate} ${text.lunarPhaseWaning}`;
  if (isWaxing) lunarPhaseCategory = `${text.lunarPhaseIntermediate} ${text.lunarPhaseWaxing}`;
  return lunarPhaseCategory;
}

function getBackgroundColor(date: Date): string {
  return lunarCalendarsInformation[date.getFullYear()].backgroundColor;
}

function getRandomOrnamentLiveChange(date: Date): string {
  return lunarCalendarsInformation[date.getFullYear()].ornaments[Math.floor(Math.random() * numberMax)];
}

const digitalLunarCalendar = {
  monthJanuary,
  monthDecember,
  dateFirst,
  dateThirtyFirst,
  commonYearLength,
  leapYearLength,
  oneRandomNumber,
  phasesInfoForUser,
  waxingCrescentPrefix,
  waxingGibbousPrefix,
  waningGibbousPrefix,
  waningCrescentPrefix,
  lunarPhases,
  isLeapYear,
  getLunarPhase,
  getLunarPhaseCategory,
  getBackgroundColor,
  getRandomOrnamentLiveChange
}

export default digitalLunarCalendar;
