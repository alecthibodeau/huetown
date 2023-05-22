/* Constants */
import phasesTable from '../constants/digital-lunar-calendar/lunar-calendars-information';

/* Helpers */
import textFormatting from './text-formatting';

const { formatPadStart } = textFormatting;

const numberMax: number = 3;
const oneRandomNumber: number = Math.floor(Math.random() * numberMax);

function getCurrentLunarPhase(date: Date): string {
  return phasesTable[date.getFullYear()].phaseDates[+((date.getMonth() + 1) + formatPadStart(date.getDate()))];
}

function getCurrentColor(date: Date): string {
  return phasesTable[date.getFullYear()].backgroundColor;
}

function getRandomOrnamentLiveChange(date: Date): string {
  return phasesTable[date.getFullYear()].ornaments[Math.floor(Math.random() * numberMax)];
}

const digitalLunarCalendar = {
  oneRandomNumber,
  getCurrentLunarPhase,
  getCurrentColor,
  getRandomOrnamentLiveChange
}

export default digitalLunarCalendar;