/* Interfaces */
import DateLookupTable from '../interfaces/DateLookupTable';

/* Helpers */
import textFormatting from './text-formatting';

const { formatPadStart } = textFormatting;

const amPeriod: string = 'am';
const pmPeriod: string = 'pm';
const twelveHours: number = 12;

const days: DateLookupTable = {
  1: 'sun',
  2: 'mon',
  3: 'tue',
  4: 'wed',
  5: 'thu',
  6: 'fri',
  7: 'sat'
};

const months: DateLookupTable = {
  1: 'jan',
  2: 'feb',
  3: 'mar',
  4: 'apr',
  5: 'may',
  6: 'jun',
  7: 'jul',
  8: 'aug',
  9: 'sep',
  10: 'oct',
  11: 'nov',
  12: 'dec'
};

function formatHours (hoursTwentyFour: number): number {
  if (hoursTwentyFour === 0) return twelveHours;
  return hoursTwentyFour > twelveHours ? hoursTwentyFour - twelveHours : hoursTwentyFour;
}

function formatMonth (text: string): string {
  return text.charAt(0).toUpperCase() + text.substring(1);
}

function formatDateAndTime(date: Date): string {
  const dayOfTheWeek: string = days[date.getDay() + 1].toUpperCase();
  const month: string = formatMonth(months[date.getMonth() + 1]);
  const year: number = date.getFullYear();
  const hoursTwentyFourHourClock: number = date.getHours();
  const isAm: boolean = hoursTwentyFourHourClock < twelveHours;
  const timePeriod: string = isAm ? amPeriod : pmPeriod;
  const hours: number = formatHours(hoursTwentyFourHourClock);
  const minutes: string = formatPadStart(date.getMinutes());
  const seconds: string = formatPadStart(date.getSeconds());
  const time: string = `${hours}:${minutes}:${seconds}`;
  return `${dayOfTheWeek} ${month} ${date.getDate()}, ${year} at ${time} ${timePeriod}`;
}

export default formatDateAndTime;
