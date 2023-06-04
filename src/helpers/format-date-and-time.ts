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

function formatMonth(text: string): string {
  return text.charAt(0).toUpperCase() + text.substring(1);
}

function formatTwentyFourHourTime(date: Date): string {
  const hoursTwentyFourHourClock: number = date.getHours();
  const minutes: string = formatPadStart(date.getMinutes());
  const seconds: string = formatPadStart(date.getSeconds());
  const twentyFourHourTime: string = `${hoursTwentyFourHourClock}:${minutes}:${seconds}`;
  return twentyFourHourTime;
}

function formatTwelveHourTime(twentyFourHourTime: string): string {
  const hoursTwentyFourHourClock: number = +twentyFourHourTime.slice(0, 2);
  const minutesAndSeconds: string = twentyFourHourTime.slice(2);
  const hoursTwelveHourClock: number
    = (hoursTwentyFourHourClock > twelveHours) || (hoursTwentyFourHourClock === 0)
    ? Math.abs(hoursTwentyFourHourClock - twelveHours)
    : hoursTwentyFourHourClock;
  const isAm: boolean = hoursTwentyFourHourClock < twelveHours;
  const timePeriod: string = isAm ? amPeriod : pmPeriod;
  return `${hoursTwelveHourClock}${minutesAndSeconds} ${timePeriod}`;
}

function formatFullDateAndTime(date: Date): string {
  const dayOfTheWeek: string = days[date.getDay() + 1].toUpperCase();
  const month: string = formatMonth(months[date.getMonth() + 1]);
  const dateNumber: number = date.getDate();
  const year: number = date.getFullYear();
  const twentyFourHourTime: string = formatTwentyFourHourTime(date);
  const hoursTwelveHourClock: string = formatTwelveHourTime(twentyFourHourTime);
  return `${dayOfTheWeek} ${month} ${dateNumber}, ${year} at ${hoursTwelveHourClock}`;
}

export default {
  formatFullDateAndTime,
  formatTwentyFourHourTime
};
