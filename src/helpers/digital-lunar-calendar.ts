/* Constants */
import phasesTable from '../constants/digital-lunar-calendar/lunar-calendars-information';

/* Helpers */
import textFormatting from './text-formatting';

const { formatPadStart } = textFormatting;

const oneRandomNumber = Math.floor(Math.random() * 2);

function getCurrentLunarPhase(date: Date): string {
  return phasesTable[date.getFullYear()].days[+((date.getMonth() + 1) + formatPadStart(date.getDate()))];
}

function getCurrentColor(date: Date): string {
  return phasesTable[date.getFullYear()].backgroundColor;
}

function getRandomOrnamentLiveChange(date: Date): string {
  return phasesTable[date.getFullYear()].ornaments[Math.floor(Math.random() * 2)];
}

const digitalLunarCalendar = {
  oneRandomNumber,
  getCurrentLunarPhase,
  getCurrentColor,
  getRandomOrnamentLiveChange
}

export default digitalLunarCalendar;