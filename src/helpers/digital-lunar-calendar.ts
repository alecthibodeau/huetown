/* Constants */
import lunarCalendarsInformation from '../constants/digital-lunar-calendar/lunar-calendars-information';

/* Helpers */
import textFormatting from './text-formatting';

const { formatPadStart } = textFormatting;

const numberMax: number = 3;
const oneRandomNumber: number = Math.floor(Math.random() * numberMax);

function getLunarPhase(date: Date): string {
  const monthFormatted: number = date.getMonth() + 1;
  const dayFormatted: string = formatPadStart(date.getDate());
  const numericMonthAndDay: number = +(monthFormatted + dayFormatted);
  return lunarCalendarsInformation[date.getFullYear()].phaseDates[numericMonthAndDay];
}

function getBackgroundColor(date: Date): string {
  return lunarCalendarsInformation[date.getFullYear()].backgroundColor;
}

function getRandomOrnamentLiveChange(date: Date): string {
  return lunarCalendarsInformation[date.getFullYear()].ornaments[Math.floor(Math.random() * numberMax)];
}

const digitalLunarCalendar = {
  oneRandomNumber,
  getLunarPhase,
  getBackgroundColor,
  getRandomOrnamentLiveChange
}

export default digitalLunarCalendar;
