/* Constants */
import lunarCalendarsInformation from '../constants/lunar-calendars-information';
import lunarPhaseNamesLibrary from '../constants/lunar-phase-names-library';
import text from '../constants/text';

/* Helpers */
import formatText from './format-text';

const {
  waningCrescentPrefix,
  waningGibbousPrefix,
  waxingCrescentPrefix,
  waxingGibbousPrefix
} = lunarPhaseNamesLibrary;

const monthJanuary: number = 0;
const monthDecember: number = 11;
const dateFirst: number = 1;
const dateThirtyFirst: number = 31;

const commonYearLength: number = 365;
const leapYearLength: number = 366;

const years: { [key: number]: string } = {
  2024: 'twenty-four',
  2025: 'twenty-five',
  2026: 'twenty-six'
};

const numberMax: number = 3;
const oneRandomNumber: number = Math.floor(Math.random() * numberMax);

const phasesInfoForUser: { [phase: string]: string } = {
  ne: text.lunarPhaseNew,
  fi: text.lunarPhaseFirstQuarter,
  fu: text.lunarPhaseFull,
  th: text.lunarPhaseThirdQuarter,
  xc: `${text.lunarPhaseWaxing} ${text.lunarPhaseCrescent}`,
  xg: `${text.lunarPhaseWaxing} ${text.lunarPhaseGibbous}`,
  ng: `${text.lunarPhaseWaning} ${text.lunarPhaseGibbous}`,
  nc: `${text.lunarPhaseWaning} ${text.lunarPhaseCrescent}`
};

function getLunarPhase(date: Date): string {
  const monthFormatted: number = date.getMonth() + 1;
  const dayFormatted: string = formatText.formatPadStart(date.getDate());
  const numericalDate: number = +(monthFormatted + dayFormatted);
  return lunarCalendarsInformation[date.getFullYear()].lunarPhaseDates[numericalDate];
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
  years,
  oneRandomNumber,
  phasesInfoForUser,
  getLunarPhase,
  getLunarPhaseCategory,
  getRandomOrnamentLiveChange
}

export default digitalLunarCalendar;
